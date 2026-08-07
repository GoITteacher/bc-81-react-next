import {
  BubbleChartMock,
  ChartCard,
} from "../../../components/ChartCard/ChartCard";
import { sleep } from "@/utils/sleep";

const Default = async () => {
  await sleep(2500);

  return (
    <ChartCard
      badge="12.4k"
      description="Audience clusters with mock engagement scores."
      title="Users"
    >
      <BubbleChartMock />
    </ChartCard>
  );
};

export default Default;
