import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const State = () => {
    const [stats, setStats] = useState([]);

    useEffect(() => {
  
        const timelineData = JSON.parse(localStorage.getItem('timeline')) || [];
        
        const counts = {
            Call: timelineData.filter(i => i.type === 'Call').length,
            Text: timelineData.filter(i => i.type === 'Text').length,
            Video: timelineData.filter(i => i.type === 'Video').length
        };

        const chartFormatted = [
            { name: 'Text', value: counts.Text },
            { name: 'Call', value: counts.Call },
            { name: 'Video', value: counts.Video }
        ].filter(item => item.value > 0);

        setStats(chartFormatted);
    }, []);

  
    const COLORS = ['#8B5CF6', '#2D4F40', '#4ADE80'];

    return (
        <div className="max-w-5xl mx-auto px-6 py-14 min-h-screen">
         
            <h1 className="text-[38px] font-black text-[#111827] mb-10 tracking-tight">
                Friendship Analytics
            </h1>

           
            <div className="bg-white border border-gray-100 rounded-[45px] p-12 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.03)]">
                <div className="mb-8">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.25em]">
                        By Interaction Type
                    </span>
                </div>
                
                <div className="h-[400px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={stats}
                                cx="50%"
                                cy="50%"
                                innerRadius={100} 
                                outerRadius={140}
                                paddingAngle={8}
                                dataKey="value"
                                stroke="none"
                            >
                                {stats.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip 
                                contentStyle={{ borderRadius: '15px', border: 'none', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}
                            />
                            <Legend 
                                iconType="circle" 
                                verticalAlign="bottom" 
                                height={36} 
                                wrapperStyle={{ paddingTop: '20px', fontWeight: 'bold', fontSize: '14px' }}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default State;