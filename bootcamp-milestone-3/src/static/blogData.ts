export type Blog = {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
  id: string;
};

const blogs: Blog[] = [
  {
    title: "Sunny San Diego",
    date: "10/16/2025",
    description: "A few places I love in San Diego!",
    image: "/skyline.jpg",
    imageAlt: "alt",
    slug: `/blog/sunny-san-diego`,
    id: "post1",
  },
  {
    title: "A Little Bit of Everything",
    date: "10/15/2025",
    description: "An overview of my blog!",
    image: "/sunset.jpg",
    imageAlt: "alt",
    slug: `/blog/a-little-bit-of-everything`,
    id: "post2",
  },
];

export default blogs;
