// import css from "./UserCard.module.css";

interface UserCardProps {
  fullname: string;
  age: number;
  city: string;
}
const UserCard = ({ fullname, age, city }: UserCardProps) => {
  return (
    <div>
      <p>Name: {fullname}</p>
      <p>Age: {age}</p>
      <p>City: {city}</p>
      {age >= 18 && <p>is adult</p>}
    </div>
  );
};

export default UserCard;
