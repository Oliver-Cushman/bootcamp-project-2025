import styles from "./resumeEntry.module.css";
import { ResumeEntryData } from "@/static/resumeData";

export default function ResumeEntry(props: ResumeEntryData) {
  return (
    <div className={styles.entry}>
      <h3>
        {props.title}
        {props.category ? ": " + props.category : ""}
      </h3>
      <div>
        {props.subtitles
          ? props.subtitles.map((subtitle, index) => {
              return <div key={index}>{subtitle}</div>;
            })
          : null}
      </div>
      <ul>
        {props.points
          ? props.points.map((point, i) => {
              return <li key={i}>{point}</li>;
            })
          : null}
      </ul>
    </div>
  );
}
