type Blog = {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
};

const blogs: Blog[] = [
  {
    title: "Sunny San Diego",
    date: "10/16/2025",
    description: "A few places I love in San Diego!",
    image: "./images/skyline.jpg",
    imageAlt: "alt",
    slug: "./blogs/sunny-san-diego.html",
  },
  {
    title: "A Little Bit of Everything",
    date: "10/15/2025",
    description: "An overview of my blog!",
    image: "./images/sunset.jpg",
    imageAlt: "alt",
    slug: "./blogs/a-little-bit-of-everything.html",
  },
];