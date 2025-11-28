import React from "react";
import styles from "./blogPreview.module.css";
import Link from "next/link";

export type BlogPreviewProps = {
  title: string;
  date: Date;
  description: string;
  image: string;
  imageAlt: string;
  id: string;
  slug: string;
};

function parseDate(date: Date | string | number) {
  date = new Date(date);
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
}

export default function BlogPreview(props: BlogPreviewProps) {
  return (
    <Link
      className={styles.blog_element}
      href={"/blog/" + props.slug}
      id={props.id}
    >
      <div>
        <img
          src={props.image}
          className={styles.blog_img}
          alt={props.imageAlt}
        />
      </div>
      <div className={styles.blog_text}>
        <h1>{props.title}</h1>
        <p>{parseDate(props.date)}</p>
        <p>{props.description}</p>
      </div>
    </Link>
  );
}
