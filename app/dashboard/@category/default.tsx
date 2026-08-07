import {
  ChartCard,
  PieChartMock,
} from "../../../components/ChartCard/ChartCard";
import { sleep } from "@/utils/sleep";

const Default = async () => {
  await sleep(2200);

  return (
    <ChartCard
      badge="4 groups"
      description="Traffic split by device category."
      title="Categories"
    >
      <PieChartMock />
    </ChartCard>
  );
};

export default Default;
