import {
  ChartCard,
  LineChartMock,
} from "../../../../components/ChartCard/ChartCard";
import { sleep } from "@/utils/sleep";

const Page = async () => {
  await sleep(6200);

  return (
    <ChartCard
      badge="$318k"
      description="Annual sales overview for the dashboard sample."
      title="Annual sales"
    >
      <LineChartMock />
    </ChartCard>
  );
};

export default Page;
