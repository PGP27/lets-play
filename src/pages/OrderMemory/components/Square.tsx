interface Props {
  number?: number | false;
  disabled?: boolean;
  onClick?: any;
}

const Square = ({ number, disabled, onClick }: Props) => {
  return (
    <button
      type='button'
      disabled={disabled}
      className={`h-20 w-20 border border-gray-400 disabled:cursor-not-allowed hover:bg-gray-100`}
      onClick={onClick}
    >
      {number}
    </button>
  );
};

export default Square;
