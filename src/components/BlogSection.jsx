import React from 'react';
import { motion } from 'framer-motion';

const blogPosts = [
        {
                id: 1,
                title: 'How AI Agents Are Transforming Modern Business',
                date: 'Sep 1, 2025',
                image:
                        'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&w=600&q=80',
                summary:
                        'Explore the real-world impact of AI agents on productivity, customer experience, and business growth across industries.',
        },
        {
                id: 2,
                title: '5 Ways to Automate Your Workflow with AI',
                date: 'Aug 18, 2025',
                image:
                        'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&w=600&q=80',
                summary:
                        'Discover practical strategies to streamline your operations and save time using the latest AI automation tools.',
        },
        {
                id: 3,
                title: 'The Future of Customer Support: AI-Driven Solutions',
                date: 'Jul 30, 2025',
                image:
                        'https://images.pexels.com/photos/1181353/pexels-photo-1181353.jpeg?auto=compress&w=600&q=80',
                summary:
                        'See how AI is revolutionizing customer support, enabling instant responses and personalized service at scale.',
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
                                                Stay ahead with the latest trends, tips, and stories in AI automation,
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