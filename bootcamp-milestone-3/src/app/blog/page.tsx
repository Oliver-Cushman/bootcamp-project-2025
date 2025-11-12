import React from "react";
import BlogPreview from "@/components/blogPreview";
// import blogs from "@/static/blogData";
import styles from "./page.module.css";
import Blog, {BlogData} from "@/database/blogSchema";
import connectDB from "@/database/db";

export default function BlogPage() {
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

  return (
    <div>
      <h1 className={styles.page_title}>Blogs</h1>
      <div className={styles.blog_container}>
        {getBlogs().then((blogs) => {
          if (blogs) {
            return blogs.map((blog) => {
              let props: BlogData = {
                title: blog.title,
                date: blog.date,
                description: blog.description,
                image: blog.image,
                imageAlt: blog.imageAlt,
                slug: blog.slug,
                id: blog.id
              }
              return <BlogPreview key={blog.id} {...props}  />;
            });
          }
          return null;
        })}
      </div>
    </div>
  );
}
