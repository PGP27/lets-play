import { useEffect, useMemo, useState } from 'react';
import { animalsArray, lettersArray } from './data';

const AnimalsWordGame = () => {
  const [animals, setAnimals] = useState<string[]>([]);
  const [animalsPositions, setAnimalsPositions] = useState<number[]>([]);
  const [animalsFound, setAnimalsFound] = useState<string[]>([]);
  const [wordGameBuilded, setWordGameBuilded] = useState<{ letter: string; animal: string }[]>([]);

  const wordGame: { letter: string; animal: string }[] = useMemo(() => [], []);

  const raffleAnimals = () => {
    const randomAnimals: string[] = [];
    for (let i = 0; i < 5; i += 1) {
      const animal = Math.floor(Math.random() * animalsArray.length);
      if (randomAnimals.includes(animalsArray[animal])) {
        i -= 1;
      } else {
        randomAnimals.push(animalsArray[animal]);
      }
    }
    return randomAnimals;
  };

  const rafflePositions = (aArray: string[]) => {
    const rows: number[] = [];
    const randomPositions: number[] = [];
    for (let i = 0; i < 5; i += 1) {
      const row = Math.floor(Math.random() * 20);
      if (rows.includes(row)) {
        i -= 1;
      } else {
        const col = Math.floor(Math.random() * (20 - aArray[i].length + 1));
        rows.push(row);
        randomPositions.push(20 * row + col);
      }
    }
    return randomPositions;
  };

  const sortAnimalsAndPositions = (aArray: string[], pArray: number[]): [string[], number[]] => {
    const animals: string[] = [];
    const animalsPositions: number[] = [];
    for (let i = 0; i < pArray.length; i += 1) {
      const min = Math.min(...pArray);
      const index = pArray.indexOf(min);
      animalsPositions.push(min);
      animals.push(aArray[index]);
      pArray[index] = 999;
    }

    return [animals, animalsPositions];
  };

  const buildWordGame = (aArray: string[], pArray: number[]) => {
    let currentPosition = 0;
    let currentIndex = 0;
    for (let i = 0; i < 400; i += 1) {
      if (
        i >= pArray[currentPosition] &&
        i <= pArray[currentPosition] + aArray[currentPosition].length - 1
      ) {
        wordGame.push({
          letter: aArray[currentPosition][currentIndex],
          animal: aArray[currentPosition],
        });
        currentIndex += 1;
      } else {
        const randomLetter = Math.floor(Math.random() * lettersArray.length);
        wordGame.push({
          letter: lettersArray[randomLetter],
          animal: '',
        });
        if (currentIndex > 0) {
          currentPosition += 1;
          currentIndex = 0;
        }
      }
    }
  };

  useEffect(() => {
    const randomAnimals = raffleAnimals();
    const randomPositions = rafflePositions(randomAnimals);
    const [animals, animalsPositions] = sortAnimalsAndPositions(randomAnimals, randomPositions);
    buildWordGame(animals, animalsPositions);
    setWordGameBuilded(wordGame);
    setAnimals(animals);
    setAnimalsPositions(animalsPositions);
  }, []);

  console.log(animals);

  console.log(animalsPositions);

  console.log(wordGame);

  return (
    <div className='grid grid-cols-[repeat(20,1fr)]'>
      {wordGameBuilded.map(({ letter, animal }, index) => {
        return (
          <button
            key={index}
            className={`h-8 w-8 flex items-center justify-center cursor-default ${
              animalsFound.includes(animal) ? 'text-red-500 font-bold' : ''
            }`}
            onClick={() => {
              if (animal) {
                setAnimalsFound([...animalsFound, animal]);
              }
            }}
          >
            {letter}
          </button>
        );
      })}
    </div>
  );
};

export default AnimalsWordGame;
