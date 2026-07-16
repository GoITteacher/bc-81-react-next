interface InfoCardProps {
  title: string;
  desc: string;
}

const InfoCard = ({ title, desc }: InfoCardProps) => {
  return (
    <div>
      <h5>{title}</h5>
      <p>{desc}</p>
    </div>
  );
};

export default InfoCard;
