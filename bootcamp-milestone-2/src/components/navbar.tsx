import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";
import blogs from "../app/blogData";

export default function Navbar() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    // NOTE: we use "class" in HTML but React is quirky so we have to
    // change all the "class" to "className"
    <nav className={style.navbar}>
      <h1 className={style.logo}>
        <Link href="index.html">Oliver Cushman</Link>
      </h1>
      <ul className={style.nav_list}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/resume">Resume</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
