import React from 'react';
import { CheckCircle2, Circle } from 'lucide-react';

const meetings = [
    {
        id: 1,
        date: 'Jan 22, 2026',
        supervisor: 'Mr. Roshan Renji',
        agenda: 'Initial Project Discussion',
        summary: 'Presented proposed project idea: Smart Urban Accessibility Risk Mapping System using machine learning. Discussed scope, feasibility, and measurable features (sidewalk width, slope, curb ramps, lighting).',
        actionItems: [
            'Refine the project topic and finalize objectives.',
            'Begin preliminary literature review.',
            'Draft a clearer project scope for the next meeting.'
        ],
        status: 'Completed'
    },
    {
        id: 2,
        date: 'Jan 29, 2026',
        supervisor: 'Dr. Roshan Renji',
        agenda: 'Refined Topic & Architecture Discussion',
        summary: 'Presented the refined project topic, aim, and objectives. Explained the hybrid approach combining rule-based scoring with ML risk prediction. Discussed potential architecture (backend processing, frontend map UI). Supervisor advised justifying the use of ML and defining evaluation criteria.',
        actionItems: [
            'Conduct deeper literature review.',
            'Identify research gaps and formulate research questions.',
            'Start designing dataset structure and feature list.'
        ],
        status: 'Completed'
    },
    {
        id: 3,
        date: 'Feb 05, 2026',
        supervisor: 'Dr. Roshan Renji',
        agenda: 'Literature Review & Research Gaps',
        summary: 'Presented literature review findings, research gaps, and proposed research questions. Emphasized integration of predictive modeling with rule-based standards over static GIS/manual audits. Discussed validation strategies and demonstratable impact.',
        actionItems: [
            'Begin model prototyping.',
            'Implement baseline rule-based scoring.',
            'Continue system architecture development.'
        ],
        status: 'Completed'
    },
    {
        id: 4,
        date: 'Feb 12, 2026',
        supervisor: 'Dr. Roshan Renji',
        agenda: 'Project Planning, Methodology & Prototyping',
        summary: 'Presented project planning including WBS and Gantt chart. Selected Agile methodology for its iterative flexibility. Discussed initial prototype development focusing on core functionality. Supervisor recommended prioritizing integration of ML model, API, and map UI.',
        actionItems: [
            'Continue developing the system prototype.',
            'Integrate the machine learning model with the backend.',
            'Improve the map visualization interface.',
            'Conduct initial testing of the prototype.'
        ],
        status: 'Completed'
    },
    {
        id: 5,
        date: 'Feb 19, 2026',
        supervisor: 'Dr. Roshan Renji',
        agenda: 'Methodology Analysis & Prototype Refinement',
        summary: 'Presented analysis of software methodologies (Waterfall, Agile, Scrum, Spiral) and confirmed the selection of Agile. Discussed the stable MVP development process for AURaMP. Supervisor suggested focusing on module testing and documented refinement.',
        actionItems: [
            'Continue development of the system prototype.',
            'Improve integration between machine learning model and backend API.',
            'Refine the interactive map visualization.',
            'Conduct functional testing of the prototype.'
        ],
        status: 'Completed'
    },
    {
        id: 6,
        date: 'Feb 26, 2026',
        supervisor: 'Dr. Roshan Renji',
        agenda: 'Prototype Evaluation & Design Discussion',
        summary: 'Presented the working prototype including map visualization and risk prediction. Discussed usability aspects, clarity of outputs, and initial user testing observations. Supervisor reviewed interface structure and suggested improving user interaction clarity.',
        actionItems: [
            'Refine UI elements for better usability.',
            'Improve clarity of risk visualization and labels.',
            'Document design structure (wireframes & prototype evolution).',
            'Conduct further usability testing.'
        ],
        status: 'Completed'
    },
    {
        id: 7,
        date: 'Mar 05, 2026',
        supervisor: 'Dr. Roshan Renji',
        agenda: 'ML Model Enhancement & Advanced Features',
        summary: 'Presented progress on ML improvements including prediction accuracy and feature handling. Discussed explainability (XAI) and priority intervention logic. Supervisor emphasized linking ML outputs to real-world usability.',
        actionItems: [
            'Improve model evaluation and consistency.',
            'Strengthen explanation layer (feature importance clarity).',
            'Finalize priority ranking logic.',
            'Continue integrating ML outputs with UI.'
        ],
        status: 'Completed'
    },
    {
        id: 8,
        date: 'Mar 12, 2026',
        supervisor: 'Dr. Roshan Renji',
        agenda: 'Implementation Challenges & System Integration',
        summary: 'Discussed coding challenges including frontend-backend integration and data consistency. Explained API usage and dataset structure. Supervisor reviewed troubleshooting approaches and suggested clear documentation.',
        actionItems: [
            'Document troubleshooting cases in detail.',
            'Improve API handling and error management.',
            'Ensure consistent data flow across modules.',
            'Refine system stability and debugging process.'
        ],
        status: 'Completed'
    },
    {
        id: 9,
        date: 'Mar 19, 2026',
        supervisor: 'Dr. Roshan Renji',
        agenda: 'Software Testing & Validation',
        summary: 'Presented testing approach including unit, integration, and system testing. Demonstrated interaction between frontend and backend. Supervisor emphasized importance of structured testing documentation and linking results to objectives.',
        actionItems: [
            'Finalize test cases and documentation.',
            'Strengthen integration testing results.',
            'Add testing comparison table in report.',
            'Validate system outputs against objectives.'
        ],
        status: 'Completed'
    },
    {
        id: 10,
        date: 'Mar 26, 2026',
        supervisor: 'Dr. Roshan Renji',
        agenda: 'Results, Evaluation & Final System Review',
        summary: 'Presented final system outputs including risk prediction, scenario simulation, and priority ranking. Compared results with objectives and discussed limitations. Supervisor reviewed results and suggested strengthening the report discussion.',
        actionItems: [
            'Finalize results and evaluation section.',
            'Clearly justify achievement of objectives.',
            'Add limitations and comparison with existing work.',
            'Refine report content for clarity.'
        ],
        status: 'Completed'
    },
    {
        id: 11,
        date: 'Apr 02, 2026',
        supervisor: 'Dr. Roshan Renji',
        agenda: 'Final Review, Report & Presentation Prep',
        summary: 'Presented final version of the project, report progress, and presentation slides. Discussed future enhancements and project outcomes. Supervisor reviewed presentation flow and suggested focusing on clarity during viva.',
        actionItems: [
            'Complete final report formatting and submission.',
            'Finalize presentation slides.',
            'Practice explanation of system workflow and features.',
            'Prepare for viva questions.'
        ],
        status: 'Completed'
    }
];

