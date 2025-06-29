import Image from 'next/image';
import Link from 'next/link';

const RecentPosts = async () => {
    interface RecentPost {
        id: number;
        title: string;
        body: string;
    }
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts: RecentPost[] = await response.json();

    const lastFourPosts = posts.slice(-4);

    const images = [
        "/Images/009533ddb18880647940253fa905f2a8d6a3a95e.jpg",
        "https://picsum.photos/300/200?random=1",
        "https://picsum.photos/300/200?random=2",
        "https://picsum.photos/300/200?random=3"
    ];

    return (
        <div>
            <h2 className="mt-10 text-[24px] font-bold text-center md:text-left">Recent Posts Added</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 md:gap-6 mt-10">
                <Link href={`blog/${lastFourPosts[0]?.id}`}  className="hover:scale-105 md:hover:scale-125 hover:transition-all duration-500 md:row-span-2 md:col-span-2 flex flex-col border-2 border-amber-100 rounded-2xl p-4 md:p-6 bg-black">
                    <Image
                        src={images[0]}
                        alt={`Post ${lastFourPosts[0]?.id} image`}
                        width={600}
                        height={350}
                        className="w-full h-48 md:h-72 object-fill rounded-lg"
                    />
                    <h2 className="mt-4 text-xl md:text-2xl font-bold text-white text-center md:text-left">{lastFourPosts[0]?.title}</h2>
                    <p className="mt-2 text-sm md:text-base text-white text-center md:text-left">{lastFourPosts[0]?.body}</p>
                </Link >
                <Link href={`blog/${lastFourPosts[1]?.id}`}  className="hover:scale-105 md:hover:scale-125 hover:transition-all duration-500 border-2 border-amber-100 rounded-2xl p-4 bg-black">
                    <Image
                        src={images[1]}
                        alt={`Post ${lastFourPosts[1]?.id} image`}
                        width={300}
                        height={120}
                        className="w-full h-32 md:h-24 object-fill rounded-lg"
                    />
                    <h2 className="mt-2 text-lg font-bold text-white text-center md:text-left">{lastFourPosts[1]?.title}</h2>
                    <p className="mt-1 text-sm text-white text-center md:text-left">{lastFourPosts[1]?.body}</p>
                </Link >
                <Link href={`blog/${lastFourPosts[2]?.id}`}  className="hover:scale-105 md:hover:scale-125 hover:transition-all duration-500 border-2 border-amber-100 rounded-2xl p-4 bg-black">
                    <Image
                        src={images[2]}
                        alt={`Post ${lastFourPosts[2]?.id} image`}
                        width={300}
                        height={120}
                        className="w-full h-32 md:h-24 object-fill rounded-lg"
                    />
                    <h2 className="mt-2 text-lg font-bold text-white text-center md:text-left">{lastFourPosts[2]?.title}</h2>
                    <p className="mt-1 text-sm text-white text-center md:text-left">{lastFourPosts[2]?.body}</p>
                </Link >
                <Link href={`blog/${lastFourPosts[3]?.id}`}  className="hover:scale-105 md:hover:scale-125 hover:transition-all duration-500 md:col-span-3 flex flex-col border-2 border-amber-100 rounded-2xl p-4 md:p-6 mt-0 md:mt-4 bg-black">
                    <Image
                        src={images[3]}
                        alt={`Post ${lastFourPosts[3]?.id} image`}
                        width={900}
                        height={180}
                        className="w-full h-48 md:h-40 object-fill rounded-lg"
                    />
                    <h2 className="mt-4 text-lg md:text-xl font-bold text-white text-center md:text-left">{lastFourPosts[3]?.title}</h2>
                    <p className="mt-2 text-sm md:text-base text-white text-center md:text-left">{lastFourPosts[3]?.body}</p>
                </Link >
            </div>
        </div>
    );
}

export default RecentPosts;
