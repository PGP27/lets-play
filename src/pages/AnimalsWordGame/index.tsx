import { useEffect, useMemo, useState } from 'react';
import { animalsArray, lettersArray } from './data';

const AnimalsWordGame = () => {
  const [animals, setAnimals] = useState<string[]>([]);
  const [animalsFound, setAnimalsFound] = useState<string[]>([]);

  const animalsPositions: number[] = useMemo(() => [], []);

  const sizeArray = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 400; i += 1) {
      arr.push(i);
    }
    return arr;
  }, []);

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

  const sortAnimalsAndPositions = (aArray: string[], pArray: number[]) => {
    const sortedAnimals = [];
    for (let i = 0; i < pArray.length; i += 1) {
      const min = Math.min(...pArray);
      const index = pArray.indexOf(min);
      animalsPositions.push(min);
      sortedAnimals.push(aArray[index]);
      pArray[index] = 999;
    }

    setAnimals(sortedAnimals);
  };

  useEffect(() => {
    const randomAnimals = raffleAnimals();
    const randomPositions = rafflePositions(randomAnimals);
    sortAnimalsAndPositions(randomAnimals, randomPositions);
  }, []);

  console.log(animals);
  console.log(animalsPositions);
};

export default AnimalsWordGame;
