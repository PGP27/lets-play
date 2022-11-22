import { useMemo } from 'react';

interface Props {
  errors: string[];
}

const Hang = ({ errors }: Props) => {
  const personArray = useMemo(
    () => [
      <div
        key={0}
        className='absolute h-11 w-11 rounded-full border-4 border-black -right-5 top-6'
      />,
      <div key={1} className='absolute h-[100px] w-1 bg-black right-0 top-[67px]' />,
      <div key={2} className='absolute h-12 w-1 top-20 left-[87px] bg-black rotate-45' />,
      <div key={3} className='absolute h-12 w-1 top-20 left-[121px] bg-black -rotate-45' />,
      <div key={4} className='absolute h-12 w-1 top-40 left-[87px] bg-black rotate-45' />,
      <div key={5} className='absolute h-12 w-1 top-40 left-[121px] bg-black -rotate-45' />,
    ],
    [],
  );

  return (
    <div className='h-screen w-screen flex items-center justify-center'>
      <div className='relative h-60 w-28 border-l-4 border-t-8 border-black'>
        <div className='absolute h-6 w-1 bg-black right-0' />
        <div className='absolute h-20 w-1 -top-4 left-6 bg-black rotate-45' />
        <div className='absolute h-1 w-20 bg-black -left-10 bottom-0' />
        {errors.map((_, index) => personArray[index])}
        <div />
      </div>
    </div>
  );
};

export default Hang;
