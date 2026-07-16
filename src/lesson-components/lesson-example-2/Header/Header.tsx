import AuthButtons from "./AuthButtons/AuthButtons";
import Logo from "./Logo/Logo";
import Navigation from "./Navigation/Navigation";

const Header = () => {
  return (
    <header>
      <Logo />
      <Navigation />
      <AuthButtons />
    </header>
  );
};

export default Header;
