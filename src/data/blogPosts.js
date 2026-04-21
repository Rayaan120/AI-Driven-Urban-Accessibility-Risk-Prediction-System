export const blogPosts = [
    {
        id: 11,
        week: 11,
        title: "Final Project Outcomes, Reflection, and Preparation",
        date: "Apr 03, 2026",
        excerpt: "Reviewing the overall readiness for deployment, identifying future enhancements, and finalizing the report and presentation.",
        content: `
            <div class="mb-8 overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <img 
                    src="/images/week11-project.png" 
                    alt="Skills and Future Vision" 
                    class="w-full h-auto object-cover"
                />
            </div>

            <h4 class="text-xl font-bold text-white mt-6 mb-3">2.1 Project Readiness</h4>
            <p>This final week focused on assessing the readiness of the ARiS system for real-world implementation. The system is now functionally complete, capable of predicting risk, evaluating compliance, and aiding decision-making through interactive map-based simulation.</p>

            <h4 class="text-xl font-bold text-white mt-8 mb-4">Knowledge and Skills Gained</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-sm">
                <div class="p-4 rounded-xl bg-white/5 border border-white/10">
                    <ul class="space-y-2 text-gray-400">
                        <li><span class="text-green-400 mr-2">✔</span> Machine learning model implementation & hyperparameter tuning</li>
                        <li><span class="text-green-400 mr-2">✔</span> Full-stack React development with FastAPI integration</li>
                    </ul>
                </div>
                <div class="p-4 rounded-xl bg-white/5 border border-white/10">
                    <ul class="space-y-2 text-gray-400">
                        <li><span class="text-green-400 mr-2">✔</span> Data preprocessing & feature engineering</li>
                        <li><span class="text-green-400 mr-2">✔</span> Interactive GIS-based visualization design</li>
                    </ul>
                </div>
            </div>

            <h4 class="text-xl font-bold text-white mt-8 mb-3">Limitations and Proposed Improvements</h4>
            <p>While successful, the project identified areas for growth such as dataset depth and real-time integration. Proposed improvements include using real-world urban authority datasets, integrating live traffic sensor data, and implementing data-driven weighting in the priority engine.</p>

            <div class="bg-blue-500/5 border border-blue-500/20 rounded-xl p-5 mt-4">
                <h5 class="text-blue-400 font-semibold mb-2">Future Enhancements</h5>
                <p class="text-sm text-gray-400">Future iterations could involve integration with city-wide GIS platforms, a mobile app for field data collection, and more advanced predictive models for dynamic risk updates.</p>
            </div>

            <h4 class="text-xl font-bold text-white mt-8 mb-3">Final Deliverables</h4>
            <p>Significant progress has been made in finalizing the project report and presentation. All chapters—from literature search to evaluation—are drafted, and the presentation slides are polished for an effective delivery of the problem, methodology, and results.</p>

            <h4 class="text-xl font-bold text-white mt-10 mb-3">Reflection</h4>
            <p>Reviewing the entire journey, I am proud of how the ARiS system transitioned from a conceptual idea to a working predictive tool. This project not only sharpened my technical abilities but also deepened my understanding of how data science can be applied to create more equitable and accessible urban environments.</p>
        `
    },
    {
        id: 10,
        week: 10,
        title: "Project Progress, Evaluation, and Final Review",
        date: "Mar 27, 2026",
        excerpt: "Concluding the AURaMP journey: Summarizing key findings, system performance, and the impact of AI-driven urban accessibility mapping.",
        content: `
            <div class="mb-8 overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <img 
                    src="/images/week10-project.png" 
                    alt="Final Project Review" 
                    class="w-full h-auto object-cover"
                />
            </div>

            <h4 class="text-xl font-bold text-white mt-6 mb-3">2.1 Project Progress</h4>
            <p>This final week focused on testing, integration, and validation of the ARiS system. All major components—including the frontend interface, backend API, and machine learning model—were tested together to ensure smooth operation. The system successfully generates accessibility risk predictions and displays them through an interactive map interface.</p>

            <h5 class="text-white font-semibold mt-6 mb-3">Project Outputs vs. Objectives</h5>
            <div class="overflow-x-auto mb-6">
                <table class="w-full text-left text-sm text-gray-400 border-collapse">
                    <thead class="text-white bg-white/5">
                        <tr>
                            <th class="p-3 border border-white/10">Objective</th>
                            <th class="p-3 border border-white/10">Outcome</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-3 border border-white/10">Identify key accessibility features</td><td class="p-3 border border-white/10 text-green-400">Successfully implemented</td></tr>
                        <tr><td class="p-3 border border-white/10">Develop rule-based scoring system</td><td class="p-3 border border-white/10 text-green-400">Achieved</td></tr>
                        <tr><td class="p-3 border border-white/10">Implement ML-based risk prediction</td><td class="p-3 border border-white/10 text-green-400">Achieved</td></tr>
                        <tr><td class="p-3 border border-white/10">Build interactive map interface</td><td class="p-3 border border-white/10 text-green-400">Achieved</td></tr>
                    </tbody>
                </table>
            </div>

            <h5 class="text-white font-semibold mt-8 mb-3">Implementation Procedure</h5>
            <ul class="list-decimal pl-5 space-y-2 text-gray-300">
                <li>Load dataset containing road segment features</li>
                <li>Process input data and apply rule-based scoring</li>
                <li>Generate ML predictions using trained Random Forest model</li>
                <li>Compute confidence scores to assess prediction reliability</li>
                <li>Generate feature importance explanations (XAI) for model interpretability</li>
                <li>Display risk levels and results on the interactive map interface</li>
                <li>Allow prediction for new or user-defined inputs</li>
                <li>Enable scenario simulation by modifying input attributes in real time</li>
                <li>Use the city planning dashboard (budget optimizer) to allocate resources and prioritise interventions under budget constraints</li>
            </ul>

            <h4 class="text-xl font-bold text-white mt-10 mb-4">2.2 Project Review</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div class="p-5 rounded-xl bg-white/5 border border-white/10">
                    <h5 class="text-white font-bold mb-2">Design & Architecture</h5>
                    <p class="text-sm text-gray-400">Adopted a modular approach, separating frontend, backend, and ML. Wireframes ensured a user-friendly interface.</p>
                </div>
                <div class="p-5 rounded-xl bg-white/5 border border-white/10">
                    <h5 class="text-white font-bold mb-2">Evaluation Results</h5>
                    <p class="text-sm text-gray-400">Testing confirmed consistent outputs and efficient real-time interactions for urban planners.</p>
                </div>
            </div>

            <h4 class="text-xl font-bold text-white mt-8 mb-3">2.3 Summary of Key Achievements</h4>
            <ul class="list-disc pl-5 space-y-2 text-gray-300">
                <li>Developed a hybrid (rule-based + ML) risk prediction system</li>
                <li>Built interactive map visualization for accessibility auditing</li>
                <li>Integrated explainability (XAI) to interpret model predictions</li>
                <li>Implemented a confidence and uncertainty layer to assess prediction reliability</li>
                <li>Developed a priority intervention engine for ranking segments based on urgency</li>
                <li>Enabled accessibility risk prediction for new or user-defined areas</li>
                <li>Implemented a city planning dashboard with a budget optimizer for resource allocation</li>
                <li>Proactive identification of high-risk areas for inclusive planning</li>
            </ul>

            <h4 class="text-xl font-bold text-white mt-10 mb-3">Reflection</h4>
            <p>This final phase provided a complete understanding of system development. The project addresses the challenge of urban accessibility by providing a proactive, data-driven solution. While limitations like dataset scope exist, the project demonstrates how AI can empower equitable urban planning and provides a strong foundation for future research.</p>
        `
    },
    {
        id: 9,
        week: 9,
        title: "Software Testing: Concepts, Types, and Implementation",
        date: "Mar 20, 2026",
        excerpt: "Applying rigorous software testing principles—from unit to integration testing—to ensure the reliability and accuracy of the AURaMP system.",
        content: `
            <div class="mb-8 overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <img 
                    src="/images/week9-project.png" 
                    alt="Software Testing and QA" 
                    class="w-full h-auto object-cover"
                />
            </div>

            <h4 class="text-xl font-bold text-white mt-6 mb-3">Overview</h4>
            <p>This week focused on applying software testing principles within the ARiS system. Testing plays a critical role in ensuring that each part functions correctly and that the overall system behaves as expected, especially given the integration of frontend, backend, and machine learning modules.</p>

            <h4 class="text-xl font-bold text-white mt-8 mb-4">1. Introduction to Software Testing</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div class="p-5 rounded-xl bg-green-500/5 border border-green-500/20">
                    <h5 class="text-green-400 font-bold mb-2">Verification</h5>
                    <p class="text-sm text-gray-400">Focuses on whether the system is built correctly according to design specifications. (e.g., Is the ML model implemented as intended?)</p>
                </div>
                <div class="p-5 rounded-xl bg-blue-500/5 border border-blue-500/20">
                    <h5 class="text-blue-400 font-bold mb-2">Validation</h5>
                    <p class="text-sm text-gray-400">Ensures the system meets user needs and solves the intended problem. (e.g., Does it correctly identify high-risk areas?)</p>
                </div>
            </div>

            <h4 class="text-xl font-bold text-white mt-8 mb-4">2. Types of Software Testing</h4>
            <div class="overflow-x-auto mb-6">
                <table class="w-full text-left text-sm text-gray-400 border-collapse">
                    <thead class="text-white bg-white/5">
                        <tr>
                            <th class="p-3 border border-white/10">Testing Type</th>
                            <th class="p-3 border border-white/10">Purpose</th>
                            <th class="p-3 border border-white/10">Example in AURaMP</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-3 border border-white/10 text-white font-medium">Unit Testing</td>
                            <td class="p-3 border border-white/10">Test individual components</td>
                            <td class="p-3 border border-white/10">ML prediction function</td>
                        </tr>
                        <tr>
                            <td class="p-3 border border-white/10 text-white font-medium">Integration Testing</td>
                            <td class="p-3 border border-white/10">Test interaction between modules</td>
                            <td class="p-3 border border-white/10">Frontend ↔ Backend API communication</td>
                        </tr>
                        <tr>
                            <td class="p-3 border border-white/10 text-white font-medium">System Testing</td>
                            <td class="p-3 border border-white/10">Test complete system functionality</td>
                            <td class="p-3 border border-white/10">Full map-to-prediction workflow</td>
                        </tr>
                        <tr>
                            <td class="p-3 border border-white/10 text-white font-medium">Acceptance Testing</td>
                            <td class="p-3 border border-white/10">Validate user requirements</td>
                            <td class="p-3 border border-white/10">Usability for urban planners</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h4 class="text-xl font-bold text-white mt-8 mb-3">3. Integration Testing Implementation</h4>
            <p>Integration testing confirmed that data transmission between the React frontend and FastAPI backend is functioning correctly. Using the scenario simulator, test steps verified that modified attributes trigger successful ML predictions which are then accurately displayed on the map.</p>
            <div class="bg-white/5 border border-white/10 rounded-xl p-5 mt-4">
                <h5 class="text-white font-semibold mb-2">Test Result Summary</h5>
                <ul class="space-y-2">
                    <li class="flex items-center text-sm text-gray-400"><span class="text-green-500 mr-2">✔</span> Data transmission is functioning correctly</li>
                    <li class="flex items-center text-sm text-gray-400"><span class="text-green-500 mr-2">✔</span> ML predictions are triggered successfully</li>
                    <li class="flex items-center text-sm text-gray-400"><span class="text-green-500 mr-2">✔</span> Results are accurately displayed to the user</li>
                </ul>
            </div>

            <h4 class="text-xl font-bold text-white mt-8 mb-4">4. Unit Testing</h4>
            <p class="mb-6 text-gray-400">The following test cases document the verification of individual functional requirements, ensuring each module performs correctly under various conditions. All tests follow the standard ARiS verification protocol.</p>
            
            <div class="space-y-12 max-h-[1200px] overflow-y-auto pr-2 custom-scrollbar">
                <!-- Test Case 1 -->
                <div class="overflow-x-auto">
                    <table class="w-full text-left text-xs text-gray-300 border-collapse bg-white/5 rounded-lg overflow-hidden border border-white/20">
                        <thead>
                            <tr class="bg-white/10 text-white uppercase tracking-wider">
                                <th class="p-3 border border-white/20 w-1/3">Field</th>
                                <th class="p-3 border border-white/20">Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Test Case ID</td><td class="p-3 border border-white/20">TC001</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Test Case Name</td><td class="p-3 border border-white/20">Load Dashboard Successfully</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Module/Feature</td><td class="p-3 border border-white/20">System Initialization / Dashboard</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Preconditions</td><td class="p-3 border border-white/20 text-gray-400">Backend server is running and frontend is connected.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Test Steps</td><td class="p-3 border border-white/20 text-gray-400">1. Launch the application.<br/>2. Wait for dashboard to load.<br/>3. Observe map and sidebar.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Test Data</td><td class="p-3 border border-white/20 text-gray-400 italic">Valid backend connection and block dataset.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Expected Result</td><td class="p-3 border border-white/20 text-blue-300/80">Dashboard loads successfully with map, sidebar, and block data visible.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Actual Result</td><td class="p-3 border border-white/20 text-gray-400">Dashboard loaded successfully with all components visible.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Status</td><td class="p-3 border border-white/20"><span class="px-2 py-0.5 rounded text-[10px] font-bold bg-green-500/20 text-green-400 border border-green-500/20">PASS</span></td></tr>
                        </tbody>
                    </table>
                </div>

                <!-- Test Case 2 -->
                <div class="overflow-x-auto">
                    <table class="w-full text-left text-xs text-gray-300 border-collapse bg-white/5 rounded-lg overflow-hidden border border-white/20">
                        <thead>
                            <tr class="bg-white/10 text-white uppercase tracking-wider text-xs">
                                <th class="p-3 border border-white/20 w-1/3">Field</th>
                                <th class="p-3 border border-white/20">Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Test Case ID</td><td class="p-3 border border-white/20">TC002</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Test Case Name</td><td class="p-3 border border-white/20">Display Road Segments on Map</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Module/Feature</td><td class="p-3 border border-white/20">Map Visualization</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Preconditions</td><td class="p-3 border border-white/20 text-gray-400">Block dataset is available from backend.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Test Steps</td><td class="p-3 border border-white/20 text-gray-400">1. Open the application.<br/>2. Check map display.<br/>3. Verify that road segments appear on the map.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Test Data</td><td class="p-3 border border-white/20 text-gray-400 italic">Road segment dataset with coordinates.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Expected Result</td><td class="p-3 border border-white/20 text-blue-300/80">All available segments are displayed as colored lines on the map.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Actual Result</td><td class="p-3 border border-white/20 text-gray-400">Segments were displayed correctly on the map.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Status</td><td class="p-3 border border-white/20"><span class="px-2 py-0.5 rounded text-[10px] font-bold bg-green-500/20 text-green-400 border border-green-500/20">PASS</span></td></tr>
                        </tbody>
                    </table>
                </div>

                <!-- Test Case 3 -->
                <div class="overflow-x-auto">
                    <table class="w-full text-left text-xs text-gray-300 border-collapse bg-white/5 rounded-lg overflow-hidden border border-white/20">
                        <thead>
                            <tr class="bg-white/10 text-white uppercase tracking-wider text-xs">
                                <th class="p-3 border border-white/20 w-1/3">Field</th>
                                <th class="p-3 border border-white/20">Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Test Case ID</td><td class="p-3 border border-white/20">TC003</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Test Case Name</td><td class="p-3 border border-white/20">Select Segment from Map</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Module/Feature</td><td class="p-3 border border-white/20">Map Interaction</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Preconditions</td><td class="p-3 border border-white/20 text-gray-400">Map is loaded with visible segments.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Test Steps</td><td class="p-3 border border-white/20 text-gray-400">1. Click on any road segment.<br/>2. Observe selected details in popup/sidebar.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Test Data</td><td class="p-3 border border-white/20 text-gray-400 italic">One existing road segment.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Expected Result</td><td class="p-3 border-b border-white/20 text-blue-300/80">Selected segment details are shown correctly.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Actual Result</td><td class="p-3 border-b border-white/20 text-gray-400">Segment details were displayed successfully.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Status</td><td class="p-3 border-white/20"><span class="px-2 py-0.5 rounded text-[10px] font-bold bg-green-500/20 text-green-400 border border-green-500/20">PASS</span></td></tr>
                        </tbody>
                    </table>
                </div>

                <!-- Test Case 4 -->
                <div class="overflow-x-auto">
                    <table class="w-full text-left text-xs text-gray-300 border-collapse bg-white/5 rounded-lg overflow-hidden border border-white/20">
                        <thead>
                            <tr class="bg-white/10 text-white uppercase tracking-wider text-xs">
                                <th class="p-3 border border-white/20 w-1/3">Field</th>
                                <th class="p-3 border border-white/20">Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Test Case ID</td><td class="p-3 border border-white/20">TC004</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Test Case Name</td><td class="p-3 border border-white/20">Rule-Based Risk Filtering</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Module/Feature</td><td class="p-3 border border-white/20">Risk Filter</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Preconditions</td><td class="p-3 border border-white/20 text-gray-400">Dashboard is loaded with multiple segments.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Test Steps</td><td class="p-3 border border-white/20 text-gray-400">1. Switch to Rule-Based view.<br/>2. Select High Risk filter.<br/>3. Observe filtered map output.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Test Data</td><td class="p-3 border border-white/20 text-gray-400 italic">Segments with mixed risk levels.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Expected Result</td><td class="p-3 border border-white/20 text-blue-300/80">Only high-risk rule-based segments are shown.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Actual Result</td><td class="p-3 border border-white/20 text-gray-400">High-risk rule-based segments were filtered correctly.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Status</td><td class="p-3 border border-white/20"><span class="px-2 py-0.5 rounded text-[10px] font-bold bg-green-500/20 text-green-400 border border-green-500/20">PASS</span></td></tr>
                        </tbody>
                    </table>
                </div>

                <!-- Test Case 5 -->
                <div class="overflow-x-auto">
                    <table class="w-full text-left text-xs text-gray-300 border-collapse bg-white/5 rounded-lg overflow-hidden border border-white/20">
                        <thead>
                            <tr class="bg-white/10 text-white uppercase tracking-wider text-xs">
                                <th class="p-3 border border-white/20 w-1/3">Field</th>
                                <th class="p-3 border border-white/20">Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Test Case ID</td><td class="p-3 border border-white/20">TC005</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Test Case Name</td><td class="p-3 border border-white/20">ML-Based Risk Filtering</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Module/Feature</td><td class="p-3 border border-white/20">Risk Filter / ML View</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Preconditions</td><td class="p-3 border border-white/20 text-gray-400">ML predictions are available.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Test Steps</td><td class="p-3 border border-white/20 text-gray-400">1. Switch to ML-Based view.<br/>2. Select Medium Risk filter.<br/>3. Observe filtered results.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Test Data</td><td class="p-3 border border-white/20 text-gray-400 italic">Segments with ML risk predictions.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Expected Result</td><td class="p-3 border border-white/20 text-blue-300/80">Only medium-risk ML segments are displayed.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Actual Result</td><td class="p-3 border border-white/20 text-gray-400">ML-based filtering worked correctly.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Status</td><td class="p-3 border border-white/20"><span class="px-2 py-0.5 rounded text-[10px] font-bold bg-green-500/20 text-green-400 border border-green-500/20">PASS</span></td></tr>
                        </tbody>
                    </table>
                </div>

                <!-- Test Case 6 -->
                <div class="overflow-x-auto">
                    <table class="w-full text-left text-xs text-gray-300 border-collapse bg-white/5 rounded-lg overflow-hidden border border-white/20">
                        <thead>
                            <tr class="bg-white/10 text-white uppercase tracking-wider text-xs">
                                <th class="p-3 border border-white/20 w-1/3">Field</th>
                                <th class="p-3 border border-white/20">Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Test Case ID</td><td class="p-3 border border-white/20">TC006</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Test Case Name</td><td class="p-3 border border-white/20">Compliance Filter for Non-Compliant Segments</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Module/Feature</td><td class="p-3 border border-white/20">Compliance Filter</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Preconditions</td><td class="p-3 border border-white/20 text-gray-400">Compliance scoring is enabled.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Test Steps</td><td class="p-3 border border-white/20 text-gray-400">1. Enable Non-Compliant Only filter.<br/>2. Observe map and segment list.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Test Data</td><td class="p-3 border border-white/20 text-gray-400 italic">Segments with both compliant and non-compliant values.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Expected Result</td><td class="p-3 border border-white/20 text-blue-300/80">Only non-compliant segments are displayed.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Actual Result</td><td class="p-3 border border-white/20 text-gray-400">Only non-compliant segments were shown.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Status</td><td class="p-3 border border-white/20"><span class="px-2 py-0.5 rounded text-[10px] font-bold bg-green-500/20 text-green-400 border border-green-500/20">PASS</span></td></tr>
                        </tbody>
                    </table>
                </div>

                <!-- Test Case 7 -->
                <div class="overflow-x-auto">
                    <table class="w-full text-left text-xs text-gray-300 border-collapse bg-white/5 rounded-lg overflow-hidden border border-white/20">
                        <thead>
                            <tr class="bg-white/10 text-white uppercase tracking-wider text-xs">
                                <th class="p-3 border border-white/20 w-1/3">Field</th>
                                <th class="p-3 border border-white/20">Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Test Case ID</td><td class="p-3 border border-white/20">TC007</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Test Case Name</td><td class="p-3 border border-white/20">ML Risk Prediction for Selected Segment</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Module/Feature</td><td class="p-3 border border-white/20">ML Prediction</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Preconditions</td><td class="p-3 border border-white/20 text-gray-400">Backend ML model is loaded successfully.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Test Steps</td><td class="p-3 border border-white/20 text-gray-400">1. Select a segment.<br/>2. Observe ML risk score and risk level.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Test Data</td><td class="p-3 border border-white/20 text-gray-400 italic">Segment with valid feature values.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Expected Result</td><td class="p-3 border border-white/20 text-blue-300/80">ML risk score, level, and related output are displayed.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Actual Result</td><td class="p-3 border border-white/20 text-gray-400">ML risk prediction was shown correctly.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Status</td><td class="p-3 border border-white/20"><span class="px-2 py-0.5 rounded text-[10px] font-bold bg-green-500/20 text-green-400 border border-green-500/20">PASS</span></td></tr>
                        </tbody>
                    </table>
                </div>

                <!-- Test Case 8 -->
                <div class="overflow-x-auto">
                    <table class="w-full text-left text-xs text-gray-300 border-collapse bg-white/5 rounded-lg overflow-hidden border border-white/20">
                        <thead>
                            <tr class="bg-white/10 text-white uppercase tracking-wider text-xs">
                                <th class="p-3 border border-white/20 w-1/3">Field</th>
                                <th class="p-3 border border-white/20">Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Test Case ID</td><td class="p-3 border border-white/20">TC008</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Test Case Name</td><td class="p-3 border border-white/20">Confidence Score Display</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Module/Feature</td><td class="p-3 border border-white/20">Uncertainty & Confidence Layer</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Preconditions</td><td class="p-3 border border-white/20 text-gray-400">ML prediction has been generated.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Test Steps</td><td class="p-3 border border-white/20 text-gray-400">1. Select a segment.<br/>2. Check confidence value in sidebar/popup.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Test Data</td><td class="p-3 border border-white/20 text-gray-400 italic">Segment with ML prediction probabilities.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Expected Result</td><td class="p-3 border border-white/20 text-blue-300/80">Confidence score is displayed as a percentage/value.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Actual Result</td><td class="p-3 border border-white/20 text-gray-400">Confidence score appeared correctly.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Status</td><td class="p-3 border border-white/20"><span class="px-2 py-0.5 rounded text-[10px] font-bold bg-green-500/20 text-green-400 border border-green-500/20">PASS</span></td></tr>
                        </tbody>
                    </table>
                </div>

                <!-- Test Case 9 -->
                <div class="overflow-x-auto">
                    <table class="w-full text-left text-xs text-gray-300 border-collapse bg-white/5 rounded-lg overflow-hidden border border-white/20">
                        <thead>
                            <tr class="bg-white/10 text-white uppercase tracking-wider text-xs">
                                <th class="p-3 border border-white/20 w-1/3">Field</th>
                                <th class="p-3 border border-white/20">Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Test Case ID</td><td class="p-3 border border-white/20">TC009</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Test Case Name</td><td class="p-3 border border-white/20">XAI Explanation for Selected Segment</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Module/Feature</td><td class="p-3 border border-white/20">Explainability Layer</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Preconditions</td><td class="p-3 border border-white/20 text-gray-400">SHAP explanation or feature explanation is enabled.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Test Steps</td><td class="p-3 border border-white/20 text-gray-400">1. Select a segment.<br/>2. Check explanation panel.<br/>3. Verify risk drivers and protective factors.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Test Data</td><td class="p-3 border border-white/20 text-gray-400 italic">Segment with ML explanation output.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Expected Result</td><td class="p-3 border border-white/20 text-blue-300/80">Main contributing features are displayed clearly.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Actual Result</td><td class="p-3 border border-white/20 text-gray-400">Explanation panel showed feature impacts correctly.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Status</td><td class="p-3 border border-white/20"><span class="px-2 py-0.5 rounded text-[10px] font-bold bg-green-500/20 text-green-400 border border-green-500/20">PASS</span></td></tr>
                        </tbody>
                    </table>
                </div>

                <!-- Test Case 10 -->
                <div class="overflow-x-auto">
                    <table class="w-full text-left text-xs text-gray-300 border-collapse bg-white/5 rounded-lg overflow-hidden border border-white/20">
                        <thead>
                            <tr class="bg-white/10 text-white uppercase tracking-wider text-xs">
                                <th class="p-3 border border-white/20 w-1/3">Field</th>
                                <th class="p-3 border border-white/20">Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Test Case ID</td><td class="p-3 border border-white/20">TC010</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Test Case Name</td><td class="p-3 border border-white/20">Scenario Simulator Updates Risk Output</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Module/Feature</td><td class="p-3 border border-white/20">Scenario Simulator</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Preconditions</td><td class="p-3 border border-white/20 text-gray-400">A segment is selected for simulation.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Test Steps</td><td class="p-3 border border-white/20 text-gray-400">1. Select a segment.<br/>2. Modify sidewalk width or lighting.<br/>3. Observe updated risk and compliance output.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Test Data</td><td class="p-3 border border-white/20 text-gray-400 italic">Original segment + modified scenario values.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Expected Result</td><td class="p-3 border border-white/20 text-blue-300/80">Risk and compliance values update after modifications.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Actual Result</td><td class="p-3 border border-white/20 text-gray-400">Scenario updates reflected correctly in outputs.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Status</td><td class="p-3 border border-white/20"><span class="px-2 py-0.5 rounded text-[10px] font-bold bg-green-500/20 text-green-400 border border-green-500/20">PASS</span></td></tr>
                        </tbody>
                    </table>
                </div>

                <!-- Test Case 11 -->
                <div class="overflow-x-auto">
                    <table class="w-full text-left text-xs text-gray-300 border-collapse bg-white/5 rounded-lg overflow-hidden border border-white/20">
                        <thead>
                            <tr class="bg-white/10 text-white uppercase tracking-wider text-xs">
                                <th class="p-3 border border-white/20 w-1/3">Field</th>
                                <th class="p-3 border border-white/20">Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Test Case ID</td><td class="p-3 border border-white/20">TC011</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Test Case Name</td><td class="p-3 border border-white/20">Reset Scenario to Original Data</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Module/Feature</td><td class="p-3 border border-white/20">Scenario Simulator</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Preconditions</td><td class="p-3 border border-white/20 text-gray-400">Scenario values have been modified.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Test Steps</td><td class="p-3 border border-white/20 text-gray-400">1. Modify selected segment values.<br/>2. Click Reset to Actual Data.<br/>3. Observe restored values.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Test Data</td><td class="p-3 border border-white/20 text-gray-400 italic">Modified scenario block.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Expected Result</td><td class="p-3 border border-white/20 text-blue-300/80">Segment values revert to original data.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Actual Result</td><td class="p-3 border border-white/20 text-gray-400">Original values were restored successfully.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Status</td><td class="p-3 border border-white/20"><span class="px-2 py-0.5 rounded text-[10px] font-bold bg-green-500/20 text-green-400 border border-green-500/20">PASS</span></td></tr>
                        </tbody>
                    </table>
                </div>

                <!-- Test Case 12 -->
                <div class="overflow-x-auto">
                    <table class="w-full text-left text-xs text-gray-300 border-collapse bg-white/5 rounded-lg overflow-hidden border border-white/20">
                        <thead>
                            <tr class="bg-white/10 text-white uppercase tracking-wider text-xs">
                                <th class="p-3 border border-white/20 w-1/3">Field</th>
                                <th class="p-3 border border-white/20">Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Test Case ID</td><td class="p-3 border border-white/20">TC012</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Test Case Name</td><td class="p-3 border border-white/20">Priority Engine Ranks Segments in Selected Ward</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Module/Feature</td><td class="p-3 border border-white/20">Priority Intervention Engine</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Preconditions</td><td class="p-3 border border-white/20 text-gray-400">Ward selection is available and blocks contain ward values.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Test Steps</td><td class="p-3 border border-white/20 text-gray-400">1. Select a ward.<br/>2. Run Priority Engine.<br/>3. Observe ranked segment list.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Test Data</td><td class="p-3 border border-white/20 text-gray-400 italic">Segments belonging to one ward.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Expected Result</td><td class="p-3 border border-white/20 text-blue-300/80">Segments are ranked from highest to lowest priority.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Actual Result</td><td class="p-3 border border-white/20 text-gray-400">Priority ranking was generated correctly.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Status</td><td class="p-3 border border-white/20"><span class="px-2 py-0.5 rounded text-[10px] font-bold bg-green-500/20 text-green-400 border border-green-500/20">PASS</span></td></tr>
                        </tbody>
                    </table>
                </div>

                <!-- Test Case 13 -->
                <div class="overflow-x-auto">
                    <table class="w-full text-left text-xs text-gray-300 border-collapse bg-white/5 rounded-lg overflow-hidden border border-white/20">
                        <thead>
                            <tr class="bg-white/10 text-white uppercase tracking-wider text-xs">
                                <th class="p-3 border border-white/20 w-1/3">Field</th>
                                <th class="p-3 border border-white/20">Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Test Case ID</td><td class="p-3 border border-white/20">TC013</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Test Case Name</td><td class="p-3 border border-white/20">Click Ranked Segment and Navigate to Map Block</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Module/Feature</td><td class="p-3 border border-white/20">Priority Intervention Engine / Map Interaction</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Preconditions</td><td class="p-3 border border-white/20 text-gray-400">Priority results are displayed.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Test Steps</td><td class="p-3 border border-white/20 text-gray-400">1. Run Priority Engine.<br/>2. Click any ranked segment.<br/>3. Observe map focus.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Test Data</td><td class="p-3 border border-white/20 text-gray-400 italic">Ranked segment entry linked to map block.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Expected Result</td><td class="p-3 border border-white/20 text-blue-300/80">Map focuses on the selected segment/block.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Actual Result</td><td class="p-3 border border-white/20 text-gray-400">Map navigated to the selected block successfully.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Status</td><td class="p-3 border border-white/20"><span class="px-2 py-0.5 rounded text-[10px] font-bold bg-green-500/20 text-green-400 border border-green-500/20">PASS</span></td></tr>
                        </tbody>
                    </table>
                </div>

                <!-- Test Case 14 -->
                <div class="overflow-x-auto">
                    <table class="w-full text-left text-xs text-gray-300 border-collapse bg-white/5 rounded-lg overflow-hidden border border-white/20">
                        <thead>
                            <tr class="bg-white/10 text-white uppercase tracking-wider text-xs">
                                <th class="p-3 border border-white/20 w-1/3">Field</th>
                                <th class="p-3 border border-white/20">Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Test Case ID</td><td class="p-3 border border-white/20">TC014</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Test Case Name</td><td class="p-3 border border-white/20">Model Comparison Dashboard Loads Correctly</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Module/Feature</td><td class="p-3 border border-white/20">Model Comparison Dashboard</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Preconditions</td><td class="p-3 border border-white/20 text-gray-400">Both rule-based and ML outputs are available.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Test Steps</td><td class="p-3 border border-white/20 text-gray-400">1. Open Model Comparison tab.<br/>2. Observe total blocks, agreement, disagreement, and matrix.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Test Data</td><td class="p-3 border border-white/20 text-gray-400 italic">Dataset with rule and ML outputs.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Expected Result</td><td class="p-3 border border-white/20 text-blue-300/80">Comparison metrics and matrix are displayed correctly.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Actual Result</td><td class="p-3 border border-white/20 text-gray-400">Model comparison dashboard loaded correctly.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Status</td><td class="p-3 border border-white/20"><span class="px-2 py-0.5 rounded text-[10px] font-bold bg-green-500/20 text-green-400 border border-green-500/20">PASS</span></td></tr>
                        </tbody>
                    </table>
                </div>

                <!-- Test Case 15 -->
                <div class="overflow-x-auto">
                    <table class="w-full text-left text-xs text-gray-300 border-collapse bg-white/5 rounded-lg overflow-hidden border border-white/20">
                        <thead>
                            <tr class="bg-white/10 text-white uppercase tracking-wider text-xs">
                                <th class="p-3 border border-white/20 w-1/3">Field</th>
                                <th class="p-3 border border-white/20">Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Test Case ID</td><td class="p-3 border border-white/20">TC015</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Test Case Name</td><td class="p-3 border border-white/20">Export Scenario PDF Report</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Module/Feature</td><td class="p-3 border border-white/20">PDF Export</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Preconditions</td><td class="p-3 border border-white/20 text-gray-400">A segment is selected and scenario is active.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Test Steps</td><td class="p-3 border border-white/20 text-gray-400">1. Select a segment.<br/>2. Modify scenario values.<br/>3. Click Export Before vs After PDF.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Test Data</td><td class="p-3 border border-white/20 text-gray-400 italic">Original block data and modified scenario data.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Expected Result</td><td class="p-3 border border-white/20 text-blue-300/80">PDF report is generated with before/after comparison.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Actual Result</td><td class="p-3 border border-white/20 text-gray-400">PDF was generated successfully with correct details.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Status</td><td class="p-3 border border-white/20"><span class="px-2 py-0.5 rounded text-[10px] font-bold bg-green-500/20 text-green-400 border border-green-500/20">PASS</span></td></tr>
                        </tbody>
                    </table>
                </div>

                <!-- Test Case 16 -->
                <div class="overflow-x-auto">
                    <table class="w-full text-left text-xs text-gray-300 border-collapse bg-white/5 rounded-lg overflow-hidden border border-white/20">
                        <thead>
                            <tr class="bg-white/10 text-white uppercase tracking-wider text-xs">
                                <th class="p-3 border border-white/20 w-1/3">Field</th>
                                <th class="p-3 border border-white/20">Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Test Case ID</td><td class="p-3 border border-white/20">TC016</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Test Case Name</td><td class="p-3 border border-white/20">Switch Between Rule-Based and ML View</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Module/Feature</td><td class="p-3 border border-white/20">View Mode Toggle</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Preconditions</td><td class="p-3 border border-white/20 text-gray-400">Dashboard is loaded with both rule-based and ML data.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Test Steps</td><td class="p-3 border border-white/20 text-gray-400">1. Click on “Rule-Based” view.<br/>2. Observe map colors and data.<br/>3. Switch to “ML-Based” view.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Test Data</td><td class="p-3 border border-white/20 text-gray-400 italic">Segments with both rule and ML outputs.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Expected Result</td><td class="p-3 border border-white/20 text-blue-300/80">Risk levels update dynamically based on selected mode.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Actual Result</td><td class="p-3 border border-white/20 text-gray-400">View switched correctly and values updated.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Status</td><td class="p-3 border border-white/20"><span class="px-2 py-0.5 rounded text-[10px] font-bold bg-green-500/20 text-green-400 border border-green-500/20">PASS</span></td></tr>
                        </tbody>
                    </table>
                </div>

                <!-- Test Case 17 -->
                <div class="overflow-x-auto">
                    <table class="w-full text-left text-xs text-gray-300 border-collapse bg-white/5 rounded-lg overflow-hidden border border-white/20">
                        <thead>
                            <tr class="bg-white/10 text-white uppercase tracking-wider text-xs">
                                <th class="p-3 border border-white/20 w-1/3">Field</th>
                                <th class="p-3 border border-white/20">Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Test Case ID</td><td class="p-3 border border-white/20">TC017</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Test Case Name</td><td class="p-3 border border-white/20">Ward Selection Dropdown Functionality</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Module/Feature</td><td class="p-3 border border-white/20">Priority Engine – Ward Selector</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Preconditions</td><td class="p-3 border border-white/20 text-gray-400">Blocks contain ward values.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Test Steps</td><td class="p-3 border border-white/20 text-gray-400">1. Open ward dropdown.<br/>2. Select different wards one by one.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Test Data</td><td class="p-3 border border-white/20 text-gray-400 italic">Multiple wards (Ward-1, Ward-2, Ward-3).</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Expected Result</td><td class="p-3 border border-white/20 text-blue-300/80">Selected ward updates correctly and is ready for processing.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Actual Result</td><td class="p-3 border border-white/20 text-gray-400">Ward selection worked correctly.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Status</td><td class="p-3 border border-white/20"><span class="px-2 py-0.5 rounded text-[10px] font-bold bg-green-500/20 text-green-400 border border-green-500/20">PASS</span></td></tr>
                        </tbody>
                    </table>
                </div>

                <!-- Test Case 18 -->
                <div class="overflow-x-auto">
                    <table class="w-full text-left text-xs text-gray-300 border-collapse bg-white/5 rounded-lg overflow-hidden border border-white/20">
                        <thead>
                            <tr class="bg-white/10 text-white uppercase tracking-wider text-xs">
                                <th class="p-3 border border-white/20 w-1/3">Field</th>
                                <th class="p-3 border border-white/20">Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Test Case ID</td><td class="p-3 border border-white/20">TC018</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Test Case Name</td><td class="p-3 border border-white/20">Handle Empty Ward Selection</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Module/Feature</td><td class="p-3 border border-white/20">Priority Intervention Engine</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Preconditions</td><td class="p-3 border border-white/20 text-gray-400">No ward selected.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Test Steps</td><td class="p-3 border border-white/20 text-gray-400">1. Do not select any ward.<br/>2. Click “Run Priority Engine”.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Test Data</td><td class="p-3 border border-white/20 text-gray-400 italic">No ward selected.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Expected Result</td><td class="p-3 border border-white/20 text-blue-300/80">System prevents execution and shows appropriate message or disables button.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Actual Result</td><td class="p-3 border border-white/20 text-gray-400">Button disabled / no execution occurred.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Status</td><td class="p-3 border border-white/20"><span class="px-2 py-0.5 rounded text-[10px] font-bold bg-green-500/20 text-green-400 border border-green-500/20">PASS</span></td></tr>
                        </tbody>
                    </table>
                </div>

                <!-- Test Case 19 -->
                <div class="overflow-x-auto">
                    <table class="w-full text-left text-xs text-gray-300 border-collapse bg-white/5 rounded-lg overflow-hidden border border-white/20">
                        <thead>
                            <tr class="bg-white/10 text-white uppercase tracking-wider text-xs">
                                <th class="p-3 border border-white/20 w-1/3">Field</th>
                                <th class="p-3 border border-white/20">Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Test Case ID</td><td class="p-3 border border-white/20">TC019</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Test Case Name</td><td class="p-3 border border-white/20">Backend Failure Handling</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Module/Feature</td><td class="p-3 border border-white/20">API Integration</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Preconditions</td><td class="p-3 border border-white/20 text-gray-400">Backend is stopped or unreachable.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Test Steps</td><td class="p-3 border border-white/20 text-gray-400">1. Stop backend server.<br/>2. Refresh application.<br/>3. Observe system behavior.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Test Data</td><td class="p-3 border border-white/20 text-gray-400 italic">No backend response.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Expected Result</td><td class="p-3 border border-white/20 text-blue-300/80">Error message shown (e.g., “Failed to reach backend”).</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Actual Result</td><td class="p-3 border border-white/20 text-gray-400">Error message displayed correctly.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Status</td><td class="p-3 border border-white/20"><span class="px-2 py-0.5 rounded text-[10px] font-bold bg-green-500/20 text-green-400 border border-green-500/20">PASS</span></td></tr>
                        </tbody>
                    </table>
                </div>

                <!-- Test Case 20 -->
                <div class="overflow-x-auto">
                    <table class="w-full text-left text-xs text-gray-300 border-collapse bg-white/5 rounded-lg overflow-hidden border border-white/20">
                        <thead>
                            <tr class="bg-white/10 text-white uppercase tracking-wider text-xs">
                                <th class="p-3 border border-white/20 w-1/3">Field</th>
                                <th class="p-3 border border-white/20">Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Test Case ID</td><td class="p-3 border border-white/20">TC020</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Test Case Name</td><td class="p-3 border border-white/20">Feature Importance Display</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Module/Feature</td><td class="p-3 border border-white/20">Model Insights</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Preconditions</td><td class="p-3 border border-white/20 text-gray-400">ML model with feature importance is loaded.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Test Steps</td><td class="p-3 border border-white/20 text-gray-400">1. Open Model Insights tab.<br/>2. Observe feature importance bars.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Test Data</td><td class="p-3 border border-white/20 text-gray-400 italic">Feature importance values from backend.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Expected Result</td><td class="p-3 border border-white/20 text-blue-300/80">Features displayed with correct importance percentages.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Actual Result</td><td class="p-3 border border-white/20 text-gray-400">Feature importance visualized correctly.</td></tr>
                            <tr><td class="p-3 border border-white/20 font-bold text-white bg-white/5">Status</td><td class="p-3 border border-white/20"><span class="px-2 py-0.5 rounded text-[10px] font-bold bg-green-500/20 text-green-400 border border-green-500/20">PASS</span></td></tr>
                        </tbody>
                    </table>
                </div>
            </div>


            <h4 class="text-xl font-bold text-white mt-10 mb-3">Reflection</h4>
            <p>This week reinforced the importance of testing in building reliable systems. Performing integration testing was particularly valuable, as it ensured that the frontend, backend, and machine learning model work seamlessly together. Overall, this phase has greatly improved the robustness of the system.</p>
        `
    },
    {
        id: 8,
        week: 8,
        title: "Implementation Challenges, Technologies, APIs, and Troubleshooting",
        date: "Mar 13, 2026",
        excerpt: "Exploring the AURaMP technical stack, API integrations, and systematic troubleshooting of full-stack implementation challenges.",
        content: `
            <div class="mb-8 overflow-hidden rounded-2xl border border-white/10 shadow-2xl max-w-2xl mx-auto">
                <img 
                    src="/images/week8-project.png" 
                    alt="Implementation and Troubleshooting" 
                    class="w-full h-auto object-cover"
                />
            </div>

            <h4 class="text-xl font-bold text-white mt-6 mb-3">Overview</h4>
            <p>This week focused on the implementation phase of the ARiS system, particularly the challenges faced during coding, the technologies used, and the process of troubleshooting issues. Ensuring smooth interaction between the frontend, backend, and machine learning layers presented several practical challenges.</p>

            <h4 class="text-xl font-bold text-white mt-8 mb-4">Programming Languages Used</h4>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div class="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h5 class="text-blue-400 font-bold mb-1">Python</h5>
                    <p class="text-sm text-gray-400">Used for FastAPI backend development, data processing, and ML model implementation.</p>
                </div>
                <div class="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h5 class="text-yellow-400 font-bold mb-1">JavaScript</h5>
                    <p class="text-sm text-gray-400">Powering the React frontend, interactive map visualization, and filtering logic.</p>
                </div>
                <div class="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h5 class="text-orange-400 font-bold mb-1">HTML & CSS</h5>
                    <p class="text-sm text-gray-400">Structuring and styling components for a clean, user-friendly interface.</p>
                </div>
            </div>

            <h4 class="text-xl font-bold text-white mt-8 mb-3">APIs Used in the Project</h4>
            <div class="space-y-6 text-gray-300">
                <div>
                    <h5 class="text-white font-semibold mb-2">FastAPI (Backend API)</h5>
                    <p class="text-sm">Used to build RESTful endpoints that handle core system operations. Key APIs include:</p>
                    <ul class="list-disc pl-5 mt-2 space-y-1 text-sm bg-white/5 p-3 rounded-lg border border-white/10">
                        <li><code class="text-blue-400">/blocks</code> – Retrieves structured road segment data</li>
                        <li><code class="text-blue-400">/predict-ml</code> – Generates machine learning-based risk predictions along with confidence scores</li>
                        <li><code class="text-blue-400">/model/feature-importance</code> – Provides explainability by showing feature influence</li>
                        <li><code class="text-blue-400">/priority-engine</code> – Computes urgency scores and ranks segments for intervention</li>
                    </ul>
                </div>

                <div>
                    <h5 class="text-white font-semibold mb-1">Leaflet (Mapping Integration)</h5>
                    <p class="text-sm">Used to display road segments and accessibility risk levels on an interactive map interface, enabling geographic visualization and user interaction.</p>
                </div>

                <div>
                    <h5 class="text-white font-semibold mb-1">Internal ML Processing</h5>
                    <p class="text-sm">Handles preprocessing, feature encoding, and prediction using the trained machine learning model.</p>
                </div>

                <div>
                    <h5 class="text-white font-semibold mb-1">Accessibility Risk Prediction for New Areas</h5>
                    <p class="text-sm">Allows the system to generate risk predictions for new or user-defined inputs that are not already present in the dataset, demonstrating generalisation to unseen scenarios.</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="p-4 rounded-xl bg-white/5 border border-white/10">
                        <h6 class="text-white font-bold mb-1 text-sm">Scenario Simulation</h6>
                        <p class="text-xs text-gray-400">Processes user-modified infrastructure attributes and returns updated predictions and compliance results in real time.</p>
                    </div>
                    <div class="p-4 rounded-xl bg-white/5 border border-white/10">
                        <h6 class="text-white font-bold mb-1 text-sm">Confidence & Uncertainty Layer</h6>
                        <p class="text-xs text-gray-400">Returns confidence scores alongside predictions, helping users assess output reliability.</p>
                    </div>
                    <div class="p-4 rounded-xl bg-white/5 border border-white/10">
                        <h6 class="text-white font-bold mb-1 text-sm">Priority Intervention Engine</h6>
                        <p class="text-xs text-gray-400">Calculates urgency scores and ranks segments to support intervention planning.</p>
                    </div>
                    <div class="p-4 rounded-xl bg-white/5 border border-white/10">
                        <h6 class="text-white font-bold mb-1 text-sm">City Planning Dashboard (Budget Optimizer)</h6>
                        <p class="text-xs text-gray-400">Supports budget-based planning by selecting high-impact segments within a limited budget.</p>
                    </div>
                </div>
            </div>

            <h4 class="text-xl font-bold text-white mt-8 mb-3">Dataset Description</h4>
            <p>The dataset represents urban road segments with attributes like sidewalk width, slope percentage, curb ramps, traffic levels, lighting and surface conditions. This structured data is used to train the ML model and simulate real-world conditions for predictive analysis.</p>

            <h4 class="text-xl font-bold text-white mt-8 mb-3">Challenges Faced During Coding</h4>
            <p>Implementation challenges included handling complex API request/response cycles between frontend and backend, resolving data consistency issues during prediction, and managing real-time updates for the scenario simulator.</p>

            <h4 class="text-xl font-bold text-white mt-8 mb-3">Troubleshooting & Resolution</h4>
            <div class="space-y-4">
                <div class="border-l-4 border-red-500/50 pl-4 py-2">
                    <h5 class="text-white font-semibold">Issue: Inconsistent Prediction Output</h5>
                    <p class="text-sm text-gray-400">Caused by feature mismatch between training data and input data. Resolved by ensuring consistent feature encoding and order.</p>
                </div>
                <div class="border-l-4 border-blue-500/50 pl-4 py-2">
                    <h5 class="text-white font-semibold">Issue: Scenario Simulator Real-time Lag</h5>
                    <p class="text-sm text-gray-400">Caused by improper event handling. Resolved by fixing API request triggers on input change.</p>
                </div>
            </div>

            <h4 class="text-xl font-bold text-white mt-10 mb-3">Reflection</h4>
            <p>This week highlighted the practical challenges of building a full-stack, data-driven system. The troubleshooting process improved my problem-solving skills and reinforced the importance of systematic debugging. Overcoming these integration hurdles has made the system more stable and reliable.</p>
        `
    },
    {
        id: 6,
        week: 6,
        title: "Prototype Evaluation and Software Requirements Specification",
        date: "Feb 27, 2026",
        excerpt: "Evaluating the initial AURaMP prototype for usability and functionality, and documenting core software requirements and Agile methodology.",
        content: `
            <div class="mb-8 overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <img 
                    src="/images/week6-project.png" 
                    alt="Prototype Evaluation and Requirements" 
                    class="w-full h-auto object-cover"
                />
            </div>

            <h4 class="text-xl font-bold text-white mt-6 mb-3">Prototype Evaluation</h4>
            <p>This week focused on evaluating the initial prototype of the AURaMP system to assess its usability, functionality, and overall performance. While the prototype successfully demonstrated the core idea of accessibility risk prediction, it was important to analyze how effectively the system performs from a user’s perspective.</p>
            
            <h5 class="text-white font-semibold mt-4 mb-2">Evaluation Process</h5>
            <p>The evaluation began with testing the prototype by simulating user interactions. The goal was to observe how easily a user can navigate the system, interpret the outputs, and interact with different features such as map visualization, risk filtering, and segment selection.</p>

            <h5 class="text-white font-semibold mt-4 mb-2">User Testing and Feedback</h5>
            <p>Basic user testing was conducted by interacting with the system as an end user. The evaluation focused on ease of navigation, clarity of risk levels, system responsiveness, and accuracy of displayed information. Key observations included:</p>
            <ul class="list-disc pl-5 mt-2 space-y-2 text-gray-300">
                <li>The map-based visualization made it easy to understand accessibility conditions at a glance.</li>
                <li>Risk classification into low, medium, and high categories improved interpretability.</li>
                <li>Certain interactions such as filtering and switching between views required clearer feedback.</li>
                <li>Some outputs needed better explanation to improve user understanding.</li>
            </ul>

            <h5 class="text-white font-semibold mt-4 mb-2">Identified Improvements</h5>
            <p>Based on the evaluation, several improvements were identified: enhancing the clarity of UI elements, improving labeling and visual indicators, refining backend-frontend integration, and ensuring smoother interaction when modifying segments.</p>

            <h4 class="text-xl font-bold text-white mt-6 mb-3">Use Case Diagram</h4>
            <div class="mb-8 overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <img 
                    src="/images/USE CASE.png" 
                    alt="Use Case Diagram" 
                    class="w-full h-auto object-cover bg-white/5"
                />
            </div>
            <p>The interaction between the ARiS system and the Urban Planner/User is depicted in the use case diagram. The user can view the dashboard and accessibility map, select road segments, and analyse risk, compliance, and AI-based explanations. Filtering segments and switching view mode (rule-based and ML-based) support better data exploration.</p>
            <p>Key features include the Scenario Simulator for modifying segment attributes and comparing results, and the Priority Intervention Engine for ranking segments based on urgency. The system also includes a City Planning Dashboard (Budget Optimizer) for resource allocation. Additionally, users can predict accessibility risk for new areas, compare model outputs, and export PDF reports. The &lt;&lt;include&gt;&gt; relationships indicate dependencies between functions, ensuring a structured workflow.</p>

            <h4 class="text-xl font-bold text-white mt-6 mb-3">Activity Diagram</h4>
            <div class="mb-8 overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <img 
                    src="/images/activity.png" 
                    alt="Activity Diagram" 
                    class="w-full h-auto object-cover bg-white/5"
                />
            </div>
            <p>The activity diagram represents the overall workflow of the ARiS System, beginning with loading road segment data and displaying the dashboard and accessibility map. The user then selects an analysis type such as Segment Analysis, Scenario Simulation, Priority Intervention engine, Budget optimization, or New Area Prediction. The system processes inputs based on the selection, performs ML prediction and compliance evaluation where required, and displays the results. Lastly, a PDF report export option is available to the user.</p>

            <h4 class="text-xl font-bold text-white mt-6 mb-3">Software Requirements Specification</h4>
            <p>This week also involved documenting the software requirements and research methodology in a structured manner to ensure alignment between development and project objectives.</p>

            <div class="space-y-6 mt-4">
                <div>
                    <h5 class="text-white font-semibold mb-2">3.1 Software Methodology</h5>
                    <p class="text-gray-300">The AURaMP system follows an Agile software development methodology. This iterative approach allows the system to be developed in stages with continuous testing and improvement across data processing, machine learning, and visualization modules.</p>
                </div>
                <div>
                    <h5 class="text-white font-semibold mb-2">3.2 Functional Requirements</h5>
                    <ul class="list-disc pl-5 space-y-1 text-gray-300">
                        <li>Analyze urban infrastructure features (width, slope, lighting, etc.).</li>
                        <li>Predict accessibility risk levels using machine learning.</li>
                        <li>Display results through an interactive map interface.</li>
                        <li>Support scenario simulation and priority ranking generation.</li>
                    </ul>
                </div>
                <div>
                    <h5 class="text-white font-semibold mb-2">3.3 User Requirements</h5>
                    <p class="text-gray-300">The primary users are urban planners and researchers who require clear visualization of accessibility conditions, identification of high-risk segments, and support for decision-making through simulation features.</p>
                </div>
                <div>
                    <h5 class="text-white font-semibold mb-2">3.4 Test Plans</h5>
                    <p class="text-gray-300">A structured testing approach including functional, integration, usability, and scenario-based testing was established to validate risk prediction, filtering, and priority ranking functionalities.</p>
                </div>
            </div>

            <h4 class="text-xl font-bold text-white mt-10 mb-6 border-b border-white/10 pb-2">4. Design Chapter</h4>
            
            <h5 class="text-white font-semibold mt-6 mb-3">4.1 Wireframes</h5>
            <div class="mb-8 overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <img 
                    src="/images/week6-wireframe.png" 
                    alt="System Wireframes" 
                    class="w-full h-auto object-cover"
                />
            </div>
            <p>The initial design of the AURaMP system was planned using wireframes to define the layout and user interface structure before development. The main elements included a system status header, a sidebar for filters and controls, a central map area for risk visualization, and a detail panel for segment information.</p>
            <p>The wireframe design emphasized simplicity and usability, ensuring that users can easily navigate the system and interpret the results without requiring technical expertise.</p>

            <h5 class="text-white font-semibold mt-8 mb-3">4.2 Prototypes</h5>
            <p>Based on the wireframe design, an initial working prototype was developed using React and FastAPI. The prototype evolved through multiple stages:</p>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div class="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h6 class="text-white font-bold mb-1">Initial Prototype</h6>
                    <p class="text-sm text-gray-400">Basic map visualization and rule-based risk classification.</p>
                </div>
                <div class="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h6 class="text-white font-bold mb-1">Enhanced Prototype</h6>
                    <p class="text-sm text-gray-400">Integration of ML-based predictions and improved UI structure.</p>
                </div>
                <div class="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h6 class="text-white font-bold mb-1">Refined Prototype</h6>
                    <p class="text-sm text-gray-400">Advanced filtering, view switching, and smoother interactions.</p>
                </div>
            </div>

            <h5 class="text-white font-semibold mt-8 mb-3">4.3 Prototype Evaluation</h5>
            <p>The evaluation process involved testing system functionality and gathering feedback to identify areas for improvement. Key feedback points included:</p>
            <ul class="list-disc pl-5 mt-2 space-y-2 text-gray-300">
                <li>Need for clearer interaction cues for filters and toggles.</li>
                <li>Improvement in visual distinction between risk levels.</li>
                <li>Better alignment between backend data and frontend representation.</li>
            </ul>
            <p class="mt-4 text-gray-300 italic">Based on this feedback, modifications were implemented to result in a more responsive, intuitive, and user-friendly interface.</p>

            <h4 class="text-xl font-bold text-white mt-10 mb-3">Reflection</h4>
            <p>This week played a crucial role in strengthening both the technical and documentation aspects of the project. Evaluating the prototype helped identify practical usability issues, while documenting requirements provided a clearer understanding of system expectations. This phase has helped transition the project from initial development to a more refined and well-defined system.</p>
        `
    },
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
            <p>The project, titled “ARiS – AI-Driven Urban Accessibility Risk Mapping & Prediction System,” involves several interconnected components including data preparation, machine learning modeling, web application development, and visualization. To organize these tasks efficiently, I developed a Work Breakdown Structure (WBS) and a Gantt chart. These tools help identify the sequence of activities, dependencies between tasks, and expected timelines for each phase of the project.</p>

            <h4 class="text-xl font-bold text-white mt-6 mb-3">Work Breakdown Structure (WBS)</h4>
            <div class="mb-8 overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <img 
                    src="/images/WBS.jpg" 
                    alt="Work Breakdown Structure" 
                    class="w-full h-auto object-cover bg-white/5"
                />
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
            <p>This week, I focused on understanding the existing research and frameworks related to urban accessibility, inclusive design, and smart city analytics. Accessibility in urban planning is typically guided by established standards such as universal design principles and government accessibility guidelines. These standards define requirements for features such as minimum sidewalk width, slope limits, curb ramp design, surface quality, and pedestrian lighting, while additional contextual factors such as traffic levels also influence overall accessibility conditions.</p>
            <p>Many existing studies evaluate accessibility through audits, surveys, or GIS-based map analysis. Geographic Information Systems (GIS) are commonly used to map infrastructure conditions and visualize accessibility levels. However, most systems rely on static mapping or manual evaluation rather than predictive modeling.</p>
            <p>In recent years, machine learning has been widely applied in urban analytics, including traffic prediction, infrastructure monitoring, and smart mobility systems. However, its application specifically for predicting accessibility risk at a micro (street/block) level appears limited. Most research focuses either on high-level policy analysis or purely technical infrastructure assessment without integrating predictive risk modeling.</p>
            <p>From reviewing this literature, it became clear that while accessibility standards exist and map-based tools are available, there is limited work that combines rule-based compliance assessment with machine learning-based risk prediction in a single, interactive system.</p>

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
            <p>This week, I worked on clearly defining and refining my final-year project topic. The project is titled “ARiS – AI-Driven Urban Accessibility Risk Mapping & Prediction Intelligence System.” The focus of this project is to develop a smart, data-driven system that can analyze urban infrastructure and predict accessibility risks at a street or block level.</p>
            <p>The idea is to study common urban features such as sidewalk width, slope, curb ramps, lighting conditions, surface quality, and traffic levels, and use them to estimate how accessible a particular area is. Instead of looking at accessibility as a simple yes-or-no condition, the system will classify areas into different risk levels (low, medium, or high). This makes the results more practical and useful for prioritizing improvements.</p>

            <h4 class="text-xl font-bold text-white mt-6 mb-3">Aim of the Project</h4>
            <p>The main aim of this project is to build an intelligent system that can evaluate urban areas and predict accessibility risk using machine learning techniques.</p>
            <p>I want the system to move beyond reactive reporting, where issues are addressed only after complaints are made. Instead, the goal is to proactively highlight areas that are likely to pose challenges for elderly individuals and people with disabilities.</p>
            <p>Ultimately, the system is intended to act as a decision-support tool that can assist planners, researchers, or policymakers in identifying which areas require urgent accessibility improvements.</p>

            <h4 class="text-xl font-bold text-white mt-6 mb-3">Objectives of the Project</h4>
            <p>To achieve this aim, I have defined the following objectives:</p>
            <ul class="list-disc pl-5 mt-2 space-y-2 text-gray-300">
                <li>Identify and select key urban features that influence accessibility, such as sidewalk width, slope, curb ramps, traffic, lighting, and surface conditions.</li>
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
            <p>For my final-year project, I have chosen to work on a Smart Urban Accessibility Risk Mapping System. The core idea of this project is to use data and machine learning techniques to identify and predict accessibility risks in urban areas at a street or block level. The system focuses on challenges faced by elderly individuals and people with disabilities, such as narrow or damaged sidewalks, missing curb ramps, steep slopes, unsafe crossings, poor lighting, and uneven surface conditions. Instead of relying on reported issues, this project aims to proactively identify high-risk areas using a data-driven approach..</p>

            <h4 class="text-xl font-bold text-white mt-6 mb-3">Rationale for Choosing This Project</h4>
            <p>I chose this project because urban accessibility is a real-world, socially relevant problem, especially in a rapidly urbanizing country like India. While accessibility guidelines and policies exist, their implementation and monitoring are often manual, time-consuming, and reactive. Many people face accessibility barriers daily, but these issues are not always visible in planning processes until complaints arise. As a computer engineering student, I wanted to apply technical skills such as data analysis, machine learning, and software design to address a problem that has meaningful social impact. This project allows me to combine technology with inclusive design and contribute to smarter and more equitable urban planning solutions.</p>


            <h4 class="text-xl font-bold text-white mt-6 mb-3">Project Details and Approach</h4>
            <p>The project aims to analyze urban data—such as sidewalk characteristics, road features, slope, traffic levels, lighting conditions, and surface conditions—using open data sources. These features will be processed and used to train a machine learning model that predicts an accessibility risk score for each street or block. The output will be visualized through a map-based interface that highlights low-, medium-, and high-risk areas, making the results easy to interpret and actionable.</p>
            <p>Rather than treating accessibility as a simple yes-or-no condition, this project models it as a risk spectrum, which can help prioritize areas that require urgent attention. The approach combines rule-based accessibility standards with supervised machine learning to ensure both interpretability and predictive capability.</p>

            <h4 class="text-xl font-bold text-white mt-6 mb-3">Initial Thoughts and Reflections</h4>
            <p>At the start of this project, my main motivation was to work on something that goes beyond a purely technical exercise and addresses a tangible societal issue. While the problem space is complex, breaking it down into data features, risk modeling, and visualization has helped clarify the implementation path. One of the initial challenges I anticipate is dealing with incomplete or inconsistent urban data; however, this also makes the project more realistic and aligned with real-world engineering problems.</p>
            <p>Overall, I believe this project provides a strong foundation for learning and experimentation, while also offering potential value for future research and practical applications in smart city planning. This first phase has helped me clearly define the scope, objectives, and direction of my work, and I am excited to begin the development and analysis stages in the coming weeks.</p>
        `
    }
];
