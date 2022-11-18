import { useEffect, useMemo, useState } from 'react';

const AnimalsWordGame = () => {
  const [randomAnimals, setRandomAnimals] = useState<string[]>([]);
  const [animalsPosition, setAnimalsPosition] = useState<number[]>([]);
  const [animalsFound, setAnimalsFound] = useState<string[]>([]);

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

    console.log(positions);

    console.log(animalsName);

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

  return (
    <div>
      {sizeArray.map((n) => {
        const randomLetter = Math.floor(Math.random() * lettersArray.length);
        return <div key={n}></div>;
      })}
    </div>
  );
};

export default AnimalsWordGame;
