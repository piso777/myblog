// components/AllPosts.tsx
import Link from "next/link";

interface Post {
    id: number;
    title: string;
    body: string;
}

interface Props {
    posts: Post[];
    currentPage: number;
    totalPages: number;
}

const AllPosts = ({ posts, currentPage, totalPages }: Props) => {
    return (
        <div>
            <h2 className="mt-10 text-[24px] font-bold text-center md:text-left">All Blog Posts - Page {currentPage}</h2>
            <div className="flex flex-col md:flex-row md:flex-wrap md:justify-between gap-6 md:gap-0">
                {posts.map((post) => (
                    <Link
                        key={post.id}
                        href={`/blog/${post.id}`}
                        className="w-full md:w-[30%] my-4 md:my-8 flex flex-col hover:scale-105 transition-all duration-300 border-2 border-b-blue-300 rounded-2xl p-6"
                    >
                        <h2 className="mt-4 text-xl md:text-2xl font-bold text-white text-center md:text-left">{post.title}</h2>
                        <p className="mt-2 text-sm md:text-base text-white text-center md:text-left">{post.body}</p>
                    </Link>
                ))}
            </div>

            {/* Pagination */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 my-8">
                {Array.from({ length: totalPages }, (_, index) => {
                    const pageNum = index + 1;
                    return (
                        <Link
                            key={pageNum}
                            href={`?page=${pageNum}`}
                            className={`px-3 md:px-4 py-2 border rounded-lg text-sm md:text-base ${pageNum === currentPage ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'}`}
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
