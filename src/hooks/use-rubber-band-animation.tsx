import { useRef } from 'react';

interface UseRubberBandAnimationReturnType {
  itemRef: React.MutableRefObject<HTMLElement | null>;
  handleMouseEnter: () => void;
}

export function useRubberBandAnimation(): UseRubberBandAnimationReturnType {
  const itemRef = useRef<HTMLElement | null>(null);

  function handleMouseEnter(): void {
    itemRef.current?.classList.add('animate-rubberBand');

    itemRef.current?.addEventListener('animationend', () => {
      itemRef.current?.classList.remove('animate-rubberBand');
    });
  }

  return {
    itemRef,
    handleMouseEnter,
  };
}
