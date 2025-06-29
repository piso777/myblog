import PostDetails from "@/components/PostDetails/PostDetails";
import LoadingPage from "@/elements/LoadingPage/LoadingPage";
import React, { Suspense } from "react";
import type { Metadata } from "next";

// Generate metadata for individual posts
export async function generateMetadata({ params }: { params: { post: string } }): Promise<Metadata> {
  const postId = params.post;
  
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    if (!response.ok) {
      return {
        title: "Post Not Found",
        description: "The requested blog post could not be found.",
      };
    }
    
    const post = await response.json();
    
    return {
      title: post.title,
      description: post.body.substring(0, 160) + "...",
      keywords: ["blog post", "article", post.title.toLowerCase()],
      openGraph: {
        title: post.title,
        description: post.body.substring(0, 160) + "...",
        url: `https://myblog.vercel.app/blog/${postId}`,
        type: 'article',
        publishedTime: new Date().toISOString(),
        authors: ['Abbass Khalid'],
      },
      twitter: {
        card: 'summary',
        title: post.title,
        description: post.body.substring(0, 160) + "...",
      },
    };
  } catch {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be loaded.",
    };
  }
}

export default async function Post({ params }: { params: { post: string } }) {
  const myPostId = params.post;
  const loading =(<LoadingPage/>)
  return (
    <div>
      <Suspense fallback={loading}>
        <PostDetails myPostId={Number(myPostId)} />
      </Suspense>
    </div>
  );
}
