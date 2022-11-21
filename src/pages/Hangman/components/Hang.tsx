interface Props {
  errors: string[];
}

const Hang = ({ errors }: Props) => {
  return (
    <div className='h-screen w-screen flex items-center justify-center'>
      <div className='relative h-60 w-28 border-l-4 border-t-8 border-black'>
        <div className='absolute h-6 w-1 bg-black right-0' />
        <div className='absolute h-20 w-1 -top-4 left-6 bg-black rotate-45' />
        <div className='absolute h-1 w-20 bg-black -left-10 bottom-0' />
        <div className='absolute h-11 w-11 rounded-full border-2 border-black -right-5 top-6' />
        <div />
      </div>
    </div>
  );
};

export default Hang;
