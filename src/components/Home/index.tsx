import { lazy, Suspense, useEffect, useState } from 'react';
import { headerHeight } from '../../constants';
import { AnimatedText } from '../AnimatedText';

const BackgroundAnimation = lazy(
  async () =>
    await import('./BackgroundAnimation').then((module) => ({
      default: module.BackgroundAnimation,
    }))
);

export function Home(): JSX.Element {
  const [height, setHeight] = useState(window.innerHeight - headerHeight);
  const [animations, setAnimations] = useState<boolean[]>([]);

  useEffect(() => {
    function recalculateHeight(): void {
      setHeight(window.innerHeight - headerHeight);
    }

    if (window.innerWidth >= 640) {
      window.addEventListener('resize', recalculateHeight);
    }

    return () => {
      window.removeEventListener('resize', recalculateHeight);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative flex max-h-[900px] items-center"
      style={{ height, marginTop: headerHeight }}>
      <Suspense>
        <BackgroundAnimation />
      </Suspense>

      <div>
        <h2
          className="text-5xl font-bold sm:text-6xl"
          aria-label="Olá, eu sou o Daniel Castro!">
          <span className="sm:block">
            <AnimatedText
              show
              text="Olá, "
              onCompleteShow={() => {
                setAnimations([true]);
              }}
            />
          </span>
          <AnimatedText
            text="Eu sou o "
            show={animations[0]}
            onCompleteShow={() => {
              setAnimations([true, true]);
            }}
          />
          <span className="block sm:inline">
            <AnimatedText
              text="Daniel Castro!"
              show={animations[1]}
              onCompleteShow={() => {
                setAnimations([true, true, true]);
              }}
            />
          </span>
        </h2>

        <h1
          className="mt-2 block text-3xl font-bold text-primary sm:text-4xl"
          aria-label="Full Stack Developer">
          <AnimatedText
            show={animations[2]}
            text="Full Stack Developer"
            toWhite
            onCompleteShow={() => {
              setAnimations([true, true, true, true]);
            }}
          />
        </h1>

        <h2
          style={{ opacity: animations[3] ? 1 : 0 }}
          className="mt-6 max-w-md text-2xl transition delay-300 duration-700 sm:text-3xl">
          Apaixonado por códigos, lógica, programação e tecnologia!
        </h2>
      </div>

      <div className="absolute bottom-2 left-2 flex animate-bounce items-center justify-center text-sm">
        <div className="mr-1 mt-1 inline-block">
          <span className="material-symbols-outlined text-base">
            keyboard_arrow_down
          </span>
        </div>
        scroll down
      </div>
    </section>
  );
}
