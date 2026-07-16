import css from "./SidebarCard.module.css";

interface SidebarCardProps {
  title: string;
  desc: string;
}
const SidebarCard = ({ title, desc }: SidebarCardProps) => {
  return (
    <div className={css["sidebar-card"]}>
      <h5>{title}</h5>
      <p>{desc}</p>
    </div>
  );
};

export default SidebarCard;
