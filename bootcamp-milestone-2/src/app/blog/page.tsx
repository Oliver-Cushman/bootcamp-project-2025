import React from "react";
import BlogPreview from "@/components/blogPreview";
import blogs from "@/static/blogData";
import styles from "./page.module.css";

export default function Blog() {
  return (
    <div>
      <h1 className={styles.page_title}>Blogs</h1>
      <div className={styles.blog_container}>
        {blogs.map((blog) => (
          <BlogPreview key={blog.id} {...blog} />
        ))}
      </div>
    </div>
  );
}
