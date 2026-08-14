import AvatarForm from "@/components/AvatarForm/AvatarForm";
import css from "./Page.module.css";

const Page = () => {
  return (
    <div className={css["page"]}>
      <AvatarForm />
    </div>
  );
};

export default Page;
