import { MouseEvent, useMemo } from 'react';

interface Props {
  size: 'sm' | 'md' | 'lg';
  color: string;
}

const Pixel = ({ size, color }: Props) => {
  const pixelSize = useMemo(() => {
    if (size === 'sm') return 'h-8 w-8';
    if (size === 'md') return 'h-12 w-12';
    if (size === 'lg') return 'h-20 w-20';
  }, [size]);

  const paintPixel = ({ currentTarget }: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    currentTarget.style.backgroundColor = color;
  };

  return (
    <button type='button' className={`${pixelSize} border border-gray-400`} onClick={paintPixel} />
  );
};

export default Pixel;
