import {
  ChartCard,
  LineChartMock,
} from "../../../../components/ChartCard/ChartCard";
import { sleep } from "@/utils/sleep";

const Page = async () => {
  await sleep(4600);

  return (
    <ChartCard
      badge="$24.8k"
      description="Monthly sales trend with mock revenue data."
      title="Monthly sales"
    >
      <LineChartMock />
    </ChartCard>
  );
};

export default Page;
