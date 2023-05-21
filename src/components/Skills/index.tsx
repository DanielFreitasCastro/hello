import { AnimatedText } from '../AnimatedText';
import jsTsLogoImage from '../../assets/images/js-ts-logo.svg';

export function Skills(): JSX.Element {
  return (
    <section id="skills" className="mt-16 block sm:flex">
      <div className="mb-4 flex-1 sm:mb-0">
        <h3 className="mb-5 text-4xl font-bold">
          <AnimatedText show text="Skills &" />
          <span className="block">
            <AnimatedText show text="Experiência" />
          </span>
        </h3>

        <p className="mb-4">
          Minha principal stack de desenvolvimento é baseada em{' '}
          <span className="font-semibold text-primary">JavaScript</span> e{' '}
          <span className="font-semibold text-primary">TypeScript</span>, com
          expertise nas tecnologias{' '}
          <span className="text-primary">ReactJS</span>,{' '}
          <span className="text-primary">React Native</span>,{' '}
          <span className="text-primary">NodeJS</span>,{' '}
          <span className="text-primary">HTML</span> e{' '}
          <span className="text-primary">CSS</span>.
        </p>
        <p className="mb-4">
          Além disso, possuo experiência em outras tecnologias como Angular,
          Vue, NextJs, WordPress, AngularJs, Bootstrap, JQuery e SASS. Também
          possuo experiência com os principais serviços da AWS, bancos de dados,
          GraphQL e ORMs.
        </p>
        <p>
          Tenho habilidades com ferramentas como GIT, NPM, Yarn, Webpack,
          ViteJs, Grunt e Gulp. Possuo conhecimento em práticas de SEO e Google
          analytics e também integração com os principais gateways de pagamento.
        </p>
      </div>
      <div className="mt-4 flex flex-1 items-center justify-center gap-4 p-4 sm:mt-0">
        <img
          src={jsTsLogoImage}
          alt="Javascript & Typescript logo"
          width={230}
          className="aspect-square max-w-[180px] sm:max-w-[230px]"
        />
      </div>
    </section>
  );
}
