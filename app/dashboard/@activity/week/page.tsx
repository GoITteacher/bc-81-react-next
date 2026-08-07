import {
  BarChartMock,
  ChartCard,
} from "../../../../components/ChartCard/ChartCard";
import { sleep } from "@/utils/sleep";
import css from "./Page.module.css";

const Page = async () => {
  await sleep(4100);

  return (
    <ChartCard
      badge="7 days"
      description="Weekly activity route inside @activity."
      title="Weekly activity"
    >
      <BarChartMock />
      <div className={css.summary}>
        <div className={css.item}>
          <span className={css.value}>1.8k</span>
          <span className={css.label}>Visits</span>
        </div>
        <div className={css.item}>
          <span className={css.value}>420</span>
          <span className={css.label}>Leads</span>
        </div>
        <div className={css.item}>
          <span className={css.value}>64%</span>
          <span className={css.label}>Retention</span>
        </div>
      </div>
    </ChartCard>
  );
};

export default Page;
