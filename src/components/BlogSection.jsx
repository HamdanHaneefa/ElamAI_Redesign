import React from 'react';
import { motion } from 'framer-motion';

import blogImage1 from '../assets/blog_ai_1.png';
import blogImage2 from '../assets/blog_ai_2.png';
import blogImage3 from '../assets/blog_ai_3.png';

const blogPosts = [
        {
                id: 1,
                title: 'The Rise of AI Agents in Enterprise Software',
                date: 'Sep 1, 2025',
                image: blogImage1,
                summary:
                        'Explore how autonomous AI agents are revolutionizing enterprise workflows by handling complex multi-step tasks.',
        },
        {
                id: 2,
                title: 'Designing the Perfect Agentic Workflow',
                date: 'Aug 18, 2025',
                image: blogImage2,
                summary:
                        'Discover practical strategies to design scalable, intelligent workflows that integrate seamlessly with your existing tools.',
        },
        {
                id: 3,
                title: 'Optimizing LLMs for Global Search Discovery',
                date: 'Jul 30, 2025',
                image: blogImage3,
                summary:
                        'Learn how to optimize your business data and content for discoverability across top AI search engines like ChatGPT and Gemini.',
        },
];

const BlogSection = () => {
        return (
                <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-transparent">
                        <div className="max-w-6xl mx-auto">
                                <div className="text-center mb-10 sm:mb-12">
                                        <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-3 tracking-tight font-sans">
                                                Discover Insights from Our Blog
                                        </h2>
                                        <p className="text-base sm:text-lg text-gray-600 font-light max-w-2xl mx-auto font-sans">
                                                Stay ahead with the latest trends, tips, and stories in workflow automation,
                                                business transformation, and digital innovation.
                                        </p>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                                        {blogPosts.map((post, idx) => (
                                                <motion.div
                                                        key={post.id}
                                                        className="rounded-2xl overflow-hidden bg-gray-50 shadow-lg flex flex-row sm:flex-col h-32 sm:h-auto border border-gray-200 hover:scale-[1.02] hover:shadow-xl transition-all duration-300 font-sans"
                                                        initial={{ opacity: 0, y: 40 }}
                                                        whileInView={{ opacity: 1, y: 0 }}
                                                        viewport={{ once: true }}
                                                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                                                >
                                                        <div className="w-32 sm:w-full h-full sm:h-40 overflow-hidden flex-shrink-0">
                                                                <img
                                                                        src={post.image}
                                                                        alt={post.title}
                                                                        className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-110"
                                                                        loading="lazy"
                                                                />
                                                        </div>
                                                        <div className="flex-1 flex flex-col justify-center p-3 sm:p-5">
                                                                <div>
                                                                        <span className="text-xs uppercase tracking-wider text-gray-500 font-medium mb-1 block font-sans">
                                                                                {post.date}
                                                                        </span>
                                                                        <h3 className="text-sm sm:text-xl font-medium text-gray-900 mb-1 sm:mb-2 font-sans leading-tight line-clamp-2">
                                                                                {post.title}
                                                                        </h3>
                                                                        <p className="text-gray-600 text-xs sm:text-sm font-light font-sans line-clamp-2">
                                                                                {post.summary}
                                                                        </p>
                                                                </div>
                                                        </div>
                                                </motion.div>
                                        ))}
                                </div>
                        </div>
                </section>
        );
};

export default BlogSection;