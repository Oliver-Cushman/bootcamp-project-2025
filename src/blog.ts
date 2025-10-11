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
    title: "Blog 1",
    date: "10/10/2025",
    description: "desc",
    image: "./images/about-pic.jpg",
    imageAlt: "alt",
    slug: "./blogs/blog1.html",
  },
  {
    title: "Blog 2",
    date: "10/10/2025",
    description: "desc",
    image: "./images/about-pic.jpg",
    imageAlt: "alt",
    slug: "./blogs/blog2.html",
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
    newBlog.className = "blog-element";
    newBlog.href = blog.slug;
    blogText.className = "blog-text";
    h1.textContent = blog.title;
    img.src = blog.image;
    img.alt = blog.imageAlt;
    img.className = "blog-img";
    p.textContent = blog.description;
    blogImage.append(img);
    blogText.append(h1);
    blogText.append(p);
    newBlog.append(blogImage);
    newBlog.append(blogText);
    blogContainer?.append(newBlog);
  });
}

addBlogs();
