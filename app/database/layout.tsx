import DatabaseNavigation from "@/components/DatabaseNavigation/DatabaseNavigation";
import css from "./Layout.module.css";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={css["layout"]}>
      <DatabaseNavigation />
      {children}
    </div>
  );
};

export default Layout;
