import styles from "../blogPost.module.css";
import ImageWithCaption from "@/components/imageWithCaption";

export default function BlogPost() {
  return (
    <div className={styles.blog_post_container}>
      <h1 className={styles.page_title}>A Little Bit of Everything</h1>
      <h2>10/15/25</h2>
      <div className={styles.blog_post}>
        <ImageWithCaption
          image="/sunset.jpg"
          alt="sunset"
          caption="I like sunsets, if you couldn't tell."
        />
        <div className={styles.blog_post_body}>
          <p>
            Hello, and welcome to my very first blog post ever! This post
            hopefully serves as a tentative outline for what you can expect from
            this blog in the future. If you are from the future, you’ll be able
            to tell if I’ve stuck to that or not.
          </p>
          <p>
            Anyway, on to what this post is for! As the title suggests, this
            blog is going to be a little bit of everything, and ideally becomes
            a manifestation of my thoughts untangled and put on the screen. This
            means that a post here can be pretty much anything, whether that be
            something I’m working on, a long-term goal, something cool I saw, or
            just about anything happening in my life.
          </p>
          <p>
            This means that the topic from post to post is incredibly flexible.
            With that, I'm always open to recommendations of things to try and
            maybe even write about after. There's a contact page for a reason!
            If you've listened to a cool album, watched a neat movie, or went to
            a cool place recently, I'd love to hear about it and give it a whirl
            myself!
          </p>
          <p>
            That's about it for this one, but there'll be more to come! Thanks
            for reading, and have a good one, whatever one is for you :)
          </p>
        </div>
      </div>
    </div>
  );
}
