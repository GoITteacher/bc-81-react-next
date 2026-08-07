import {
  ChartCard,
  LineChartMock,
} from "../../../../components/ChartCard/ChartCard";
import { sleep } from "@/utils/sleep";
import css from "./Page.module.css";

const Page = async () => {
  await sleep(7400);

  const quarters = [
    { label: "Q1", value: 64 },
    { label: "Q2", value: 72 },
    { label: "Q3", value: 81 },
    { label: "Q4", value: 93 },
  ];

  return (
    <ChartCard
      badge="2026"
      description="Annual route rendered in the same @activity slot."
      title="Annual activity"
    >
      <LineChartMock />
      <div className={css.timeline}>
        {quarters.map((quarter) => (
          <div className={css.row} key={quarter.label}>
            <strong>{quarter.label}</strong>
            <span className={css.track}>
              <span
                className={css.fill}
                style={{ width: `${quarter.value}%` }}
              />
            </span>
            <span>{quarter.value}%</span>
          </div>
        ))}
      </div>
    </ChartCard>
  );
};

export default Page;
