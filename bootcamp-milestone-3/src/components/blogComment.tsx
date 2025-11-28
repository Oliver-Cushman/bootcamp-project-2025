import { Comment } from "@/database/blogSchema";
import styles from "./blogComment.module.css";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function parseTime(time: Date | string | number) {
  time = new Date(time);
  return `${
    months[time.getMonth()]
  } ${time.getDate()} ${time.getHours()}:${time.getMinutes() < 10 ? "0" + time.getMinutes().toString() : time.getMinutes()}`;
}

export default function BlogComment(props: Comment) {
  return (
    <div className={styles.comment_container}>
      <div className={styles.comment_header}>
        <span className={styles.comment_user}>{props.user || "Anonymous"}</span>
        <span className={styles.comment_time}>{parseTime(props.time)}</span>
      </div>
      <p className={styles.comment_body}>{props.body}</p>
    </div>
  );
}
