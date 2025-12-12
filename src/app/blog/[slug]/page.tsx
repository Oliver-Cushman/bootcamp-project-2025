import ImageWithCaption from "@/components/imageWithCaption";
import styles from "./page.module.css";
import { BlogData, BodySection } from "@/database/blogSchema";
import BlogComment from "@/components/blogComment";
import CommentWriter, { CommentWriterProps } from "@/components/commentWriter";

type Props = {
  params: { slug: string };
};

async function getBlog(slug: string) {
  try {
    // This fetches the blog from an api endpoint that would GET the blog
    const res = await fetch(`http://localhost:3000/api/blogs/${slug}`, {
      cache: "no-store",
    });
    // This checks that the GET request was successful
    if (!res.ok) {
      throw new Error("Failed to fetch blog");
    }

    return res.json();
  } catch (err: unknown) {
    console.log(`error: ${err}`);
    return null;
    // `` are a special way of allowing JS inside a string
    // Instead of "e  to formated strings in python --> f"{err}"
  }
}

function parseDate(date: Date | string | number) {
  date = new Date(date);
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
}

export default async function BlogPage({ params }: Props) {
  const { slug } = await params;
  const blog: BlogData = await getBlog(slug);
  const commentWriterProps: CommentWriterProps = { slug: slug };

  return (
    <div className={styles.blog_post_container}>
      {blog ? (
        <div className={styles.blog_post_container}>
          <h1 className={styles.page_title}>{blog.title}</h1>
          <h2>{parseDate(blog.date)}</h2>
          <div className={styles.blog_post}>
            {blog.body.map((bodySection: BodySection, index) => {
              return bodySection.type === "paragraph" ? (
                <p key={index}>{bodySection.body}</p>
              ) : (
                <ImageWithCaption
                  key={index}
                  image={bodySection.src}
                  alt={bodySection.alt}
                  caption={bodySection.caption}
                />
              );
            })}
          </div>
          <h2 className={styles.page_title}>Comments</h2>
          <CommentWriter {...commentWriterProps} />
          <div className={styles.comment_section}>
            {blog.comments.map((comment, index) => {
              return <BlogComment {...comment} key={index} />;
            })}
          </div>
        </div>
      ) : (
        <h1 className={styles.page_title}>No post found!</h1>
      )}
    </div>
  );
}
