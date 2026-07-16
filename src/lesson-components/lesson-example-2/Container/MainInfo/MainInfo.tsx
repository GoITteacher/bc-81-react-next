interface MainInfoProps {
  firstname?: string;
  city: string;
}

const MainInfo = ({ firstname, city }: MainInfoProps) => {
  return (
    <div>
      <h4>
        {firstname} {city}
      </h4>
    </div>
  );
};

export default MainInfo;

//!=========================================
