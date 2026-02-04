import React from 'react';
import { motion } from 'framer-motion';
import { User, BookOpen, ClipboardList, Image, Mail, Home } from 'lucide-react';

const tabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'blog', label: 'Journal', icon: BookOpen },
    { id: 'meeting-log', label: 'Log', icon: ClipboardList },
    { id: 'gallery', label: 'Gallery', icon: Image },
    { id: 'contact', label: 'Contact', icon: Mail },
];

const Navigation = ({ activeTab, setActiveTab }) => {
    return (
        <nav className="glass rounded-full p-1.5 flex items-center gap-1 overflow-x-auto max-w-full">
            {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;

                return (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`
              relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 z-10
              ${isActive ? 'text-white' : 'text-gray-400 hover:text-gray-200'}
            `}
                    >
                        {isActive && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute inset-0 bg-primary/20 border border-primary/30 rounded-full shadow-[0_0_15px_rgba(99,102,241,0.3)]"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        <Icon size={16} className="relative z-10" />
                        <span className="relative z-10 whitespace-nowrap">{tab.label}</span>
                    </button>
                );
            })}
        </nav>
    );
};

export default Navigation;
