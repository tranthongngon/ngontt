import "./work-list.scss";
import { dataProject } from "../../models";
import WorkItem from "../workItem/WorkItem";
export type WorkListPropsType = {
  handleHover?: (name: string, image: string) => void;
};
export default function WorkList(props: WorkListPropsType) {
  return (
    <div className="worklist">
      {dataProject.map((w, index) => (
        <WorkItem
          key={index}
          name={w.name}
          id={w.id}
          year={w.year}
          image={w.image}
          handleHover={props?.handleHover ?? (() => {})}
        />
      ))}
    </div>
  );
}
