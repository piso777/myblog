import PostDetails from "@/components/PostDetails/PostDetails";
import LoadingPage from "@/elements/LoadingPage/LoadingPage";
import React, { Suspense } from "react";

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
