import { useEffect, useMemo, useState } from 'react';
import Square from './components/Square';

const OrderMemory = () => {
  const [order, setOrder] = useState<number[]>([]);
  const [showingNumber, setShowingNumber] = useState<number | false>();
  const [disableButtons, setDisableButtons] = useState<boolean>(false);

  const squareArr = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 9; i += 1) {
      arr.push(i);
    }
    return arr;
  }, []);

  const addNumber = () => {
    const nextNumber = Math.floor(Math.random() * 9);
    setOrder([...order, nextNumber]);
  };

  const timer = (ms: number) => new Promise((res) => setTimeout(res, ms));

  async function load() {
    for (let i = 0; i < order.length; i += 1) {
      setShowingNumber(order[i]);
      await timer(500);
      setShowingNumber(false);
      await timer(500);
    }
  }

  async function clear() {
    await timer(500);
    setShowingNumber(false);
  }

  useEffect(() => {
    addNumber();
  }, []);

  useEffect(() => {
    const init = async () => {
      setDisableButtons(true);
      await load();
      await clear();
      setDisableButtons(false);
    };
    init();
  }, [order]);

  return (
    <div className='grid grid-cols-3'>
      {squareArr.map((n) => {
        return (
          <Square
            key={n}
            number={showingNumber === n && n + 1}
            disabled={disableButtons}
            onClick={addNumber}
          />
        );
      })}
    </div>
  );
};

export default OrderMemory;
