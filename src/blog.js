var blogs = [
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
    var blogContainer = document.getElementById("blog-container");
    blogs.forEach(function (blog) {
        var newBlog = document.createElement("a");
        var blogImage = document.createElement("div");
        var blogText = document.createElement("div");
        var h1 = document.createElement("h1");
        var img = document.createElement("img");
        var p = document.createElement("p");
        var date = document.createElement("p");
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
        blogContainer === null || blogContainer === void 0 ? void 0 : blogContainer.append(newBlog);
    });
}
addBlogs();
