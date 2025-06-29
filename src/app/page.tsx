import Poster from "../elements/Poster/Poster";
import BlogPage from "./(dynamic)/blog/page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to MyBlog - Discover the latest blog posts, recent articles, and trending content. A modern blog platform with beautiful design and excellent user experience.",
  keywords: ["home", "blog posts", "recent articles", "trending content", "modern blog"],
  openGraph: {
    title: "MyBlog - Home",
    description: "Welcome to MyBlog - Discover the latest blog posts and trending content.",
    url: 'https://myblog.vercel.app',
  },
  twitter: {
    title: "MyBlog - Home",
    description: "Welcome to MyBlog - Discover the latest blog posts and trending content.",
  },
};

export default function Home() {
  return (
      <>
      <Poster/>
      <BlogPage/>
      </>
  );
}
