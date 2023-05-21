import { useCallback, useEffect, useRef, useState } from 'react';
import * as Particles from 'react-particles';
import { loadFull } from 'tsparticles';

export function BackgroundAnimation(): JSX.Element {
  const [particlesNumber, setParticlesNumber] = useState(0);
  const [showCanvas, setShowCanvas] = useState(false);

  const intervalRef = useRef<number | null>(null);
  const engineRef = useRef<any>();

  useEffect(() => {
    window.addEventListener('resize', setParticles);

    return () => {
      window.removeEventListener('resize', setParticles);
    };
  }, []);

  const setParticles = useCallback(() => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }

      if (window.innerWidth < 900) {
        setParticlesNumber(35);
      } else {
        setParticlesNumber(75);
      }
    }, 500);
  }, [showCanvas]);

  const particlesInit = useCallback(async (engine: any) => {
    engineRef.current = engine;
    setParticles();
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (_: any) => {
    setShowCanvas(true);
  }, []);

  return (
    <Particles.Particles
      className={`absolute top-0 left-0 -z-10 h-full w-full transition-opacity duration-1000 ${
        particlesNumber > 0 && showCanvas ? 'opacity-1' : 'opacity-0'
      }`}
      options={{
        fullScreen: false,
        detectRetina: true,
        fpsLimit: 120,
        background: {
          color: {
            value: 'transparent',
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 70,
              duration: 0.5,
            },
          },
        },
        particles: {
          color: {
            value: '#F6DC4A',
          },
          links: {
            color: '#f6dc4a40',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: true,
            speed: 3,
            straight: false,
          },
          number: {
            value: particlesNumber,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
      }}
      init={particlesInit}
      loaded={particlesLoaded}
    />
  );
}
