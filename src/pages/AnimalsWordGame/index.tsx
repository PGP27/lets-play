import { useEffect, useMemo, useState } from 'react';

const AnimalsWordGame = () => {
  const [randomAnimals, setRandomAnimals] = useState<string[]>([]);
  const [animalsPosition, setAnimalsPosition] = useState<number[]>([]);

  let currentPosition = useMemo(() => 0, []);
  let currentIndex = useMemo(() => 0, []);

  const animalsArray = useMemo(
    () => [
      'FORMIGA',
      'GIRAFA',
      'CAMELO',
      'ELEFANTE',
      'URSO',
      'CORUJA',
      'COBRA',
      'CACHORRO',
      'GATO',
      'RATO',
      'PERIQUITO',
      'PAPAGAIO',
      'FOCA',
      'GUAXINIM',
      'ORNITORRINCO',
      'JAGUAR',
      'GOLFINHO',
      'OVELHA',
      'COALA',
      'COELHO',
      'RAPOSA',
      'MACACO',
      'PEIXE',
      'CANGURU',
      'BALEIA',
      'ZEBRA',
      'CAVALO',
      'ABELHA',
      'PANTERA',
      'CARACOL',
    ],
    [],
  );

  const lettersArray = useMemo(
    () => [
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z',
    ],
    [],
  );

  const sizeArray = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 400; i += 1) {
      arr.push(i);
    }
    return arr;
  }, []);

  useEffect(() => {
    const animals: number[] = [];

    for (let i = 0; i < 5; i += 1) {
      const animal = Math.floor(Math.random() * (animalsArray.length - 1));
      if (animals.includes(animal)) {
        i -= 1;
      } else {
        animals.push(animal);
      }
    }

    const rows: number[] = [];
    const positions: number[] = [];

    for (let i = 0; i < animals.length; i += 1) {
      const row = Math.floor(Math.random() * 20);
      const col = Math.floor(Math.random() * (20 - animalsArray[animals[i]].length));

      if (rows.includes(row)) {
        i -= 1;
      } else {
        rows.push(row);
        positions.push(20 * row + col);
      }
    }

    const animalsName = animals.map((a) => animalsArray[a]);

    const sortedAnimals: string[] = [];
    const sortedPositions: number[] = [];

    for (let i = 0; i < positions.length; i += 1) {
      const min = Math.min(...positions);
      const index = positions.indexOf(min);
      sortedAnimals.push(animalsName[index]);
      sortedPositions.push(positions[index]);
      positions[index] = 999;
    }

    setRandomAnimals(sortedAnimals);
    setAnimalsPosition(sortedPositions);
  }, [animalsArray]);

  console.log(randomAnimals);

  console.log(animalsPosition);

  if (randomAnimals && animalsPosition) {
    const pos = currentPosition;
    return (
      <div className='grid grid-cols-[repeat(20,_1fr)]'>
        {sizeArray.map((n) => {
          if (
            randomAnimals[currentPosition] !== undefined &&
            animalsPosition[currentPosition] !== undefined &&
            n >= animalsPosition[currentPosition] &&
            n <= animalsPosition[currentPosition] + randomAnimals[currentPosition].length - 1
          ) {
            if (currentIndex < randomAnimals[currentPosition].length) {
              currentIndex += 1;
              return (
                <button
                  key={n}
                  type='button'
                  className='h-8 w-8 flex items-center justify-center border border-white cursor-default'
                >
                  {randomAnimals[currentPosition][currentIndex - 1]}
                </button>
              );
            }
          }
          if (
            randomAnimals[currentPosition] &&
            currentIndex === randomAnimals[currentPosition].length
          ) {
            currentPosition += 1;
            currentIndex = 0;
          }
          const randomLetter = Math.floor(Math.random() * lettersArray.length);
          return (
            <button
              key={n}
              type='button'
              className='h-8 w-8 flex items-center justify-center border border-white cursor-default'
            >
              {lettersArray[randomLetter]}
            </button>
          );
        })}
      </div>
    );
  }
  return null;
};

export default AnimalsWordGame;
