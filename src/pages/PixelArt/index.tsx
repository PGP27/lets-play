import { ChangeEvent, useMemo, useState } from 'react';
import Pixel from './components/Pixel';

const PixelArt = () => {
  const [paintingSize, setPaintingSize] = useState('8');
  const [pixelSize, setPixelSize] = useState<'sm' | 'md' | 'lg'>('md');
  const [pixelColor, setPixelColor] = useState('#000000');

  const sizeArray = useMemo(() => {
    const arr = [];
    for (let i = 0; i < Math.pow(Number(paintingSize), 2); i += 1) {
      arr.push(i);
    }
    return arr;
  }, [paintingSize]);

  const changePaintingSize = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setPaintingSize(value);
  };

  const changePixelSize = ({ target: { value } }: ChangeEvent<HTMLSelectElement>) => {
    setPixelSize(value as 'sm' | 'md' | 'lg');
  };

  const changePixelColor = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setPixelColor(value);
  };

  return (
    <div>
      <div>
        <label htmlFor='paintingSizeInput'>Tamanho do quadro: </label>
        <input
          id='paintingSizeInput'
          type='number'
          value={paintingSize}
          onChange={changePaintingSize}
          minLength={3}
          maxLength={100}
        />
      </div>
      <div>
        <label htmlFor='pixelSizeInput'>Tamanho do pixel: </label>
        <select id='pixelSizeInput' onChange={changePixelSize}>
          <option value='sm'>Pequeno</option>
          <option value='md'>Médio</option>
          <option value='lg'>Grande</option>
        </select>
      </div>
      <div>
        <label htmlFor='pixelColorInput'>Cor: </label>
        <input id='pixelColorInput' type='color' value={pixelColor} onChange={changePixelColor} />
      </div>
      <div
        className='w-fit h-fit grid'
        style={{ gridTemplateColumns: `repeat(${paintingSize}, 1fr)` }}
      >
        {sizeArray.map((n) => (
          <Pixel key={n} size={pixelSize} color={pixelColor} />
        ))}
      </div>
    </div>
  );
};

export default PixelArt;
