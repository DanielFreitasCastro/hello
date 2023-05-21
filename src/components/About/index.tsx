import { useState, useRef, useEffect } from 'react';
import { AnimatedAvatar } from '../AnimatedAvatar';
import { AnimatedText } from '../AnimatedText';

export function About(): JSX.Element {
  const timeOfService = new Date().getFullYear() - 2014;

  const [isAvatarInView, setIsAvatarInView] = useState(false);
  const avatarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsAvatarInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: '0px 0px -150px 0px' }
    );

    if (avatarRef.current != null) {
      observer.observe(avatarRef.current);
    }

    return () => {
      if (avatarRef.current != null) {
        observer.unobserve(avatarRef.current);
      }
    };
  });

  return (
    <section id="about" className="mt-16 block sm:flex">
      <div
        className="mb-4 flex flex-1 items-center justify-center sm:mb-0"
        ref={avatarRef}>
        <AnimatedAvatar isVisible={isAvatarInView} size={250} />
      </div>
      <div className="flex-1">
        <h3 className="mb-5 text-4xl font-bold">
          <AnimatedText show text="Sobre mim" />
        </h3>
        <p className="mb-4">
          Com{' '}
          <span className="text-primary">
            {timeOfService} anos de experiência
          </span>{' '}
          no desenvolvimento de aplicações{' '}
          <span className="text-primary">web e mobile</span>, me sinto confiante
          para enfrentar qualquer desafio profissional atuando como{' '}
          <span className="font-bold text-primary">
            desenvolvedor Full Stack
          </span>
          .
        </p>
        <p className="mb-4">
          Sempre busco criar{' '}
          <span className="text-primary">soluções de alta qualidade</span>,{' '}
          <span className="text-primary">responsivas</span>,{' '}
          <span className="text-primary">bem organizadas</span> e de{' '}
          <span className="text-primary">fácil manutenção</span>, seguindo as{' '}
          <span className="text-primary">melhores práticas do mercado</span>
        </p>
        <p className="mb-4">
          Sou uma pessoa organizada e{' '}
          <span className="text-primary">dedicada a solucionar problemas</span>,
          prestando{' '}
          <span className="text-primary"> muita atenção aos detalhes</span>.
          Além disso, sou um pai muito{' '}
          <span className="text-primary">orgulhoso</span>, de uma{' '}
          <span className="text-primary">linda menina</span>,{' '}
          <span className="font-bold text-primary">Luna</span>.
        </p>
      </div>
    </section>
  );
}
