type Props = {
  color?: string;
  category?: string;
  count?: number;
  onIncrement: () => void;
  onDecrement: () => void;
};

const Counter = ({
  color,
  category,
  count,
  onIncrement,
  onDecrement,
}: Props) => {
  return (
    <div className="flex justify-between items-center gap-1">
      <div
        className={`cursor-pointer rounded-full h-[80px] w-[80px] text-white  text-[40px] grid place-content-center`}
        style={{ background: color }}
        onClick={onDecrement}
      >
        -
      </div>

      <div className="text-center relative">
        <div className="h-[40px] w-[140px] border-[#D9D9D9] border-[1px] grid place-content-center text-[24px]">
          {count}
        </div>
        <h5
          className={` absolute left-1/2 -translate-x-1/2 -bottom-7`}
          style={{ color: color }}
        >
          {category}
        </h5>
      </div>
      <div
        style={{ background: color }}
        className={`cursor-pointer rounded-full h-[80px] w-[80px] text-white text-[40px] grid place-content-center`}
        onClick={onIncrement}
      >
        +
      </div>
    </div>
  );
};

export default Counter;
