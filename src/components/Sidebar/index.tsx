import { type KeyboardEventHandler, type MouseEvent } from 'react';
import { headerHeight } from '../../constants';
import { useSidebar } from '../../hooks/use-sidebar';

export function Sidebar(): JSX.Element {
  const { showSidebar, setShowSidebar } = useSidebar();

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

  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (event) => {
    // if ESC or ENTER key is pressed
    if (event.key === 'Escape' || event.key === 'Enter') {
      setShowSidebar(false);
    }
  };

  return (
    <>
      <div
        role="button"
        tabIndex={0}
        onClick={() => {
          setShowSidebar(false);
        }}
        onKeyDown={handleKeyDown}
        className={`top-0 left-0 z-20 block h-full w-full bg-[rgba(0,0,0,.3)] duration-100 sm:hidden ${
          showSidebar ? 'fixed' : 'hidden'
        }`}></div>

      <aside
        className={`fixed top-0 right-0 z-30 block h-full w-60 min-w-[200px] bg-black p-8 shadow-[0_0_10px_2px_rgba(0,0,0,0.4)] transition-all duration-300 sm:hidden ${
          showSidebar ? 'translate-x-0 ' : 'translate-x-full'
        }`}>
        <ul className="flex h-full w-full flex-col font-bold">
          <li className="mb-8">
            <a
              className="text-lg transition-colors duration-500 hover:text-primary"
              href="#home"
              onClick={scrollToTop}>
              Home
            </a>
          </li>
          <li className="mb-8">
            <a
              className="text-lg transition-colors duration-500 hover:text-primary"
              href="#about"
              onClick={scrollToSection}>
              Sobre
            </a>
          </li>
          <li className="mb-8">
            <a
              className="text-lg transition-colors duration-500 hover:text-primary"
              href="#skills"
              onClick={scrollToSection}>
              Skills
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
}
