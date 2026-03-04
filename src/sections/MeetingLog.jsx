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
