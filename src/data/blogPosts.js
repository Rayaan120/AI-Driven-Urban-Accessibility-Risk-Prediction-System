export const blogPosts = [
    {
        id: 5,
        week: 5,
        title: "Software Methodology and Prototype Development",
        date: "Feb 20, 2026",
        excerpt: "Analyzing development frameworks and building the initial functional prototype for the AURaMP system.",
        content: `
            <div class="mb-8 overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <img 
                    src="/images/week5-project.jpg" 
                    alt="Software Methodology and Prototype" 
                    class="w-full h-auto object-cover"
                />
            </div>

            <h4 class="text-xl font-bold text-white mt-6 mb-3">Software Methodology Selection</h4>
            <p>This week, I analyzed different software development methodologies to determine which approach would be most suitable for the AURaMP project. The methodologies reviewed included the Waterfall model, Agile methodology, Scrum framework, and Spiral model.</p>
            <p>The Waterfall model follows a linear development process where each stage is completed before moving to the next. While it provides clear documentation, it lacks flexibility when changes are required during development. The Spiral model focuses heavily on risk management and iterative development, but it is generally more complex and suited for large-scale systems.</p>
            <p>Agile and Scrum emphasize iterative development, allowing features to be built, tested, and improved continuously. This approach is particularly useful for projects where requirements evolve during development.</p>
            <p>After comparing these approaches, Agile methodology was selected for the AURaMP project. Agile allows the system to be developed incrementally, enabling continuous testing and improvement of different modules such as data processing, machine learning models, and the interactive map interface. This flexibility makes Agile well-suited for a research-oriented development project.</p>

            <h4 class="text-xl font-bold text-white mt-6 mb-3">Prototype Development Process</h4>
            <p>The next step in the project involved planning and developing an initial prototype of the system. The purpose of the prototype was to demonstrate the core functionality of the accessibility risk mapping system before implementing more advanced features.</p>
            
            <div class="space-y-6 mt-4">
                <div>
                    <h5 class="text-white font-semibold mb-2">Prototype Planning</h5>
                    <p class="text-gray-300">The system architecture, required software tools, and overall workflow were defined. Technologies such as React for the frontend, FastAPI for the backend, and Python-based machine learning libraries were selected.</p>
                </div>
                <div>
                    <h5 class="text-white font-semibold mb-2">Prototype Development</h5>
                    <p class="text-gray-300">A minimum viable prototype was created focusing on the key features of the system. This included developing the risk prediction model, building the backend API, and creating a map-based interface to visualize accessibility risk levels.</p>
                </div>
                <div>
                    <h5 class="text-white font-semibold mb-2">Testing and Validation</h5>
                    <p class="text-gray-300">The prototype was tested to ensure that the data processing pipeline, machine learning predictions, and map visualization were functioning correctly.</p>
                </div>
                <div>
                    <h5 class="text-white font-semibold mb-2">Refinement</h5>
                    <p class="text-gray-300">Based on testing results, improvements were made to enhance system performance and usability.</p>
                </div>
            </div>

            <h4 class="text-xl font-bold text-white mt-6 mb-3">Reflection</h4>
            <p>This week was important for organizing the development strategy of the project. Selecting an appropriate software methodology provided a structured approach for building the system, while the prototyping process helped transform the conceptual idea of the project into an early working version. The initial prototype demonstrates the feasibility of the system and provides a strong foundation for further development and refinement.</p>
        `
    },
    {
        id: 4,
        week: 4,
        title: "Project Planning, Gantt Chart, WBS, Software Methodology, and Research Methodology",
        date: "Feb 13, 2026",
        excerpt: "Defining the structural roadmap: Work Breakdown Structure, Gantt charts, and iterative development methodologies for AURaMP.",
        content: `
            <h4 class="text-xl font-bold text-white mt-6 mb-3">Project Planning Overview</h4>
            <p>This week focused on planning the structure and timeline of the project in order to ensure systematic development and timely completion. While the project idea, objectives, and research background were already defined in previous weeks, it was important to translate these ideas into a clear execution plan. Effective planning helps break down the overall system into manageable components and provides a roadmap for development, experimentation, and evaluation.</p>
            <p>The project, titled “AURaMP – AI-Driven Urban Accessibility Risk Mapping & Prediction System,” involves several interconnected components including data preparation, machine learning modeling, web application development, and visualization. To organize these tasks efficiently, I developed a Work Breakdown Structure (WBS) and a Gantt chart. These tools help identify the sequence of activities, dependencies between tasks, and expected timelines for each phase of the project.</p>

            <h4 class="text-xl font-bold text-white mt-6 mb-3">Work Breakdown Structure (WBS)</h4>
            <p>The Work Breakdown Structure divides the project into smaller, manageable tasks that can be completed in stages. For this project, the major components were organized into the following phases:</p>
            <div class="space-y-6 mt-4">
                <div>
                    <h5 class="text-white font-semibold mb-2">1. Research and Problem Definition</h5>
                    <ul class="list-disc pl-5 space-y-1 text-gray-300">
                        <li>Identify urban accessibility challenges.</li>
                        <li>Study accessibility standards and universal design principles.</li>
                        <li>Review existing research related to GIS-based accessibility analysis and machine learning applications in urban planning.</li>
                    </ul>
                </div>
                <div>
                    <h5 class="text-white font-semibold mb-2">2. Data Preparation</h5>
                    <ul class="list-disc pl-5 space-y-1 text-gray-300">
                        <li>Identify key accessibility-related features such as sidewalk width, slope, curb ramps, lighting, and surface condition.</li>
                        <li>Create or collect a structured dataset representing street segments or blocks.</li>
                        <li>Clean and preprocess the dataset to ensure consistency.</li>
                    </ul>
                </div>
                <div>
                    <h5 class="text-white font-semibold mb-2">3. Risk Modeling</h5>
                    <ul class="list-disc pl-5 space-y-1 text-gray-300">
                        <li>Develop a rule-based accessibility scoring system aligned with accessibility guidelines.</li>
                        <li>Train and evaluate a supervised machine learning model to classify accessibility risk levels.</li>
                    </ul>
                </div>
                <div>
                    <h5 class="text-white font-semibold mb-2">4. System Development</h5>
                    <ul class="list-disc pl-5 space-y-1 text-gray-300">
                        <li>Build the backend infrastructure using a web framework.</li>
                        <li>Implement the machine learning prediction pipeline.</li>
                        <li>Develop the frontend interface with an interactive map to visualize accessibility risk levels.</li>
                    </ul>
                </div>
                <div>
                    <h5 class="text-white font-semibold mb-2">5. Testing and Evaluation</h5>
                    <ul class="list-disc pl-5 space-y-1 text-gray-300">
                        <li>Validate the predictions generated by the model.</li>
                        <li>Evaluate system usability and visualization effectiveness.</li>
                    </ul>
                </div>
                <div>
                    <h5 class="text-white font-semibold mb-2">6. Documentation and Reporting</h5>
                    <ul class="list-disc pl-5 space-y-1 text-gray-300">
                        <li>Prepare the final report and technical documentation.</li>
                        <li>Compile results, analysis, and reflections.</li>
                    </ul>
                </div>
            </div>

            <h4 class="text-xl font-bold text-white mt-6 mb-3">Gantt Chart (Project Timeline)</h4>
            <div class="mb-8 overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <img 
                    src="/images/week4-project.jpg" 
                    alt="Project Gantt Chart" 
                    class="w-full h-auto object-cover"
                />
            </div>

            <h4 class="text-xl font-bold text-white mt-6 mb-3">Software Development Methodology</h4>
            <p>For the software development process, an iterative development approach is being adopted. Rather than building the entire system in a single step, the project is divided into smaller functional modules that can be developed and tested incrementally.</p>
            <ul class="list-disc pl-5 mt-2 space-y-2 text-gray-300">
                <li><strong>Requirement identification</strong> – defining system features and data inputs.</li>
                <li><strong>Design and architecture planning</strong> – determining how the backend, machine learning model, and frontend interface will interact.</li>
                <li><strong>Implementation</strong> – developing the machine learning model and building the interactive mapping interface.</li>
                <li><strong>Testing and refinement</strong> – evaluating system functionality and improving model performance.</li>
            </ul>

            <h4 class="text-xl font-bold text-white mt-6 mb-3">Research Methodology</h4>
            <p>The research methodology for this project follows a data-driven experimental approach. The process begins with identifying relevant infrastructure features that influence accessibility. These features are converted into measurable variables that can be analyzed computationally. A rule-based accessibility scoring method is first developed based on accessibility guidelines to ensure interpretability.</p>
            <p>After establishing the rule-based system, a supervised machine learning model is trained using the dataset to classify accessibility risk levels. The model's predictions are then visualized through a map-based interface, enabling spatial analysis of accessibility risks.</p>

            <h4 class="text-xl font-bold text-white mt-6 mb-3">Reflection</h4>
            <p>This week’s planning activities helped establish a clear roadmap for the project. Developing the Work Breakdown Structure and Gantt chart made it easier to visualize how different components of the system will be developed and integrated over time. It also highlighted the importance of allocating time not only for development but also for testing, evaluation, and documentation.</p>
        `
    },
    {
        id: 3,
        week: 3,
        title: "Literature Review, Research Gap, Research Questions, and Reflections",
        date: "Feb 06, 2026",
        excerpt: "Understanding existing research frameworks, identifying gaps, and framing questions for the AURaMP predictive accessibility model.",
        content: `
            <div class="mb-8 overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <img 
                    src="/images/week3-project.jpg" 
                    alt="Literature Review and Research Gap" 
                    class="w-full h-auto object-cover"
                />
            </div>
            <h4 class="text-xl font-bold text-white mt-6 mb-3">Literature Review</h4>
            <p>This week, I focused on understanding the existing research and frameworks related to urban accessibility, inclusive design, and smart city analytics. Accessibility in urban planning is typically guided by established standards such as universal design principles and government accessibility guidelines. These standards define requirements for features such as minimum sidewalk width, slope limits, curb ramp design, surface quality, and pedestrian lighting.</p>
            <p>Many existing studies evaluate accessibility through audits, surveys, or GIS-based spatial analysis. Geographic Information Systems (GIS) are commonly used to map infrastructure conditions and visualize accessibility levels. However, most systems rely on static mapping or manual evaluation rather than predictive modeling.</p>
            <p>In recent years, machine learning has been widely applied in urban analytics, including traffic prediction, infrastructure monitoring, and smart mobility systems. However, its application specifically for predicting accessibility risk at a micro (street/block) level appears limited. Most research focuses either on high-level policy analysis or purely technical infrastructure assessment without integrating predictive risk modeling.</p>
            <p>From reviewing this literature, it became clear that while accessibility standards exist and spatial mapping tools are available, there is limited work that combines rule-based compliance assessment with machine learning-based risk prediction in a single, interactive system.</p>

            <h4 class="text-xl font-bold text-white mt-6 mb-3">Research Gap</h4>
            <p>Based on the literature reviewed, the following research gaps were identified:</p>
            <ul class="list-disc pl-5 mt-2 space-y-2 text-gray-300">
                <li>Accessibility evaluation is often reactive and manual rather than proactive and predictive.</li>
                <li>Existing GIS-based tools primarily visualize infrastructure conditions but do not forecast risk levels.</li>
                <li>There is limited integration of accessibility standards with machine learning techniques for risk scoring.</li>
                <li>Few systems provide an interactive decision-support tool that combines interpretability (rule-based checks) with predictive modeling (ML-based classification).</li>
            </ul>
            <p class="mt-4">This project aims to address these gaps by developing a hybrid system that integrates accessibility guidelines with supervised machine learning to generate risk-based insights at a street or block level.</p>

            <h4 class="text-xl font-bold text-white mt-6 mb-3">Research Questions</h4>
            <p>To guide the development and evaluation of the project, the following research questions have been formulated:</p>
            <ul class="list-disc pl-5 mt-2 space-y-2 text-gray-300">
                <li>How can urban infrastructure features be transformed into measurable indicators of accessibility risk?</li>
                <li>Can supervised machine learning models effectively predict accessibility risk levels based on infrastructure attributes?</li>
                <li>How does a hybrid approach (rule-based + ML-based) improve interpretability and reliability in accessibility assessment?</li>
                <li>Can a map-based visualization system enhance the usability and decision-making potential of accessibility risk data?</li>
            </ul>
            <p class="mt-4">These questions will shape both the technical implementation and the evaluation of the system in the coming weeks.</p>

            <h4 class="text-xl font-bold text-white mt-6 mb-3">Reflection</h4>
            <p>Working on the literature review helped me understand that accessibility is not just a technical problem but also a policy and social issue. It reinforced the importance of designing the system in a way that remains transparent and interpretable rather than purely algorithmic.</p>
            <p>Identifying the research gap was particularly important, as it clarified what differentiates this project from existing studies. The integration of predictive modeling with rule-based standards appears to be the most innovative aspect of the system.</p>
            <p>This week has strengthened the research foundation of the project and ensured that the development phase is grounded in existing knowledge while contributing something new. It has also made me more confident about the academic relevance of the project.</p>
        `
    },
    {
        id: 2,
        week: 2,
        title: "Project Topic, Aim, and Objectives",
        date: "Jan 30, 2026",
        excerpt: "Refining the final-year project topic: AURaMP - AI-Driven Urban Accessibility Risk Mapping & Prediction System.",
        content: `
            <div class="mb-8 overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <img 
                    src="/images/week2-project.jpg" 
                    alt="AURaMP Project Objectives" 
                    class="w-full h-auto object-cover"
                />
            </div>
            <h4 class="text-xl font-bold text-white mt-6 mb-3">Project Topic</h4>
            <p>This week, I worked on clearly defining and refining my final-year project topic. The project is titled “AURaMP – AI-Driven Urban Accessibility Risk Mapping & Prediction System.” The focus of this project is to develop a smart, data-driven system that can analyze urban infrastructure and predict accessibility risks at a street or block level.</p>
            <p>The idea is to study common urban features such as sidewalk width, slope, curb ramps, lighting conditions, surface quality, and traffic levels, and use them to estimate how accessible a particular area is. Instead of looking at accessibility as a simple yes-or-no condition, the system will classify areas into different risk levels (low, medium, or high). This makes the results more practical and useful for prioritizing improvements.</p>

            <h4 class="text-xl font-bold text-white mt-6 mb-3">Aim of the Project</h4>
            <p>The main aim of this project is to build an intelligent system that can evaluate urban areas and predict accessibility risk using machine learning techniques.</p>
            <p>I want the system to move beyond reactive reporting, where issues are addressed only after complaints are made. Instead, the goal is to proactively highlight areas that are likely to pose challenges for elderly individuals and people with disabilities.</p>
            <p>Ultimately, the system is intended to act as a decision-support tool that can assist planners, researchers, or policymakers in identifying which areas require urgent accessibility improvements.</p>

            <h4 class="text-xl font-bold text-white mt-6 mb-3">Objectives of the Project</h4>
            <p>To achieve this aim, I have defined the following objectives:</p>
            <ul class="list-disc pl-5 mt-2 space-y-2 text-gray-300">
                <li>Identify and select key urban features that influence accessibility, such as sidewalk width, slope, curb ramps, lighting, and surface conditions.</li>
                <li>Create a structured dataset representing street segments or blocks with these accessibility-related attributes.</li>
                <li>Develop a rule-based accessibility scoring mechanism aligned with established accessibility guidelines, ensuring transparency and interpretability.</li>
                <li>Implement a supervised machine learning model that can predict accessibility risk levels based on infrastructure data.</li>
                <li>Build a web-based interactive map interface to visualize the predicted risk levels in a clear and intuitive manner.</li>
                <li>Evaluate the performance of the model and analyze how accurately it predicts accessibility risk.</li>
                <li>Explore how such a system can contribute to smarter, more inclusive urban planning.</li>
            </ul>

            <h4 class="text-xl font-bold text-white mt-6 mb-3">Reflection</h4>
            <p>This week helped me bring more structure and clarity to the project. While the core idea was already defined earlier, formally writing down the aim and objectives made the scope more concrete and manageable. It also helped me think practically about how each component—data collection, risk modeling, and visualization—fits together.</p>
            <p>Defining these objectives gives me a clear roadmap for the upcoming development phase, and it has made the project feel more focused and achievable.</p>
        `
    },
    {
        id: 1,
        week: 1,
        title: "Project Overview and Initial Thoughts",
        date: "Jan 23, 2026",
        excerpt: "Introduction to Smart Urban Accessibility Risk Mapping System: Using ML to predict accessibility risks for inclusive urban planning.",
        content: `
            <div class="mb-8 overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <img 
                    src="/images/week1-project.jpg" 
                    alt="Smart Urban Accessibility Mapping" 
                    class="w-full h-auto object-cover"
                />
            </div>
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
