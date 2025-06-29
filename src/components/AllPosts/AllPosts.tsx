"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface Props {
  allPosts: Post[];
}

const POSTS_PER_PAGE = 10;

const AllPosts = ({ allPosts }: Props) => {
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page") || "1");

  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);

  const currentPosts = useMemo(() => {
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    return allPosts.slice(start, start + POSTS_PER_PAGE);
  }, [allPosts, currentPage]);

  return (
    <div>
      <h2 className="mt-10 text-[24px] font-bold">All Posts - Page {currentPage}</h2>
      <div className="flex justify-between flex-wrap">
        {currentPosts.map((post) => (
          <Link
            key={post.id}
            href={`/blog?page=${currentPage}#post-${post.id}`}
            className="text-justify w-[30%] my-8 flex flex-col hover:scale-105 transition-all duration-300 border-2 border-b-blue-300 rounded-2xl p-6"
          >
            <h2 className="mt-4 text-2xl font-bold text-white">{post.title}</h2>
            <p className="mt-2 text-base text-white">{post.body}</p>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-4 my-8">
        {Array.from({ length: totalPages }, (_, index) => {
          const pageNum = index + 1;
          return (
            <Link
              key={pageNum}
              href={`?page=${pageNum}`}
              scroll={false}
              className={`px-4 py-2 border rounded-lg ${
                pageNum === currentPage ? "bg-blue-500 text-white" : "bg-white text-blue-500"
              }`}
            >
              {pageNum}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default AllPosts;
