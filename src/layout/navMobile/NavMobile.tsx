import "./nav-mobile.scss";
import { menuItems } from "../../models";
import { Link } from "react-router-dom";
export type NavMobileProps = {
  setShowMenu: (isShow: boolean) => void;
};

export default function NavMobile(props: NavMobileProps) {
  const { setShowMenu } = props;
  return (
    <div className="nav__mobile">
      <div className="nav__mobile-wrap">
        <div className="nav__mobile-name" onClick={() => setShowMenu(false)}>
          Close
          <div className="nav__mobile-name--edge">
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
          <div className="nav__mobile-name--edge edge2">
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
        </div>
      </div>
      <div className="nav__mobile-menu scroll-thin">
        <ul className="menu">
          {menuItems.map((m) => (
            <li className="menu-item">
              <Link to={`/${m.toLocaleLowerCase()}`}>
                {m}{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  focusable="false"
                >
                  <g>
                    <path d="M220.24,132.24l-72,72a6,6,0,0,1-8.48-8.48L201.51,134H40a6,6,0,0,1,0-12H201.51L139.76,60.24a6,6,0,0,1,8.48-8.48l72,72A6,6,0,0,1,220.24,132.24Z"></path>
                  </g>
                </svg>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
