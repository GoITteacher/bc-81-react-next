import {
  ChartCard,
  LineChartMock,
} from "../../../../components/ChartCard/ChartCard";
import { sleep } from "@/utils/sleep";
import css from "./Page.module.css";

const Page = async () => {
  await sleep(5700);

  return (
    <ChartCard
      badge="30 days"
      description="Monthly route keeps other slots unchanged."
      title="Monthly activity"
    >
      <LineChartMock />
      <div className={css.stats}>
        <div className={css.stat}>
          <span className={css.label}>Revenue</span>
          <span className={css.value}>$24.8k</span>
        </div>
        <div className={css.stat}>
          <span className={css.label}>Conversion</span>
          <span className={css.value}>8.4%</span>
        </div>
      </div>
    </ChartCard>
  );
};

export default Page;
