export const blogPosts = [
    {
        id: 3,
        week: 3,
        title: "The Polish & The Portfolio",
        date: "Feb 18, 2026",
        excerpt: "Finalizing the UI interactions and setting up the structure for the final presentation. Why details matter more than you think.",
        content: `
            <p>As we approach the final submission, the focus shifts from core functionality to user experience and those subtle details that make a project stand out.</p>
            
            <h4 class="text-xl font-bold text-white mt-6 mb-3">Refining Interactions</h4>
            <p>I spent a significant amount of time this week working on the glassmorphism effects and ensuring the navigation transitions felt liquid and responsive. Framer Motion has been a game-changer for these micro-interactions.</p>
            
            <h4 class="text-xl font-bold text-white mt-6 mb-3">Content Strategy</h4>
            <p>Structuring the content for this portfolio was a challenge. I wanted it to feel like a living document, not just a static archive. Adding this functional blog system allows me to treat it as a proper dev log.</p>
        `
    },
    {
        id: 2,
        week: 2,
        title: "Architecture & State Management",
        date: "Feb 11, 2026",
        excerpt: "Deep dive into React context, prop drilling vs. global state, and deciding on the folder structure for scalability.",
        content: `
            <p>This week was all about making the hard decisions that will affect the maintainability of the codebase moving forward.</p>
            
            <h4 class="text-xl font-bold text-white mt-6 mb-3">Component Composition</h4>
            <p>I decided to adopt a feature-based folder structure (sections/components) rather than a type-based one. This keeps related styles and logic closer together, making it easier to refactor later.</p>
            
            <h4 class="text-xl font-bold text-white mt-6 mb-3">Performance Wins</h4>
            <p>By using React.memo and keeping state as local as possible, we've managed to keep re-renders to a minimum, even with the complex background animations running.</p>
        `
    },
    {
        id: 1,
        week: 1,
        title: "Project Overview and Initial Thoughts",
        date: "Feb 04, 2026",
        excerpt: "Introduction to Smart Urban Accessibility Risk Mapping System: Using ML to predict accessibility risks for inclusive urban planning.",
        content: `
            <h4 class="text-xl font-bold text-white mt-6 mb-3">Project Idea</h4>
            <p>For my final-year project, I have chosen to work on a Smart Urban Accessibility Risk Mapping System. The core idea of this project is to use data and machine learning techniques to identify and predict accessibility risks in urban areas at a street or block level. The system focuses on challenges faced by elderly individuals and people with disabilities, such as narrow or damaged sidewalks, missing curb ramps, steep slopes, unsafe crossings, and poor lighting. Instead of assessing accessibility only after issues are reported, this project aims to proactively highlight high-risk areas using a data-driven approach.</p>

            <h4 class="text-xl font-bold text-white mt-6 mb-3">Rationale for Choosing This Project</h4>
            <p>I chose this project because urban accessibility is a real-world, socially relevant problem, especially in a rapidly urbanizing country like India. While accessibility guidelines and policies exist, their implementation and monitoring are often manual, time-consuming, and reactive. Many people face accessibility barriers daily, but these issues are not always visible in planning processes until complaints arise. As a computer engineering student, I wanted to apply technical skills such as data analysis, machine learning, and software design to address a problem that has meaningful social impact. This project allows me to combine technology with inclusive design and contribute to smarter and more equitable urban planning solutions.</p>

            <h4 class="text-xl font-bold text-white mt-6 mb-3">Project Details and Approach</h4>
            <p>The project aims to analyze urban spatial data—such as sidewalk characteristics, road features, slope, traffic levels, and lighting conditions—using open data sources. These features will be processed and used to train a machine learning model that predicts an accessibility risk score for each street or block. The output will be visualized through a map-based interface that highlights low-, medium-, and high-risk areas, making the results easy to interpret and actionable.</p>
            <p>Rather than treating accessibility as a simple yes-or-no condition, this project models it as a risk spectrum, which can help prioritize areas that require urgent attention. The approach combines rule-based accessibility standards with supervised machine learning to ensure both interpretability and predictive capability.</p>

            <h4 class="text-xl font-bold text-white mt-6 mb-3">Initial Thoughts and Reflections</h4>
            <p>At the start of this project, my main motivation was to work on something that goes beyond a purely technical exercise and addresses a tangible societal issue. While the problem space is complex, breaking it down into data features, risk modeling, and visualization has helped clarify the implementation path. One of the initial challenges I anticipate is dealing with incomplete or inconsistent urban data; however, this also makes the project more realistic and aligned with real-world engineering problems.</p>
            <p>Overall, I believe this project provides a strong foundation for learning and experimentation, while also offering potential value for future research and practical applications in smart city planning. This first phase has helped me clearly define the scope, objectives, and direction of my work, and I am excited to begin the development and analysis stages in the coming weeks.</p>
        `
    }
];
