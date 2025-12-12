"use client";
import styles from "./commentWriter.module.css";
import { Comment } from "@/database/blogSchema";
import { useState, MouseEvent, ChangeEvent } from "react";

export type CommentWriterProps = {
  slug: string;
};

export default function CommentWriter(props: CommentWriterProps) {
  const [commentUser, setCommentUser] = useState("");
  const [commentBody, setCommentBody] = useState("");
  const [commentStatus, setCommentStatus] = useState("");

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCommentUser(e.target.value);
  };

  const handleBodyChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCommentBody(e.target.value);
  };

  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let comment: Comment = {
      user: commentUser,
      body: commentBody,
      time: new Date(),
    };
    const res = await fetch(`/api/blogs/${props.slug}/comment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment),
    });
    setCommentStatus(await res.json());
  };

  return (
    <div className={styles.comment_writer_container}>
      <form>
        <input
          className={styles.comment_writer_user}
          type="text"
          id="username"
          name="username"
          maxLength={20}
          onChange={handleUsernameChange}
          placeholder="Username (optional)"
        />

        <textarea
          className={styles.comment_writer_body}
          id="body"
          name="body"
          maxLength={200}
          onChange={handleBodyChange}
          placeholder="Write your comment..."
          required
        ></textarea>

        <div className={styles.submit_container}>
          <p className={styles.comment_status}>{commentStatus}</p>
          <button
            className={styles.submit_comment}
            type="submit"
            onClick={handleSubmit}
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
}
