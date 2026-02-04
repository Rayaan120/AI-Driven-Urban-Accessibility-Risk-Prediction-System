import React from 'react';
import profileImg from '../assets/profile.jpeg';

const About = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
                <div className="glass-card rounded-2xl p-6 flex flex-col items-center text-center sticky top-6">
                    <div className="w-56 h-64 rounded-2xl bg-gradient-to-tr from-primary to-accent mb-6 shrink-0 shadow-[0_0_30px_rgba(99,102,241,0.3)] border border-white/20 relative overflow-hidden group">
                        <img
                            src={profileImg}
                            alt="Rayaan Rafique"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                            <span className="text-white text-xs font-medium tracking-widest uppercase">Profile</span>
                        </div>
                    </div>
                    <h2 className="text-2xl font-display font-bold mb-2">Rayaan Rafique</h2>
                    <p className="text-primary font-medium mb-4">Computer Systems Engineering Student</p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Passionate about AI, web technologies, and human-computer interaction.
                        Building the future, one line of code at a time.
                    </p>
                </div>
            </div>
            <div className="md:col-span-2 space-y-6">
                <div className="glass-card rounded-2xl p-8">
                    <h3 className="text-xl font-display font-bold mb-4 flex items-center gap-3">
                        About Me
                    </h3>
                    <div className="space-y-4 text-gray-300 leading-relaxed">
                        <p>
                            I am a final-year Computer Systems Engineering student driven by a passion for solving complex, real-world problems through technology.
                            My academic tenure has been defined by a rigorous exploration of both hardware and software domains, giving me a holistic understanding of computing systems.
                        </p>
                        <p>
                            Beyond the code, I am deeply committed to the philosophy of "Engineering for Impact." I believe that the true power of technology lies in its ability to improve lives and foster inclusivity.
                            Whether it's optimizing data pipelines or designing intuitive user interfaces, my goal is always to create solutions that are efficient, scalable, and socially responsible.
                        </p>
                    </div>
                </div>

                <div className="glass-card rounded-2xl p-8">
                    <h3 className="text-xl font-display font-bold mb-4">About This Project</h3>
                    <div className="text-gray-300 leading-relaxed space-y-4">
                        <p>
                            This website serves as a living portfolio and development journal for my capstone project:
                            <span className="text-white font-semibold"> Smart Urban Accessibility Risk Mapping System</span>.
                        </p>
                        <p>
                            The project aims to revolutionize how we approach urban planning for the elderly and individuals with disabilities.
                            By utilizing machine learning techniques on urban spatial data, the system identifies and predicts accessibility risks—such as damaged sidewalks and unsafe crossings—at a granular street level.
                        </p>
                        <p>
                            This is not just a technical endeavor but a step towards smarter, more equitable cities.
                            Here, I document the journey of building this system, from data acquisition and model training to the final deployment.
                        </p>
                    </div>
                </div>

                <div className="glass-card rounded-2xl p-8">
                    <h3 className="text-xl font-display font-bold mb-4">Academic Focus</h3>
                    <div className="flex flex-wrap gap-3">
                        {['Machine Learning', 'Data Analysis', 'Full-Stack Development', 'Urban Computing', 'System Architecture'].map(tag => (
                            <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
