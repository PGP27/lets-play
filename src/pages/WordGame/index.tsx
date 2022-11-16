import { useEffect, useMemo, useState } from 'react';

const WordGame = () => {
  const [randomAnimals, setRandomAnimals] = useState<string[]>([]);

  const wordsArray = useMemo(
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
      'CABRA',
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

  const sizeArray = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 100; i += 1) {
      arr.push(i);
    }
    return arr;
  }, []);

  useEffect(() => {
    const arr: number[] = [];
    for (let i = 0; i < 10; i += 1) {
      const animal = Math.floor(Math.random() * wordsArray.length - 1);
      if (arr.includes(animal)) {
        i -= 1;
      } else {
        arr.push(animal);
      }
    }
    setRandomAnimals(arr.map((n) => wordsArray[n]));
  }, [wordsArray]);

  return (
    <div>
      {sizeArray.map((n) => {
        const pos = Math.floor(Math.random() * wordsArray.length - 1);
        return <div key={n}></div>;
      })}
    </div>
  );
};

export default WordGame;
