import AvatarForm from "@/components/AvatarForm/AvatarForm";
import css from "./Page.module.css";
import AvatarButton from "@/components/AvatarButton/AvatarButton";

const Page = () => {
  return (
    <div className={css["page"]}>
      {/* <AvatarForm /> */}
      <AvatarButton />
    </div>
  );
};

export default Page;
