import styles from "./resumeEntry.module.css";
import { ResumeEntryData } from "@/static/resumeData";

export default function ResumeEntry(props: ResumeEntryData) {
  return (
    <div>
      <h3>
        {props.title}
        {props.category ? ": " + props.category : ""}
      </h3>
      <div>
        {props.subtitles
          ? props.subtitles.map((subtitle, i) => {
              return <div key={i}>{subtitle}</div>;
            })
          : null}
      </div>
      <ul>
        {props.points
          ? props.points.map((point) => {
              return <li>{point}</li>;
            })
          : null}
      </ul>
    </div>
  );
}
