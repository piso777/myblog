import AllPosts from "@/components/AllPosts/AllPosts";
import RecentPosts from "./[RecentPosts]/RecentPosts";

interface Post {
    id: number;
    title: string;
    body: string;
}

const POSTS_PER_PAGE = 10;

const BlogPage = async ({ searchParams }: { searchParams: { page?: string } }) => {
    const page = Number(searchParams.page) || 1;

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) {
            console.error("Failed to fetch posts. Status:", response.status);
            throw new Error("Failed to fetch posts");
        }

        const allPosts: Post[] = await response.json();

        const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);
        const start = (page - 1) * POSTS_PER_PAGE;
        const end = start + POSTS_PER_PAGE;
        const currentPosts = allPosts.slice(start, end);

        return (
            <>
                <RecentPosts />
                <AllPosts
                    posts={currentPosts}
                    currentPage={page}
                    totalPages={totalPages}
                />
            </>
        );

    } catch (error) {
        return (
            <div className="p-10 text-center text-red-500 text-xl">
                {error instanceof Error ? error.message : 'Unknown error occurred'}<br />
                Failed to load posts. Please try again later.
            </div>
        );
    }
};

export default BlogPage;
