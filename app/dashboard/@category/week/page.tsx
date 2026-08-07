import {
  ChartCard,
  PieChartMock,
} from "../../../../components/ChartCard/ChartCard";
import { sleep } from "@/utils/sleep";

const Page = async () => {
  await sleep(3600);

  return (
    <ChartCard
      badge="Week"
      description="Weekly traffic split by device category."
      title="Weekly categories"
    >
      <PieChartMock />
    </ChartCard>
  );
};

export default Page;
