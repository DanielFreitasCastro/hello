import { useState, useEffect } from 'react';
import { headerHeight } from '../constants';

export function ScrollToTopButton(): JSX.Element {
  const [viewHasScrolled, setViewHasScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function handleScroll(): void {
    setViewHasScrolled(window.scrollY > window.innerHeight - 2 * headerHeight);
  }

  return (
    <button
      type="button"
      style={{
        opacity: viewHasScrolled ? 1 : 0,
      }}
      onClick={() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
      className="fixed bottom-8 right-8 flex aspect-square h-10 w-10 items-center justify-center rounded-full bg-primary shadow-2xl transition duration-300">
      <span className="material-symbols-outlined text-2xl font-bold text-black">
        expand_less
      </span>
    </button>
  );
}
