import React from 'react';
import { ArrowRight, AlertTriangle, CheckCircle, Map, Database, Brain, Globe, Layers, Code, Cpu, BookOpen, FunctionSquare as Function } from 'lucide-react';

const Home = ({ setActiveTab }) => {
    return (
        <div className="space-y-16">
            {/* 1. Hero Section */}
            <div className="text-center space-y-6 py-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    Live Project
                </div>
                <h1 className="text-4xl md:text-6xl font-display font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent max-w-4xl mx-auto leading-tight">
                    Smart Urban Accessibility <br /> Risk Mapping System
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                    AI-driven spatial analysis for safer, more inclusive cities.
                    Predicting infrastructure risks before they become barriers.
                </p>
                <div className="flex justify-center gap-4 pt-4">
                    <button
                        onClick={() => setActiveTab('about')}
                        className="px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-full font-medium transition-all hover:scale-105 shadow-[0_0_20px_rgba(99,102,241,0.3)]"
                    >
                        Read the Paper
                    </button>
                    <button
                        onClick={() => setActiveTab('contact')}
                        className="px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full font-medium transition-all"
                    >
                        Contact Developer
                    </button>
                </div>
            </div>



            {/* 2. Problem & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="glass-card p-8 rounded-3xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                        <AlertTriangle size={120} />
                    </div>
                    <div className="relative z-10">
                        <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center text-orange-500 mb-6">
                            <AlertTriangle size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">The Problem</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Urban accessibility is often reactive. Damaged sidewalks, missing ramps, and unsafe crossings are identified only after complaints are filed.
                            For the elderly and disabled, these unknown barriers turn simple commutes into risky navigations.
                        </p>
                    </div>
                </div>

                <div className="glass-card p-8 rounded-3xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                        <CheckCircle size={120} />
                    </div>
                    <div className="relative z-10">
                        <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center text-green-500 mb-6">
                            <CheckCircle size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">The Solution</h3>
                        <p className="text-gray-400 leading-relaxed">
                            A proactive, data-driven system that uses machine learning to grade street segments on an "Accessibility Risk Spectrum."
                            By visualizing these risks on an interactive map, city planners can prioritize repairs where they matter most.
                        </p>
                    </div>
                </div>
            </div>

            {/* 3. How It Works */}
            <div className="space-y-12">
                <div className="text-center">
                    <h2 className="text-3xl font-display font-bold mb-4">How It Works</h2>
                    <p className="text-gray-400">From raw urban data to actionable insights.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {[
                        { icon: Database, title: "Data Ingestion", desc: "Aggregating open street map data, elevation profiles, and traffic reports." },
                        { icon: Brain, title: "ML Analysis", desc: "Processing features like slope, surface quality, and lighting through the risk model." },
                        { icon: Map, title: "Risk Scoring", desc: "Assigning a granular risk index (0-100) to every street segment." },
                        { icon: Globe, title: "Visualization", desc: "Displaying high-risk zones on a public-facing interactive web map." }
                    ].map((step, idx) => (
                        <div key={idx} className="glass-card p-6 rounded-2xl text-center hover:bg-white/5 transition-colors">
                            <div className="w-14 h-14 mx-auto rounded-full bg-white/5 flex items-center justify-center text-primary mb-4">
                                <step.icon size={24} />
                            </div>
                            <h4 className="font-bold text-lg mb-2">{step.title}</h4>
                            <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* 4. Tech Stack */}
            <div className="glass-card rounded-3xl p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-8 border-b border-white/10 pb-8">
                    <div>
                        <h2 className="text-3xl font-display font-bold mb-2">Technology Stack</h2>
                        <p className="text-gray-400">Built with modern tools for performance and scale.</p>
                    </div>
                    <div className="flex gap-2">
                        <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-sm font-medium">Frontend</span>
                        <span className="px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 text-sm font-medium">ML / Analytics</span>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        { name: "React", icon: Code, color: "text-blue-400" },
                        { name: "Tailwind CSS", icon: Layers, color: "text-cyan-400" },
                        { name: "Python", icon: Code, color: "text-yellow-400" },
                        { name: "TensorFlow", icon: Brain, color: "text-orange-400" },
                        { name: "Mapbox GL", icon: Map, color: "text-teal-400" },
                        { name: "Node.js", icon: cpu => <Cpu size={24} />, color: "text-green-400" }, // Custom render for CPU
                        { name: "PostgreSQL", icon: Database, color: "text-blue-300" },
                        { name: "Vite", icon: Globe, color: "text-purple-400" },
                    ].map((tech, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-black/20 hover:bg-black/40 transition-colors border border-white/5">
                            {typeof tech.icon === 'function' ? tech.icon() : <tech.icon size={24} className={tech.color} />}
                            <span className="font-medium text-gray-200">{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* 5. Development Timeline */}
            <div className="space-y-8">
                <h2 className="text-3xl font-display font-bold text-center">Development Roadmap</h2>
                <div className="relative border-l border-white/10 ml-4 md:ml-0 md:mx-auto max-w-3xl space-y-8">
                    {[
                        { phase: "Phase 1: Research", date: "Jan - Feb", status: "completed", desc: "Problem definition, literature review, and data source identification." },
                        { phase: "Phase 2: Prototype", date: "Mar - Apr", status: "current", desc: "Building the core ML model and initial frontend dashboard structure." },
                        { phase: "Phase 3: Integration", date: "May - Jun", status: "planned", desc: "Connecting the ML inference engine with the live map visualization." },
                        { phase: "Phase 4: Testing", date: "July", status: "planned", desc: "User testing with city planners and accessibility advocates." }
                    ].map((item, idx) => (
                        <div key={idx} className="relative pl-8 md:pl-0">
                            {/* Dot on timeline */}
                            <div className={`
                                absolute top-1.5 left-[-5px] w-3 h-3 rounded-full border-2 
                                ${item.status === 'completed' ? 'bg-primary border-primary' : item.status === 'current' ? 'bg-black border-primary animate-pulse' : 'bg-black border-gray-600'}
                            `}></div>

                            <div className="md:grid md:grid-cols-4 md:gap-8">
                                <div className="md:col-span-1 mb-1 md:mb-0">
                                    <span className={`text-sm font-mono ${item.status === 'current' ? 'text-primary' : 'text-gray-500'}`}>
                                        {item.date}
                                    </span>
                                </div>
                                <div className="md:col-span-3">
                                    <h4 className={`text-lg font-bold mb-1 ${item.status === 'completed' || item.status === 'current' ? 'text-white' : 'text-gray-500'}`}>
                                        {item.phase}
                                    </h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Quick Links Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <button
                    onClick={() => setActiveTab('blog')}
                    className="glass-card p-6 rounded-2xl text-left hover:border-primary/30 transition-all duration-300 group"
                >
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
                        <BookOpen size={24} />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-gray-200">Latest Journal Entries</h3>
                    <p className="text-sm text-gray-400">Explore my weekly updates and research progress.</p>
                </button>

                <button
                    onClick={() => setActiveTab('meeting-log')}
                    className="glass-card p-6 rounded-2xl text-left hover:border-accent/30 transition-all duration-300 group"
                >
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4 text-accent group-hover:scale-110 transition-transform duration-300">
                        <Function size={24} />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-gray-200">Meeting Logs</h3>
                    <p className="text-sm text-gray-400">Track supervisor feedback and project milestones.</p>
                </button>

                <div className="glass-card p-6 rounded-2xl md:col-span-2 lg:col-span-1 flex flex-col justify-center bg-gradient-to-br from-white/5 to-transparent">
                    <p className="text-sm font-light text-gray-500 italic">
                        "The best way to predict the future is to invent it."
                    </p>
                    <p className="text-xs text-gray-600 mt-2 font-medium">— Alan Kay</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
