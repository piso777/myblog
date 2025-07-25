import type { Metadata } from "next";
import PostDetails from "../../../../components/PostDetails/PostDetails";

export async function generateMetadata(
  { params }: { params: Promise<{ post: string }> }
): Promise<Metadata> {
  const { post } = await params;
  const postId = post;

  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);

    if (!response.ok) {
      return {
        title: "Post Not Found",
        description: "The requested blog post could not be loaded.",
      };
    }

    const post = await response.json();
    const description = post.body.substring(0, 160) + "...";

    return {
      title: post.title,
      description,
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

export default async function Page({ params }: { params: Promise<{ post: string }> }) {
  const { post } = await params;
  const postId = Number(post);

  return (
    <div>
      <PostDetails myPostId={postId} />
    </div>
  );
}