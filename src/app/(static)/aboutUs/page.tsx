import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about MyBlog - our mission, vision, and the team behind this modern blog platform. Discover what makes us unique and why we're passionate about creating great content.",
  keywords: ["about us", "team", "mission", "vision", "blog platform", "MyBlog"],
  openGraph: {
    title: "About Us - MyBlog",
    description: "Learn more about MyBlog and our mission to create great content.",
    url: 'https://myblog.vercel.app/aboutUs',
  },
  twitter: {
    title: "About Us - MyBlog",
    description: "Learn more about MyBlog and our mission to create great content.",
  },
};

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">About Us</h1>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg md:text-xl mb-8 leading-relaxed">
            At MyBlog, we believe in the power of sharing knowledge and stories. Our mission is to provide a modern, 
            user-friendly platform where writers can share their thoughts and readers can discover amazing content.
          </p>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-6">What We Do</h2>
          <p className="text-lg md:text-xl mb-8 leading-relaxed">
            We&apos;ve built a responsive blog application using cutting-edge technologies like Next.js 14, TypeScript, 
            and Tailwind CSS. Our platform offers a beautiful user experience across all devices, from mobile phones 
            to desktop computers.
          </p>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p>We constantly explore new technologies to improve user experience.</p>
            </div>
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Quality</h3>
              <p>We maintain high standards in both content and technical implementation.</p>
            </div>
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Accessibility</h3>
              <p>Our platform is designed to be accessible to everyone, everywhere.</p>
            </div>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Contact</h2>
          <p className="text-lg md:text-xl">
            Have questions or suggestions? Reach out to us at{' '}
            <a href="mailto:abbasskhalid777@gmail.com" className="text-blue-300 hover:text-blue-200 underline">
              abbasskhalid777@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

export function generateMetadata({ params }: { params: { post: string } }): Promise<Metadata> {
  // Implementation of generateMetadata function
}
