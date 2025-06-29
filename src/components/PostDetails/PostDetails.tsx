import React from 'react'
import Link from 'next/link'

interface Post {
    id: number;
    title: string;
    body: string;
}

export default async function PostDetails({ myPostId }: { myPostId: number }) {
    await new Promise<void>((resolve) => {
      setTimeout(() => { resolve(); }, 2000);
    })
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${myPostId}`
    );
    const post: Post = await response.json();
    return (
      <div className="flex justify-center flex-wrap ">
          <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="text-center w-[100%] my-8 flex flex-col hover:scale-105 transition-all duration-300 border-2 border-b-blue-300 rounded-2xl p-6"
          >
              <h2 className="mt-4 text-2xl font-bold text-white">Post Title :- <br />{post.title}</h2>
              <p className="mt-7 text-base text-white">Post Body :- <br />{post.body}</p>
          </Link>
          <button className='bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out border-2 border-transparent hover:border-white/20'>
              <Link href={"/"}>Back To Home</Link>
          </button>
  </div>
    );
}