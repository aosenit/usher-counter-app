import { Card, Metric, Text } from "@tremor/react";

import Doughnut from "./Doughnut";

export type Characters = {
  label: string;
  count: number;
  background: string;
};

const Graph = () => {
  return (
    <>
      <div className="grid gap-4">
        <Doughnut />
      </div>
      <Card className="max-w-md mx-auto">
        <Text>Total</Text>
        <Metric className="">100</Metric>
      </Card>
    </>
  );
};

export default Graph;
