import React from "react";
import BlogPreview from "@/components/blogPreview";
// import blogs from "@/static/blogData";
import styles from "./page.module.css";
import Blog, { BlogData } from "@/database/blogSchema";
import connectDB from "@/database/db";

async function getBlogs() {
  await connectDB();
  try {
    // query for all blogs and sort by date
    const blogs = await Blog.find().sort({ date: -1 }).orFail();
    // send a response as the blogs as the message
    return blogs;
  } catch (err) {
    return null;
  }
}

export default async function BlogPreviewsPage() {
  const blogs = await getBlogs();

  return (
    <div>
      <h1 className={styles.page_title}>Blogs</h1>
      <div className={styles.blog_container}>
        {blogs
          ? blogs.map((blog) => {
              let props: BlogData = {
                title: blog.title,
                date: blog.date,
                description: blog.description,
                image: blog.image,
                imageAlt: blog.imageAlt,
                body: [],
                slug: blog.slug,
                id: blog.id,
              };
              return <BlogPreview key={blog.id} {...props} />;
            })
          : null}
      </div>
    </div>
  );
}
