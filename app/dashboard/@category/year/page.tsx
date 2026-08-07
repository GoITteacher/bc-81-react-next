import {
  ChartCard,
  PieChartMock,
} from "../../../../components/ChartCard/ChartCard";
import { sleep } from "@/utils/sleep";

const Page = async () => {
  await sleep(8900);

  return (
    <ChartCard
      badge="Year"
      description="Annual category distribution for the example."
      title="Annual categories"
    >
      <PieChartMock />
    </ChartCard>
  );
};

export default Page;
