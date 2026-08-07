import {
  BarChartMock,
  ChartCard,
} from "../../../../components/ChartCard/ChartCard";
import { sleep } from "@/utils/sleep";

const Page = async () => {
  await sleep(3200);

  return (
    <ChartCard
      badge="$8.7k"
      description="Sales grouped by days of the current week."
      title="Weekly sales"
    >
      <BarChartMock />
    </ChartCard>
  );
};

export default Page;
