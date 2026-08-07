import {
  ChartCard,
  LineChartMock,
} from "../../../components/ChartCard/ChartCard";
import { sleep } from "@/utils/sleep";

const Page = async () => {
  await sleep(2800);

  return (
    <ChartCard
      badge="+18%"
      description="All periods are combined in this slot."
      title="Activity overview"
    >
      <LineChartMock />
    </ChartCard>
  );
};

export default Page;
