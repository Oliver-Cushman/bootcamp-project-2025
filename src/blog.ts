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

function addBlogs() {
  const blogContainer = document.getElementById("blog-container");
  blogs.forEach((blog) => {
    let newBlog = document.createElement("a");
    let blogImage = document.createElement("div");
    let blogText = document.createElement("div");
    let h1 = document.createElement("h1");
    let img = document.createElement("img");
    let p = document.createElement("p");
    let date = document.createElement("p");

    newBlog.className = "blog-element";
    newBlog.href = blog.slug;
    blogText.className = "blog-text";
    h1.textContent = blog.title;
    date.textContent = blog.date;
    img.className = "blog-img";
    img.src = blog.image;
    img.alt = blog.imageAlt;
    p.textContent = blog.description;
    
    blogImage.append(img);
    blogText.append(h1);
    blogText.append(date);
    blogText.append(p);
    newBlog.append(blogImage);
    newBlog.append(blogText);
    blogContainer?.append(newBlog);
  });
}

addBlogs();
