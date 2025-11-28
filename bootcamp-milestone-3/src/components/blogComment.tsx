import { Comment } from "@/database/blogSchema";
import styles from "./blogComment.module.css";

export default function BlogComment(props: Comment) {
  return (
    <div className={styles.comment_container}>
      <div className={styles.comment_header}>
        <span className={styles.comment_user}>{props.user || "Anonymous"}</span>
        <span className={styles.comment_time}>Posted on {props.time}</span>
      </div>
      <p className={styles.comment_body}>{props.body}</p>
    </div>
  );
}
