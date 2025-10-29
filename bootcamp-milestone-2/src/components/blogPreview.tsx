import React from "react";
import styles from "./blogPreview.module.css";
import Link from "next/link";
import { Blog } from "@/static/blogData";

export default function BlogPreview(props: Blog) {
  return (
    <Link className={styles.blog_element} href={props.slug} id={props.id}>
      <div>
        <img
          src={props.image}
          className={styles.blog_img}
          alt={props.imageAlt}
        />
      </div>
      <div className={styles.blog_text}>
        <h1>{props.title}</h1>
        <p>{props.date}</p>
        <p>{props.description}</p>
      </div>
    </Link>
  );
}
