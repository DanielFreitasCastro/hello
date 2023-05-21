import { motion, useAnimationControls, type Variants } from 'framer-motion';
import { useEffect } from 'react';

import meImage from '../../assets/images/me.png';

const duration = 1;

const draw: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { type: 'just', duration, bounce: 0, stiffness: 25 },
      opacity: { duration },
    },
  },
};

const drawImage: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      opacity: { duration: duration + 2 },
      scale: { type: 'spring', duration: duration + 1, bounce: 0.25 },
    },
  },
};

interface AnimatedAvatarProps {
  isVisible: boolean;
  size?: number;
}

export function AnimatedAvatar({
  isVisible,
  size = 200,
}: AnimatedAvatarProps): JSX.Element {
  const controls = useAnimationControls();

  useEffect(() => {
    if (isVisible) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      controls.start('visible');
    } else {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      controls.start('hidden');
    }
  }, [isVisible]);

  const strokeWidth = 7;
  const radius = size / 2 - strokeWidth / 2;

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      initial="hidden"
      animate={controls}
      fill={'none'}>
      <defs>
        <clipPath id="circle">
          <use xlinkHref="#main-circle" />
        </clipPath>
      </defs>
      <motion.image
        id={'image'}
        href={meImage}
        width={size}
        height={size}
        style={{ borderRadius: 9999 }}
        clipPath={'url(#circle)'}
        variants={drawImage}
        preserveAspectRatio="xMinYMin slice"
      />
      <motion.circle
        id={'main-circle'}
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="#F6DC4A"
        strokeWidth={7}
        variants={draw}
      />
    </motion.svg>
  );
}
