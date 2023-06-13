import { Card, Metric, Text } from "@tremor/react";

import Doughnut from "./Doughnut";
import { useStore } from "../utils/useStore";

export type Characters = {
  label: string;
  count: number;
  background: string;
};

const Graph = () => {
  const totalCount = useStore((state) => state.totalCount);
  return (
    <>
      <div className="grid gap-4">
        <Doughnut />
      </div>
      <Card className="max-w-md mx-auto">
        <Text>Total</Text>
        <Metric className="">{totalCount}</Metric>
      </Card>
    </>
  );
};

export default Graph;
