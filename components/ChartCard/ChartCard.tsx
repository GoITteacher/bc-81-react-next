import css from "./ChartCard.module.css";

interface ChartCardProps {
  title: string;
  description: string;
  badge: string;
  children: React.ReactNode;
}

export const ChartCard = ({
  title,
  description,
  badge,
  children,
}: ChartCardProps) => {
  return (
    <section className={css.card}>
      <div className={css.header}>
        <div>
          <h2 className={css.title}>{title}</h2>
          <p className={css.meta}>{description}</p>
        </div>
        <span className={css.badge}>{badge}</span>
      </div>
      {children}
    </section>
  );
};

export const LineChartMock = () => {
  return (
    <svg className={css.lineChart} viewBox="0 0 420 180" aria-hidden="true">
      <path className={css.axis} d="M20 150H400" />
      <path className={css.axis} d="M20 30V150" />
      <path
        className={css.areaPath}
        d="M20 138 C48 96 76 104 104 86 C132 67 154 108 180 92 C216 68 235 76 258 96 C286 120 302 61 330 74 C360 88 370 34 400 46 L400 150 L20 150 Z"
      />
      <path
        className={css.linePath}
        d="M20 138 C48 96 76 104 104 86 C132 67 154 108 180 92 C216 68 235 76 258 96 C286 120 302 61 330 74 C360 88 370 34 400 46"
      />
    </svg>
  );
};

export const BarChartMock = () => {
  const bars = [
    { label: "Mon", value: 46 },
    { label: "Tue", value: 62 },
    { label: "Wed", value: 38 },
    { label: "Thu", value: 78 },
    { label: "Fri", value: 92 },
    { label: "Sat", value: 58 },
    { label: "Sun", value: 74 },
  ];

  return (
    <div className={css.barList} aria-hidden="true">
      {bars.map((bar) => (
        <div className={css.barItem} key={bar.label}>
          <div className={css.bar} style={{ height: `${bar.value}%` }} />
          <span className={css.barLabel}>{bar.label}</span>
        </div>
      ))}
    </div>
  );
};

export const PieChartMock = () => {
  const segments = [
    { label: "Desktop", value: "42%", color: "#2f7a7a" },
    { label: "Mobile", value: "26%", color: "#e4583b" },
    { label: "Tablet", value: "18%", color: "#f4b35f" },
    { label: "Other", value: "14%", color: "#8f7ac8" },
  ];

  return (
    <div className={css.pieWrap}>
      <div className={css.pie} aria-hidden="true" />
      <ul className={css.legend}>
        {segments.map((segment) => (
          <li className={css.legendItem} key={segment.label}>
            <span
              className={css.dot}
              style={{ backgroundColor: segment.color }}
            />
            <span>{segment.label}</span>
            <strong>{segment.value}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const BubbleChartMock = () => {
  const bubbles = [
    { label: "A", size: 74, top: 14, left: 18 },
    { label: "B", size: 54, top: 42, left: 54 },
    { label: "C", size: 42, top: 96, left: 34 },
    { label: "D", size: 62, top: 88, left: 68 },
  ];

  return (
    <div className={css.bubbleChart} aria-hidden="true">
      {bubbles.map((bubble) => (
        <span
          className={css.bubble}
          key={bubble.label}
          style={{
            width: bubble.size,
            height: bubble.size,
            top: bubble.top,
            left: `${bubble.left}%`,
          }}
        >
          {bubble.label}
        </span>
      ))}
    </div>
  );
};
