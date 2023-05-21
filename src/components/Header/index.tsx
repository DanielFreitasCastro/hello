import { useEffect, useState, type MouseEvent } from 'react';
import logoImage from '../../assets/images/logo.svg';
import { useSidebar } from '../../hooks/use-sidebar';
import { headerHeight } from '../../constants';

export function Header(): JSX.Element {
  const [viewHasScrolled, setViewHasScrolled] = useState(false);
  const { setShowSidebar } = useSidebar();

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function handleScroll(): void {
    setViewHasScrolled(window.scrollY > 2 * headerHeight);
  }

  function scrollToTop(event?: MouseEvent<HTMLElement>): void {
    event?.preventDefault?.();
    setShowSidebar(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function scrollToSection(event: MouseEvent<HTMLElement>): void {
    event.preventDefault();

    const sectionId = event.currentTarget.getAttribute('href');

    if (sectionId !== null) {
      const section = document.querySelector(sectionId) as HTMLElement;

      if (section !== null) {
        setShowSidebar(false);

        window.scrollTo({
          top: section.offsetTop - headerHeight - 32, // 32 is the margin top of the section
          behavior: 'smooth',
        });
      }
    }
  }

  return (
    <header
      style={{ height: headerHeight }}
      className={`fixed left-0 top-0 z-10 w-full bg-black shadow-primary/10 backdrop-blur transition duration-300 ${
        viewHasScrolled ? 'bg-black-500/70 shadow-md' : ''
      }`}>
      <div className="m-auto flex h-full max-w-content-max items-center px-4 lg:px-8">
        <button onClick={scrollToTop}>
          <img
            className="h-[52px] w-[152px] object-contain shadow-md"
            alt="Logo"
            src={logoImage}
          />
        </button>

        <nav className="hidden flex-1 sm:flex">
          <ul className="flex h-full w-full items-center justify-end font-bold">
            <li className="mr-8">
              <a
                className="transition-colors duration-500 hover:text-primary"
                href="#home"
                onClick={scrollToTop}>
                Home
              </a>
            </li>
            <li className="mr-8">
              <a
                className="transition-colors duration-500 hover:text-primary"
                href="#about"
                onClick={scrollToSection}>
                Sobre
              </a>
            </li>
            <li className="mr-8">
              <a
                className="transition-colors duration-500 hover:text-primary"
                href="#skills"
                onClick={scrollToSection}>
                Skills
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex h-full flex-1 items-center justify-end sm:hidden">
          <button
            className="inline"
            onClick={() => {
              setShowSidebar(true);
            }}>
            <span className="material-symbols-outlined text-5xl">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
}
