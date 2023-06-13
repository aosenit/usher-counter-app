import Counter from "./Counter";
import { useStore } from "../utils/useStore";

const Main = () => {
  const setTotalCount = useStore((state) => state.setTotalCount);

  const setChildren = useStore((state) => state.setChildrenCount);
  const femaleCount = useStore((state) => state.femaleCount);
  const childrenCount = useStore((state) => state.childrenCount);
  const maleCount = useStore((state) => state.maleCount);
  const setFemaleCount = useStore((state) => state.setFemaleCount);

  const setMaleCount = useStore((state) => state.setMaleCount);

  const handleIncrement = (character: string) => {
    switch (character) {
      case "male":
        setMaleCount("plus");

        break;
      case "female":
        setFemaleCount("plus");

        break;
      case "children":
        setChildren("plus");

        break;
      default:
        break;
    }
  };

  const handleDecrement = (character: string) => {
    switch (character) {
      case "male":
        if (maleCount > 0) {
          setMaleCount("minus");
        }
        break;
      case "female":
        if (femaleCount > 0) {
          setFemaleCount("minus");
        }
        break;
      case "children":
        if (childrenCount > 0) {
          setChildren("minus");
        }
        break;
      default:
        break;
    }
  };

  setTotalCount(maleCount + femaleCount + childrenCount);
  return (
    <div className="grid gap-5">
      <Counter
        category="Male"
        count={maleCount}
        color="#3B82F6"
        onIncrement={() => handleIncrement("male")}
        onDecrement={() => handleDecrement("male")}
      />
      <Counter
        count={femaleCount}
        color="#22C55D"
        category="Woman"
        onIncrement={() => handleIncrement("female")}
        onDecrement={() => handleDecrement("female")}
      />
      <Counter
        count={childrenCount}
        color="#EF4444"
        category="Children"
        onIncrement={() => handleIncrement("children")}
        onDecrement={() => handleDecrement("children")}
      />
    </div>
  );
};

export default Main;
