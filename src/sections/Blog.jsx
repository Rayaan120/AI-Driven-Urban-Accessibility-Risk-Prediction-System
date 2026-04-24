import React, { useState, useEffect } from 'react';
import { blogPosts } from '../data/blogPosts';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';

const Blog = () => {
    const [selectedPost, setSelectedPost] = useState(null);

    useEffect(() => {
        if (selectedPost) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [selectedPost]);

    // Detail View
    if (selectedPost) {
        return (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <button
                    onClick={() => setSelectedPost(null)}
                    className="flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors group"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Journal
                </button>

                <article className="glass-card rounded-2xl p-8 md:p-12">
                    <header className="mb-8 border-b border-white/10 pb-8">
                        <div className="flex items-center gap-4 text-sm text-primary font-semibold mb-4">
                            <span className="uppercase tracking-wider">Week 0{selectedPost.week}</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />
                            <div className="flex items-center gap-2 text-gray-400 font-normal normal-case">
                                <Calendar size={14} />
                                {selectedPost.date}
                            </div>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                            {selectedPost.title}
                        </h1>
                    </header>

                    <div
                        className="prose prose-invert prose-lg max-w-none text-gray-300 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                    />
                </article>
            </div>
        );
    }

    // List View
    return (
        <div className="space-y-8">
            <header className="flex items-end justify-between border-b border-white/10 pb-6">
                <div>
                    <h2 className="text-3xl font-display font-bold text-white mb-2">Weekly Journal</h2>
                    <p className="text-gray-400">Documentation of progress, technical challenges, and solutions.</p>
                </div>
                <div className="text-sm text-gray-500 font-mono hidden md:block">
                    {blogPosts.length} ENTRY(S)
                </div>
            </header>

            <div className="grid gap-6">
                {blogPosts.map((post) => (
                    <div
                        key={post.id}
                        onClick={() => setSelectedPost(post)}
                        className="glass-card p-6 md:p-8 rounded-2xl hover:bg-white/5 hover:border-primary/30 transition-all cursor-pointer group"
                    >
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="shrink-0 flex md:flex-col items-center md:items-start gap-3 md:w-32 border-b md:border-b-0 md:border-r border-dashed border-white/10 pb-4 md:pb-0 md:pr-6">
                                <span className="text-4xl font-display font-bold text-white/10 group-hover:text-primary/20 transition-colors">
                                    0{post.week}
                                </span>
                                <span className="text-xs uppercase tracking-widest text-gray-500 font-semibold">
                                    Week
                                </span>
                            </div>

                            <div className="flex-grow">
                                <div className="flex items-center gap-3 mb-2 text-xs text-primary font-medium uppercase tracking-wider">
                                    <span>Dev Log</span>
                                    <span className="w-1 h-1 rounded-full bg-gray-600" />
                                    <span className="text-gray-500">{post.date}</span>
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-gray-200 mb-3 group-hover:text-primary transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed mb-4">
                                    {post.excerpt}
                                </p>
                                <div className="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:translate-x-2 transition-transform">
                                    Read Entry <ArrowRight size={16} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Start: Fix for missing icon
import { ArrowRight } from 'lucide-react';

export default Blog;
