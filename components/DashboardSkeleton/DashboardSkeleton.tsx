import css from "./DashboardSkeleton.module.css";

type ChartSkeletonVariant = "line" | "bar" | "pie" | "bubble";

interface ChartSkeletonProps {
  variant?: ChartSkeletonVariant;
}

export const ChartSkeleton = ({ variant = "line" }: ChartSkeletonProps) => {
  return (
    <section className={css.card} aria-label="Loading dashboard chart">
      <div className={css.header}>
        <div className={css.titleGroup}>
          <span className={css.line} />
          <span className={`${css.line} ${css.lineShort}`} />
        </div>
        <span className={css.badge} />
      </div>
      {variant === "line" && <LineSkeleton />}
      {variant === "bar" && <BarSkeleton />}
      {variant === "pie" && <PieSkeleton />}
      {variant === "bubble" && <BubbleSkeleton />}
    </section>
  );
};

export const SidebarSkeleton = () => {
  return (
    <aside className={css.sidebar} aria-label="Loading dashboard navigation">
      <span className={`${css.line} ${css.sidebarTitle}`} />
      <span className={`${css.line} ${css.sidebarText}`} />
      <div className={css.nav}>
        <span className={`${css.line} ${css.navItem}`} />
        <span className={`${css.line} ${css.navItem}`} />
        <span className={`${css.line} ${css.navItem}`} />
        <span className={`${css.line} ${css.navItem}`} />
      </div>
    </aside>
  );
};

const LineSkeleton = () => {
  return <div className={`${css.chart} ${css.lineChart}`} />;
};

const BarSkeleton = () => {
  const heights = [46, 68, 38, 76, 92, 56, 72];

  return (
    <div className={`${css.chart} ${css.barChart}`}>
      {heights.map((height) => (
        <span
          className={css.bar}
          key={height}
          style={{ height: `${height}%` }}
        />
      ))}
    </div>
  );
};

const PieSkeleton = () => {
  return (
    <div className={`${css.chart} ${css.pieChart}`}>
      <span className={css.pie} />
      <div className={css.legend}>
        <span className={css.line} />
        <span className={css.line} />
        <span className={css.line} />
        <span className={css.line} />
      </div>
    </div>
  );
};

const BubbleSkeleton = () => {
  return (
    <div className={`${css.chart} ${css.bubbleChart}`}>
      <span
        className={css.bubble}
        style={{ width: 76, height: 76, top: 18, left: "18%" }}
      />
      <span
        className={css.bubble}
        style={{ width: 54, height: 54, top: 62, left: "56%" }}
      />
      <span
        className={css.bubble}
        style={{ width: 44, height: 44, top: 104, left: "36%" }}
      />
      <span
        className={css.bubble}
        style={{ width: 64, height: 64, top: 92, left: "72%" }}
      />
    </div>
  );
};
