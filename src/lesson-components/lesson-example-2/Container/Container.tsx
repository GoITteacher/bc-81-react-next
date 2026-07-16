import InfoCard from "./InfoCard/InfoCard";
import MainInfo from "./MainInfo/MainInfo";

const Container = () => {
  const firstName = "Vasya";
  const city = "Dnipro";

  return (
    <div>
      <MainInfo firstname={firstName} city={city} />

      <InfoCard title="Hello" desc="World" />
      <InfoCard title="Test Title" desc="Test Desc" />
      <InfoCard title="Info Card Title" desc="Info Card Desc" />
    </div>
  );
};

export default Container;

// MainInfo({firstname:'Vasya', city:'Dnipro'})
