import { useCallback, useEffect, useRef, useState } from 'react';

interface AnimatedTextProps {
  text: string;
  toWhite?: boolean;
  show?: boolean;
}

function AnimatedItem({
  text,
  toWhite = false,
  index = 0,
  show = true,
  onShow = () => {},
}: AnimatedTextProps & {
  index: number;
  onShow: (index: number) => void;
}): JSX.Element {
  const [opacity, setOpacity] = useState(0);
  const itemRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (show) {
      setTimeout(() => {
        setOpacity(1);
        onShow(index);
      }, index * 100);
    }
  }, [show]);

  const handleMouseEnter = useCallback((): void => {
    itemRef.current?.classList.add('animate-rubberBand');

    itemRef.current?.addEventListener('animationend', () => {
      itemRef.current?.classList.remove('animate-rubberBand');
    });
  }, []);

  return (
    <span
      style={{ opacity }}
      ref={(ref) => (itemRef.current = ref)}
      className={`inline-block transition duration-500 ${
        toWhite ? 'hover:text-default-color' : 'hover:text-primary'
      }`}
      onMouseEnter={() => {
        handleMouseEnter();
      }}>
      {text === ' ' ? '\u00A0' : text}
    </span>
  );
}

export function AnimatedText({
  text,
  toWhite = false,
  onCompleteShow,
  show = false,
}: AnimatedTextProps & {
  onCompleteShow?: () => void;
}): JSX.Element {
  const textArray = [...text];

  return (
    <>
      {textArray.map((item, index) => {
        return (
          <AnimatedItem
            key={index}
            text={item}
            toWhite={toWhite}
            index={index}
            show={show}
            onShow={(index) => {
              if (index === textArray.length - 1) {
                onCompleteShow?.();
              }
            }}
          />
        );
      })}
    </>
  );
}
