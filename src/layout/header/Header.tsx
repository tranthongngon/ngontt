import "./header.scss";
import ThemeSwitcher from "../../ThemeSwitcher";
import { Link } from "react-router-dom";
import Menu from "../menu/Menu";
import Edge1 from "../../assets/images/edge1.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="header__edge">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-1.74846e-06 1.74846e-06L0 20C-9.65645e-07 8.95431 8.9543 9.65645e-07 20 0L-1.74846e-06 1.74846e-06Z"
            fill="white"
          />
        </svg>
      </div>
      <div className="header__edge edge2">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-1.74846e-06 1.74846e-06L0 20C-9.65645e-07 8.95431 8.9543 9.65645e-07 20 0L-1.74846e-06 1.74846e-06Z"
            fill="white"
          />
        </svg>
      </div>
      <div className="header__logo">
        <Link to="/">
          <span className="header__logo-dot"></span>
          <h6 className="header__logo-text">Ngontt</h6>
        </Link>
      </div>
      <div className="header__nav">
        <Menu />
      </div>
      <div className="header__btn">
        <ThemeSwitcher />
      </div>
    </header>
  );
}
