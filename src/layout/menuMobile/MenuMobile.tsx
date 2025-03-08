import './menu-mobile.scss';

export default function MenuMobile() {
  return (
    <div className="menu__mobile">
      <div className="menu__mobile__edge">
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
      <div className="menu__mobile__edge edge2">
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
      <div className="menu__mobile-text">Menu</div>
    </div>
  );
}
