import { Card, Title, DonutChart } from "@tremor/react";

const cities = [
  {
    name: "Male",
    value: 40,
  },
  {
    name: "Female",
    value: 50,
  },
  {
    name: "Children",
    value: 10,
  },
];

const valueFormatter = (number: number) =>
  `${Intl.NumberFormat("us").format(number).toString()}`;

const Doughnut = () => {
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
