
import "./header.scss";
import ThemeSwitcher from "../../ThemeSwitcher";
import { Link } from "react-router-dom";
import Menu from "../menu/Menu";

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <span className="header__logo-dot"></span>
          <h6 className="header__logo-text">Ngontt</h6>
        </Link>
      </div>
      <div className="header__nav">
        <Menu/>
      </div>
      <div className="header__btn">
        <ThemeSwitcher />
      </div>
    </header>
  );
}
