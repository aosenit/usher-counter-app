import { useState } from "react";
import Counter from "./Counter";

const Main = () => {
  const [maleCount, setMaleCount] = useState(0);
  const [femaleCount, setFemaleCount] = useState(0);
  const [childrenCount, setChildrenCount] = useState(0);

  const handleIncrement = (character: string) => {
    switch (character) {
      case "male":
        setMaleCount((prevCount) => prevCount + 1);
        break;
      case "female":
        setFemaleCount((prevCount) => prevCount + 1);
        break;
      case "children":
        setChildrenCount((prevCount) => prevCount + 1);
        break;
      default:
        break;
    }
  };

  const handleDecrement = (character: string) => {
    switch (character) {
      case "male":
        if (maleCount > 0) {
          setMaleCount((prevCount) => prevCount - 1);
        }
        break;
      case "female":
        if (femaleCount > 0) {
          setFemaleCount((prevCount) => prevCount - 1);
        }
        break;
      case "children":
        if (childrenCount > 0) {
          setChildrenCount((prevCount) => prevCount - 1);
        }
        break;
      default:
        break;
    }
  };

  const total = maleCount + femaleCount + childrenCount;
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
