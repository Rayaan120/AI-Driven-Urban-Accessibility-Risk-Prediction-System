import React from 'react';
import { CheckCircle2, Circle } from 'lucide-react';

const MeetingLog = () => {
    return (
        <div className="glass-card rounded-2xl overflow-hidden">
            <div className="p-6 border-b border-white/10">
                <h2 className="text-2xl font-display font-bold">Supervisor Meetings</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                    <thead className="bg-white/5 text-gray-400 font-medium">
                        <tr>
                            <th className="px-6 py-4">Date</th>
                            <th className="px-6 py-4">Agenda</th>
                            <th className="px-6 py-4">Discussion Points</th>
                            <th className="px-6 py-4">Action Items</th>
                            <th className="px-6 py-4">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {[1, 2].map((item) => (
                            <tr key={item} className="hover:bg-white/5 transition-colors">
                                <td className="px-6 py-4 whitespace-nowrap text-gray-300">Feb {10 + item}, 2026</td>
                                <td className="px-6 py-4 font-medium text-white">Project Proposal Review</td>
                                <td className="px-6 py-4 text-gray-400 max-w-xs">
                                    Discussed the scope of the web application and initial tech stack choices.
                                    Supervisor suggested looking into accessibility standards.
                                </td>
                                <td className="px-6 py-4 text-gray-400">
                                    <ul className="list-disc list-inside space-y-1">
                                        <li>Create project timeline</li>
                                        <li>Research UI libraries</li>
                                    </ul>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20 text-xs font-medium">
                                        <CheckCircle2 size={12} /> Completed
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
