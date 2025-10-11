var blogs = [
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
    var blogContainer = document.getElementById("blog-container");
    blogs.forEach(function (blog) {
        var newBlog = document.createElement("a");
        var blogImage = document.createElement("div");
        var blogText = document.createElement("div");
        var h1 = document.createElement("h1");
        var img = document.createElement("img");
        var p = document.createElement("p");
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
        blogContainer === null || blogContainer === void 0 ? void 0 : blogContainer.append(newBlog);
    });
}
addBlogs();
