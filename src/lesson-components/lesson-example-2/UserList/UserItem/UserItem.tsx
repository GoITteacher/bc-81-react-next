import css from "./UserItem.module.css";
interface User {
  name: string;
  phone: string;
  email: string;
  image: string;
  taken: boolean;
}

interface UserItemProps {
  item: User;
}

const UserItem = ({ item }: UserItemProps) => {
  return (
    <div className={css["user-item"]}>
      <p>{item.name}</p>
      <p>{item.phone}</p>
      <p>{item.email}</p>
      <p>{item.image}</p>
      {item.taken && <p>Taken</p>}
    </div>
  );
};

export default UserItem;
