import FullstackNavigation from "@/components/FullstackNavigation/FullstackNavigation";
import css from "./Layout.module.css";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={css["layout"]}>
      <FullstackNavigation />
      {children}
    </div>
  );
};

export default Layout;
