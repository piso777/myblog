import RecentPosts from "./[RecentPosts]/RecentPosts";
import AllPosts from "../../../components/AllPosts/AllPosts";

interface Post {
  id: number;
  title: string;
  body: string;
}

const BlogPage = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });
  const allPosts: Post[] = await response.json();

  return (
    <>
      <RecentPosts />
      <AllPosts allPosts={allPosts} />
    </>
  );
};

export default BlogPage;