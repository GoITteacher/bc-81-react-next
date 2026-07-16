import css from "./Sidebar.module.css";
import SidebarCard from "./SidebarCard/SidebarCard";

const Sidebar = () => {
  return (
    <div className={css["sidebar"]}>
      <SidebarCard title="Card 1" desc="Desc 1" />
      <SidebarCard title="Card 2" desc="Desc 2" />
      <SidebarCard title="Card 3" desc="Desc 3" />
    </div>
  );
};

export default Sidebar;
