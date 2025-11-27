import ImageWithCaption from "@/components/imageWithCaption";
import styles from "./page.module.css";
import { BlogData, BodySection } from "@/database/blogSchema";

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

export default async function BlogPage({ params }: Props) {
  const { slug } = await params;
  const blog: BlogData = await getBlog(slug);

  return (
    <div className={styles.blog_post_container}>
      {blog ? (
        <div className={styles.blog_post_container}>
          <h1 className={styles.page_title}>{blog.title}</h1>
          <h2>{blog.date}</h2>
          <div className={styles.blog_post}>
            {blog.body.map((bodySection: BodySection, i) => {
              return bodySection.type === "paragraph" ? (
                <p key={i}>{bodySection.body}</p>
              ) : (
                <ImageWithCaption
                  key={i}
                  image={bodySection.src}
                  alt={bodySection.alt}
                  caption={bodySection.caption}
                />
              );
            })}
          </div>
        </div>
      ) : (
        <h1 className={styles.page_title}>No post found!</h1>
      )}
    </div>
  );
}
