import Hang from './components/Hang';

const Hangman = () => {
  return (
    <div>
      <Hang errors={['a', 'b', 'c', 'd', 'e', 'f', 'g']} />
    </div>
  );
};

export default Hangman;
