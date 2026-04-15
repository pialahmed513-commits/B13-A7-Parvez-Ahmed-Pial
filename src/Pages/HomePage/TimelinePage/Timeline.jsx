import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Video, ChevronDown } from 'lucide-react';

const Timeline = () => {
    const [fullHistory, setFullHistory] = useState([]);
    const [activeFilter, setActiveFilter] = useState('All');

   
    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('timeline')) || [];
        setFullHistory(storedData);
    }, []);


    const displayData = activeFilter === 'All' 
        ? fullHistory 
        : fullHistory.filter(item => item.type === activeFilter);

    return (
        <div className="max-w-4xl mx-auto px-6 py-12 min-h-screen bg-white">
            
  
            <div className="mb-6">
                <h1 className="text-4xl font-bold text-[#111827]">Timeline</h1>
            </div>
            
            
            <div className="relative mb-8 inline-flex items-center gap-1">
                <select 
                    value={activeFilter}
                    onChange={(e) => setActiveFilter(e.target.value)}
                    className="appearance-none bg-transparent text-sm text-gray-400 font-bold focus:outline-none cursor-pointer pr-4"
                >
                    <option value="All">Filter timeline</option>
                    <option value="Call">Call</option>
                    <option value="Text">Text</option>
                    <option value="Video">Video</option>
                </select>
                <ChevronDown size={14} className="text-gray-400 pointer-events-none" />
            </div>

           
            <div className="space-y-3">
                {displayData.length > 0 ? (
                    displayData.map((log) => (
                        <div 
                            key={log.id} 
                            className="flex items-center gap-4 bg-white border border-gray-100 p-4 rounded-xl shadow-sm hover:bg-gray-50 transition-colors"
                        >
                     
                            <div className="w-10 h-10 flex items-center justify-center bg-gray-50 rounded-full">
                                {log.type === 'Call' && <Phone size={18} className="text-gray-600" />}
                                {log.type === 'Text' && <MessageSquare size={18} className="text-gray-600" />}
                                {log.type === 'Video' && <Video size={18} className="text-gray-600" />}
                            </div>

                       
                            <div className="flex flex-col">
                                <h3 className="text-[16px] font-bold text-gray-800">
                                    {log.title}
                                </h3>
                                <span className="text-[12px] text-gray-400 font-medium">
                                    {log.date}
                                </span>
                            </div>
                        </div>
                    ))
                ) : (
                 
                    <div className="text-center py-20 text-gray-300 italic">
                        No history found. Go to Friend Details to log an interaction.
                    </div>
                )}
            </div>
        </div>
    );
};

export default Timeline;