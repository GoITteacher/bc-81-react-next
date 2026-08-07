import css from "./Layout.module.css";

interface LayouProps {
  activity: React.ReactNode;
  category: React.ReactNode;
  sales: React.ReactNode;
  sidebar: React.ReactNode;
  users: React.ReactNode;
}
const Layout = ({ sidebar, category, activity, users, sales }: LayouProps) => {
  return (
    <div className={css["layout"]}>
      {sidebar}

      <main className={css["content"]}>
        {sales}
        {activity}
        {category}
        {users}
      </main>
    </div>
  );
};

export default Layout;