const MeetingLog = () => {
    return (
        <div className="glass-card rounded-2xl overflow-hidden">
            <div className="p-6 border-b border-white/10">
                <h2 className="text-2xl font-display font-bold">Supervisor Meetings</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                    <thead className="bg-white/5 text-gray-400 font-medium whitespace-nowrap">
                        <tr>
                            <th className="px-6 py-4">Date</th>
                            <th className="px-6 py-4">Supervisor</th>
                            <th className="px-6 py-4">Agenda</th>
                            <th className="px-6 py-4">Discussion Points</th>
                            <th className="px-6 py-4">Action Items</th>
                            <th className="px-6 py-4">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {meetings.map((meeting) => (
                            <tr key={meeting.id} className="hover:bg-white/5 transition-colors">
                                <td className="px-6 py-4 whitespace-nowrap text-gray-300">{meeting.date}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-gray-300">{meeting.supervisor}</td>
                                <td className="px-6 py-4 font-medium text-white">{meeting.agenda}</td>
                                <td className="px-6 py-4 text-gray-400 max-w-xs">{meeting.summary}</td>
                                <td className="px-6 py-4 text-gray-400">
                                    <ul className="list-disc list-inside space-y-1">
                                        {meeting.actionItems.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20 text-xs font-medium">
                                        <CheckCircle2 size={12} /> {meeting.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MeetingLog;
