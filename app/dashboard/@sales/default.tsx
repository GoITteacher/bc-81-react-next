import {
  ChartCard,
  LineChartMock,
} from "../../../components/ChartCard/ChartCard";
import { sleep } from "@/utils/sleep";

const Default = async () => {
  await sleep(1800);

  return (
    <ChartCard
      badge="$48.2k"
      description="Mock revenue trend for the current dashboard."
      title="Sales"
    >
      <LineChartMock />
    </ChartCard>
  );
};

export default Default;
