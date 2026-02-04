import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, CheckCircle, Loader2 } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, submitting, success

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('submitting');

        // Simulate network request
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
        }, 1500);
    };

    return (
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-display font-bold mb-4">Let's Connect</h2>
                <p className="text-gray-400 text-lg">
                    Open to collaboration, research discussions, or just a chat about technology.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <div className="glass-card p-6 rounded-2xl flex items-center gap-4 group hover:border-primary/30 transition-colors">
                        <div className="p-3 bg-primary/10 rounded-full text-primary group-hover:scale-110 transition-transform">
                            <Mail size={24} />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg text-gray-200">Email</h3>
                            <a href="mailto:rayaanrafique12@gmail.com" className="text-gray-400 hover:text-primary transition-colors">
                                rayaanrafique12@gmail.com
                            </a>
                        </div>
                    </div>

                    <div className="glass-card p-6 rounded-2xl flex items-center gap-4 group hover:border-[#0077b5]/30 transition-colors">
                        <div className="p-3 bg-[#0077b5]/10 rounded-full text-[#0077b5] group-hover:scale-110 transition-transform">
                            <Linkedin size={24} />
                        </div>
                        <div className="overflow-hidden">
                            <h3 className="font-semibold text-lg text-gray-200">LinkedIn</h3>
                            <a
                                href="https://ae.linkedin.com/in/rayaan-rafique-0b7529243"
                                target="_blank"
                                rel="noreferrer"
                                className="text-gray-400 hover:text-[#0077b5] transition-colors block truncate"
                            >
                                linkedin.com/in/rayaan-rafique...
                            </a>
                        </div>
                    </div>

                    <div className="glass-card p-6 rounded-2xl flex items-center gap-4 group hover:border-white/30 transition-colors">
                        <div className="p-3 bg-white/10 rounded-full text-white group-hover:scale-110 transition-transform">
                            <Github size={24} />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg text-gray-200">GitHub</h3>
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noreferrer"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                github.com/student
                            </a>
                        </div>
                    </div>
                </div>

                {status === 'success' ? (
                    <div className="glass-card p-8 rounded-2xl flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in zoom-in duration-500 min-h-[400px]">
                        <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-2">
                            <CheckCircle size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                        <p className="text-gray-400">
                            Thanks for reaching out. I'll get back to you as soon as possible.
                        </p>
                        <button
                            onClick={() => setStatus('idle')}
                            className="mt-6 px-6 py-2 bg-white/5 hover:bg-white/10 rounded-full text-sm font-medium text-gray-300 transition-colors"
                        >
                            Send another message
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl space-y-4 relative overflow-hidden">
                        {status === 'submitting' && (
                            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-10 flex items-center justify-center rounded-2xl">
                                <div className="flex flex-col items-center gap-3">
                                    <Loader2 size={32} className="text-primary animate-spin" />
                                    <span className="text-sm font-medium text-white">Sending...</span>
                                </div>
                            </div>
                        )}

                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                            <input
                                type="text"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors"
                                placeholder="your@email.com"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                            <textarea
                                rows={4}
                                name="message"
                                required
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors resize-none"
                                placeholder="How can I help you?"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={status === 'submitting'}
                            className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 rounded-lg flex items-center justify-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed group"
                        >
                            Start Conversation
                            <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Contact;
