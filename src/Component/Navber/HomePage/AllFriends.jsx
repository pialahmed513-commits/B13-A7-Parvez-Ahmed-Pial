import React, { use } from 'react';
import { Link } from 'react-router-dom';

// ডাটা ফেচিং প্রমিজ
const friendsPromise = fetch('/AllFriendsData.json').then(res => res.json());

const AllFriends = () => {
    const friends = use(friendsPromise);
    console.log('ALL FRIENDS', friends);

    // স্ট্যাটাস অনুযায়ী ডাইনামিক কালার ক্লাস
    const getStatusStyle = (status) => {
        const s = status.toLowerCase();
        if (s === 'overdue') return 'bg-[#FF5252] text-white'; // লাল
        if (s === 'almost due') return 'bg-[#FFB74D] text-white'; // অরেঞ্জ
        return 'bg-[#2D4F40] text-white'; // অন-ট্র্যাক (ডার্ক গ্রিন)
    };

    return (
        <div className='max-w-7xl mx-auto px-4 mb-20'>
            <h1 className='text-3xl font-bold text-center mt-10 mb-10'>Your Friends</h1>

            {/* ৪ কলামের রেসপনসিভ গ্রিড */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                {
                    friends.map((friend) => (
                        <Link 
                            to={`/friend/${friend.id}`} 
                            key={friend.id}
                            className='bg-white border border-gray-100 rounded-[32px] p-8 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center group'
                        >
                            {/* ১. গোল ছবি (ফিগমা অনুযায়ী) */}
                            <div className='w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-gray-50 group-hover:scale-105 transition-transform'>
                                <img 
                                    src={friend.picture} 
                                    alt={friend.name} 
                                    className='w-full h-full object-cover'
                                />
                            </div>

                            {/* ২. নাম এবং দিন */}
                            <h3 className='text-xl font-bold text-gray-900'>{friend.name}</h3>
                            <p className='text-gray-400 text-xs mt-1 font-medium'>
                                {friend.days_since_contact}d ago
                            </p>

                            {/* ৩. ট্যাগস */}
                            <div className='flex flex-wrap justify-center gap-2 mt-4'>
                                {friend.tags.map((tag, index) => (
                                    <span 
                                        key={index} 
                                        className='bg-[#E0F2F1] text-[#4DB6AC] text-[10px] font-bold px-3 py-1 rounded-full uppercase'
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* ৪. স্ট্যাটাস পিল (রঙিন বাটন স্টাইল) */}
                            <div className={`mt-5 px-6 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest ${getStatusStyle(friend.status)}`}>
                                {friend.status}
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default AllFriends;