import { DonutChart } from "@tremor/react";
import { useStore } from "../utils/useStore";

const valueFormatter = (number: number) =>
  `${Intl.NumberFormat("us").format(number).toString()}`;

const Doughnut = () => {
  const femaleCount = useStore((state) => state.femaleCount);
  const childrenCount = useStore((state) => state.childrenCount);
  const maleCount = useStore((state) => state.maleCount);
  const cities = [
    {
      name: "Male",
      value: maleCount,
    },
    {
      name: "Female",
      value: femaleCount,
    },
    {
      name: "Children",
      value: childrenCount,
    },
  ];
  return (
    <div className="w-[200px] h-[200px]">
      <DonutChart
        className="my-1 "
        data={cities}
        category="value"
        index="name"
        valueFormatter={valueFormatter}
        colors={["blue", "green", "red"]}
        variant="pie"
      />
    </div>
  );
};

export default Doughnut;
