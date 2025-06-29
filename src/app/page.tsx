import Poster from "@/elements/Poster/Poster";
import RecentPosts from "@/app/(dynamic)/blog/[RecentPosts]/RecentPosts";
import BlogPage from "./(dynamic)/blog/page";

export default function Home({ searchParams }: { searchParams: { page?: string } }) {
  return (
      <>
      <Poster/>
      <BlogPage searchParams={searchParams}/>
      </>
  );
}
