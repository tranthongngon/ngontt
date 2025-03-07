import "./thumb-project.scss";
export type ThumbProjectPropsType = {
  name: string;
  image: string;
};

export default function ThumbProject(props: ThumbProjectPropsType) {
  return (
    <div className="thumb">
      <div className="thumb__wrap">
        <img src={props.image} alt={props.name} />
      </div>
      <div className="thumb__name">
        <div className="thumb__name--wrap">
          {props.name}
          <div className="thumb__name--edge">
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
          <div className="thumb__name--edge edge2">
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
    </div>
  );
}
