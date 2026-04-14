import React, { use } from 'react';
import { useParams } from 'react-router-dom';
import { Phone, MessageSquare, Video, Bell, Archive, Trash2, Edit } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// ডাটা ফেচিং প্রমিজ (আপনার JSON ফাইল থেকে)
const friendsPromise = fetch('/AllFriendsData.json').then(res => res.json());

const FriendDetails = () => {
    const { id } = useParams(); // URL থেকে ফ্রেন্ড আইডি নেওয়া
    const allFriends = use(friendsPromise);
    
    // আইডি অনুযায়ী সঠিক ফ্রেন্ডকে খুঁজে বের করা
    const friend = allFriends.find(f => f.id === parseInt(id));

    // কুইক চেক-ইন ফাংশন
    const handleAction = (type) => {
        toast.success(`${type} added for ${friend.name}!`);
    };

    if (!friend) return <div className="text-center py-20">Loading Friend Details...</div>;

    return (
        <div className="max-w-6xl mx-auto p-6 md:p-10 min-h-screen bg-[#F8FAFC]">
            <ToastContainer position="top-center" autoClose={1500} />
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                
                {/* ⬅️ বাম কলাম: প্রোফাইল কার্ড */}
                <div className="md:col-span-4 space-y-6">
                    <div className="bg-white border border-gray-100 rounded-[32px] p-8 text-center shadow-sm">
                        <img 
                            src={friend.picture} 
                            className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-gray-50" 
                            alt={friend.name} 
                        />
                        <h2 className="text-2xl font-bold mt-4 text-gray-900">{friend.name}</h2>
                        
                        {/* স্ট্যাটাস এবং ট্যাগস */}
                        <div className="mt-2 inline-block px-4 py-1 rounded-full bg-red-100 text-red-500 text-[10px] font-bold uppercase tracking-wider">
                            {friend.status}
                        </div>
                        <div className="flex justify-center gap-2 mt-3">
                            {friend.tags.map((tag, i) => (
                                <span key={i} className="bg-[#E0F2F1] text-[#4DB6AC] text-[9px] px-3 py-1 rounded-full font-bold uppercase">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <p className="text-gray-500 italic mt-6 text-sm leading-relaxed">
                            "{friend.bio}"
                        </p>
                        <p className="text-gray-400 text-[10px] mt-4 uppercase font-bold tracking-widest">
                            Preferred: {friend.email}
                        </p>
                    </div>

                    {/* অ্যাকশন বাটনসমূহ */}
                    <div className="space-y-3">
                        <button className="btn btn-outline w-full flex justify-center gap-2 border-gray-200 rounded-2xl hover:bg-gray-50 text-gray-600">
                            <Bell size={18} /> Snooze 2 Weeks
                        </button>
                        <button className="btn btn-outline w-full flex justify-center gap-2 border-gray-200 rounded-2xl hover:bg-gray-50 text-gray-600">
                            <Archive size={18} /> Archive
                        </button>
                        <button className="btn btn-outline btn-error w-full flex justify-center gap-2 rounded-2xl">
                            <Trash2 size={18} /> Delete
                        </button>
                    </div>
                </div>

                {/* ➡️ ডান কলাম: স্ট্যাটাস ও গোল */}
                <div className="md:col-span-8 space-y-6">
                    
                    {/* স্ট্যাটাস কার্ডস */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm">
                            <h3 className="text-4xl font-bold text-[#2D4F40]">{friend.days_since_contact}</h3>
                            <p className="text-gray-400 text-[10px] mt-2 uppercase font-bold tracking-widest">Days Since Contact</p>
                        </div>
                        <div className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm">
                            <h3 className="text-4xl font-bold text-[#2D4F40]">{friend.goal}</h3>
                            <p className="text-gray-400 text-[10px] mt-2 uppercase font-bold tracking-widest">Goal (Days)</p>
                        </div>
                        <div className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm">
                            <h3 className="text-xl font-bold text-[#2D4F40]">{friend.next_due_date}</h3>
                            <p className="text-gray-400 text-[10px] mt-2 uppercase font-bold tracking-widest">Next Due</p>
                        </div>
                    </div>

                    {/* রিলেশনশিপ গোল কার্ড */}
                    <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm relative">
                        <button className="absolute top-6 right-6 btn btn-xs btn-ghost border border-gray-100 font-bold text-gray-500 rounded-lg">
                            <Edit size={12} className="mr-1" /> Edit
                        </button>
                        <h4 className="font-bold text-gray-800 text-lg">Relationship Goal</h4>
                        <p className="text-gray-500 mt-4 text-base">
                            Connect every <span className="font-black text-gray-900">{friend.goal} days</span>
                        </p>
                    </div>

                    {/* কুইক চেক-ইন কার্ড */}
                    <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
                        <h4 className="font-bold text-gray-800 text-lg mb-6">Quick Check-In</h4>
                        <div className="grid grid-cols-3 gap-4">
                            <button onClick={() => handleAction('Call')} className="btn btn-ghost border border-gray-100 flex-col h-28 hover:bg-gray-50 rounded-2xl transition-all">
                                <Phone size={24} className="text-gray-700 mb-2" /> 
                                <span className="text-xs font-bold uppercase tracking-widest">Call</span>
                            </button>
                            <button onClick={() => handleAction('Text')} className="btn btn-ghost border border-gray-100 flex-col h-28 hover:bg-gray-50 rounded-2xl transition-all">
                                <MessageSquare size={24} className="text-gray-700 mb-2" /> 
                                <span className="text-xs font-bold uppercase tracking-widest">Text</span>
                            </button>
                            <button onClick={() => handleAction('Video')} className="btn btn-ghost border border-gray-100 flex-col h-28 hover:bg-gray-50 rounded-2xl transition-all">
                                <Video size={24} className="text-gray-700 mb-2" /> 
                                <span className="text-xs font-bold uppercase tracking-widest">Video</span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FriendDetails;