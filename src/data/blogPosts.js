export const blogPosts = [
    {
        id: 3,
        week: 3,
        title: "Literature Review, Research Gap, Research Questions, and Reflections",
        date: "Feb 18, 2026",
        excerpt: "Understanding existing research frameworks, identifying gaps, and framing questions for the AURaMP predictive accessibility model.",
        content: `
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
        date: "Feb 11, 2026",
        excerpt: "Refining the final-year project topic: AURaMP - AI-Driven Urban Accessibility Risk Mapping & Prediction System.",
        content: `
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
