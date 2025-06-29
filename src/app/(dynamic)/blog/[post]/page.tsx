
import React, { Suspense } from "react";
import type { Metadata } from "next";
import PostDetails from "@/components/PostDetails/PostDetails";
import LoadingPage from "@/elements/LoadingPage/LoadingPage";

type PageProps = {
  params: {
    post: string;
  };
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const postId = params.post;

  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    if (!response.ok) throw new Error("Failed to fetch post");

    const post = await response.json();

    const description = post.body.substring(0, 160) + "...";

    return {
      title: post.title,
      description,
      keywords: ["blog post", "article", post.title.toLowerCase()],
      openGraph: {
        title: post.title,
        description,
        url: `https://myblog.vercel.app/blog/${postId}`,
        type: "article",
        publishedTime: new Date().toISOString(),
        authors: ["Abbass Khalid"],
      },
      twitter: {
        card: "summary",
        title: post.title,
        description,
      },
    };
  } catch {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be loaded.",
    };
  }
}

export default function PostPage({ params }: PageProps) {
  const postId = Number(params.post);

  return (
    <div>
      <Suspense fallback={<LoadingPage />}>
        <PostDetails myPostId={postId} />
      </Suspense>
    </div>
  );
}
