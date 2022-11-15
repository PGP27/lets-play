import { MouseEvent, useMemo } from 'react';

interface Props {
  size: 'sm' | 'md' | 'lg';
  color: string;
}

const Pixel = ({ size, color }: Props) => {
  const pixelSize = useMemo(() => {
    if (size === 'sm') return 'w-8 h-8';
    if (size === 'md') return 'w-12 h-12';
    if (size === 'lg') return 'w-20 h-20';
  }, [size]);

  const paintPixel = ({ currentTarget }: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    currentTarget.style.backgroundColor = color;
  };

  return <button className={`${pixelSize} border border-black`} onClick={paintPixel} />;
};

export default Pixel;
