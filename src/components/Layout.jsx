import React from 'react';
import Navigation from './Navigation';
import { motion, AnimatePresence } from 'framer-motion';

const Layout = ({ children, activeTab, setActiveTab }) => {
    return (
        <div className="min-h-screen bg-background text-gray-100 selection:bg-primary/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-screen flex flex-col">
                <header className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-display font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                            ARiS
                        </h1>
                        <p className="mt-2 text-gray-400 font-light text-lg">
                            Accessibility Risk Intelligence System
                        </p>
                    </div>
                    <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
                </header>

                <main className="flex-grow relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="w-full"
                        >
                            {children}
                        </motion.div>
                    </AnimatePresence>
                </main>

                <footer className="mt-16 py-6 border-t border-white/5 text-center text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} Project Showcase. Built with React & Tailwind.</p>
                </footer>
            </div>
        </div>
    );
};

export default Layout;
