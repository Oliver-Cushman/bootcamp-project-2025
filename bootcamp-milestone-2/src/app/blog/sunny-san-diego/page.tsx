import styles from "../blogPost.module.css";
import ImageWithCaption from "@/components/imageWithCaption";

export default function BlogPost() {
  return (
    <div className={styles.blog_post_container}>
      <h1 className={styles.page_title}>Sunny San Diego</h1>
      <h2>10/16/25</h2>
      <div className={styles.blog_post}>
        <ImageWithCaption
          image="/skyline.jpg"
          alt="skyline"
          caption="Downtown San Diego, CA"
        />
        <div className={styles.blog_post_body}>
          <p>
            Hello again! As you may or may not know, I am currently a college
            student studying at Cal Poly in San Luis Obispo, California. Before
            that, though, I lived my entire life in one house in San Diego,
            California. While these two cities are not very far away from one
            another, being a six hour drive away on average, the distance is
            definitely felt.
          </p>
          <p>
            I've yet to encounter something I genuinely dislike about SLO, and
            I'm loving the life I'm building, but it wouldn't be accurate to say
            that there isn't a San Diego shaped hole in my heart. After all,
            spending eighteen years in a place teaches you to truly love it for
            what it is. There are some places in San Diego that are truly sacred
            to me, and here I'm going to share a list of them with you.
          </p>
          <ImageWithCaption
            image="/torrey.jpg"
            alt="beach"
            caption="Torrey Pines State Beach and its gorgeous cliffs"
          />
          <p>
            The first location on this list is Torrey Pines State Beach, an
            absolutely stunning beach that holds immense sentimental value to
            me. I spent many, many summer days here growing up, and I'll spend
            many more when I make my return. Besides that, it is almost
            certainly the best beach in San Diego. It has a little something for
            everyone, from its hikeable cliffs overlooking the magnificent
            Pacific Ocean, to the crashing waves that are a blast for any
            surfer. I also must emphasize just how much peace you can find in
            this place if you are having a rough time in your life. The only
            downside is that you do have to either pay a one-time fee for
            parking or a year-long state park pass, but in my opinion it is
            worth it for the prize of being able to spend time here. This is an
            absolutely top tier location, and it is where I chose to spend my
            last day in San Diego.
          </p>
          <ImageWithCaption
            image="/the_nat.jpg"
            alt="museum"
            caption="The Nat, a natural history museum in San Diego's very own Balboa Park"
          />
          <p>
            The next location is San Diego's natural history museum located in
            Balboa Park, known locally as the Nat. The museum features a
            collection of prehistoric exhibits, as well as some about the local
            ecology in southern California. They aren't the flashiest of museum
            exhibits, but this museum holds a place near and dear to my heart
            with its ability to foster a curiousity that drove me in childhood
            and beyond.
          </p>
          <ImageWithCaption
            image="/elephant.jpg"
            alt="elephant"
            caption="An elephant from the San Diego Zoo, also in Balboa Park"
          />
          <p>
            This location is the San Diego Zoo, also located in Balboa Park
            almost directly adjacent to the Nat. This zoo is spectacular with
            some incredbile animals that I could just go on and on and on about.
            Some highlights for me are the pandas, polar bears, and absolutely
            the giant elephant enclosure that makes this zoo so iconic. This is
            a must visit in San Diego, even if it is a bit pricey.
          </p>
          <p>
            These locations are currently my must-visits in San Diego, and there
            are definitely more that I will add in a later post. Thanks for
            reading, and have a good one, whatever one is for you :D
          </p>
        </div>
      </div>
    </div>
  );
}
