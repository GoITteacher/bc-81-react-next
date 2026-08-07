import {
  BarChartMock,
  ChartCard,
} from "../../../../components/ChartCard/ChartCard";
import { sleep } from "@/utils/sleep";

const Page = async () => {
  await sleep(5300);

  return (
    <ChartCard
      badge="Month"
      description="Monthly category performance with mock values."
      title="Monthly categories"
    >
      <BarChartMock />
    </ChartCard>
  );
};

export default Page;
