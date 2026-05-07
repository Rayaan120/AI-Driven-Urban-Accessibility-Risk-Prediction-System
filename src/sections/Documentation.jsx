import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, ExternalLink, Shield, Presentation, FileSearch, CheckCircle, Github, Code } from 'lucide-react';

const documents = [
    {
        title: "Source Code Repository",
        description: "Access the complete ARiS codebase on GitHub. Explore the machine learning models, frontend implementation, and data processing pipelines.",
        file: "https://github.com/businessgpt02-code/ARiS.git",
        icon: Github,
        color: "text-white",
        bg: "bg-white/10",
        tag: "Code",
        isExternal: true
    },
    {
        title: "ARiS Technical Report",
        description: "Comprehensive technical documentation detailing the AI-driven urban accessibility risk mapping and prediction system. Includes methodology, data analysis, and results.",
        file: "/documentation/169448_Rayaan_Rafique_ARiS_Report_3215510_1956096133.pdf",
        icon: FileText,
        color: "text-blue-400",
        bg: "bg-blue-400/10",
        tag: "Report"
    },
    {
        title: "ARiS Project Presentation",
        description: "Visual presentation of the ARiS project, covering the problem statement, solution architecture, and key features for stakeholders and public interest.",
        file: "/documentation/ARiS (Presentation) (2).pdf",
        icon: Presentation,
        color: "text-purple-400",
        bg: "bg-purple-400/10",
        tag: "Presentation"
    },
    {
        title: "Research Ethics Form",
        description: "Official MDX Dubai Research Ethics Screening assessment form for the ARiS project, ensuring compliance with academic and ethical standards.",
        file: "/documentation/Rayyan_MDX Dubai Research Ethics Screening assessment Form for Students.pdf",
        icon: Shield,
        color: "text-green-400",
        bg: "bg-green-400/10",
        tag: "Ethics"
    },
    {
        title: "Generative AI Disclaimer",
        description: "PDE3823 Generative AI Use Disclaimer Form detailing the responsible and ethical use of AI tools throughout the development of the project.",
        file: "/documentation/PDE3823 Generative AI Use Disclaimer Form.pdf",
        icon: FileSearch,
        color: "text-orange-400",
        bg: "bg-orange-400/10",
        tag: "Disclaimer"
    }
];

const Documentation = () => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-12 pb-20"
        >
            {/* Header Section */}
            <div className="text-center space-y-4">
                <h2 className="text-4xl font-display font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                    Project Documentation
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Access source code, formal reports, ethical screenings, and technical presentations related to the ARiS project.
                </p>
            </div>

            {/* Documents Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {documents.map((doc, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`glass-card group relative p-8 rounded-3xl border border-white/5 hover:border-primary/30 transition-all duration-500 overflow-hidden ${doc.isExternal ? 'md:col-span-2 bg-gradient-to-r from-primary/10 to-transparent' : ''}`}
                    >
                        {/* Background Decor */}
                        <div className={`absolute -top-12 -right-12 w-32 h-32 ${doc.bg} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                        
                        <div className="relative z-10 space-y-6">
                            <div className="flex justify-between items-start">
                                <div className={`w-14 h-14 rounded-2xl ${doc.bg} flex items-center justify-center ${doc.color} shadow-inner`}>
                                    <doc.icon size={28} />
                                </div>
                                <span className={`px-3 py-1 rounded-full ${doc.bg} ${doc.color} text-xs font-semibold tracking-wider uppercase border border-${doc.color.split('-')[1]}-500/20`}>
                                    {doc.tag}
                                </span>
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                                    {doc.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed max-w-3xl">
                                    {doc.description}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-4 pt-2">
                                {doc.isExternal ? (
                                    <a
                                        href={doc.file}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold text-lg transition-all duration-300 shadow-[0_0_20px_rgba(99,102,241,0.4)] group/btn"
                                    >
                                        <Github size={22} className="group-hover/btn:scale-110 transition-transform" />
                                        <span>View on GitHub</span>
                                        <ExternalLink size={18} className="ml-1 opacity-70" />
                                    </a>
                                ) : (
                                    <>
                                        <a
                                            href={doc.file}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-white/5 hover:bg-primary hover:text-white border border-white/10 hover:border-primary rounded-xl font-medium transition-all duration-300 group/btn"
                                        >
                                            <ExternalLink size={18} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                            <span>View PDF</span>
                                        </a>
                                        <a
                                            href={doc.file}
                                            download
                                            className="flex items-center justify-center gap-2 px-6 py-3 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 rounded-xl font-medium transition-all duration-300"
                                        >
                                            <Download size={18} />
                                            <span className="hidden sm:inline">Download</span>
                                        </a>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Interactive Footer */}
                        <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-2 text-xs text-gray-500">
                            <CheckCircle size={14} className="text-green-500/70" />
                            <span>{doc.isExternal ? "Official Project Repository" : "Verified Documentation"}</span>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Notice Section */}
            <div className="glass-card p-8 rounded-3xl border border-white/5 bg-gradient-to-br from-primary/5 to-transparent">
                <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                        <Shield size={32} />
                    </div>
                    <div className="space-y-2 text-center md:text-left">
                        <h4 className="text-xl font-bold text-white">Academic Integrity & Ethical Standards</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            All research and development conducted within the ARiS project adheres to strict ethical guidelines. 
                            The documentation above includes official approvals and disclaimers regarding the use of AI 
                            and data privacy protocols.
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Documentation;
