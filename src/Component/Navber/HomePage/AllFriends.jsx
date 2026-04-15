import React, { use } from 'react';
import { Link } from 'react-router-dom';


const friendsPromise = fetch('/AllFriendsData.json').then(res => res.json());

const AllFriends = () => {
    const friends = use(friendsPromise);

  
    const getStatusStyle = (status) => {
        const s = status.toLowerCase();
        if (s === 'overdue') return 'bg-[#FF5252] text-white'; // লাল
        if (s === 'almost due') return 'bg-[#FFB74D] text-white'; // কমলা
        return 'bg-[#2D4F40] text-white'; // ডার্ক গ্রিন
    };

    return (
        <div className='max-w-7xl mx-auto px-4 mb-20'>
            <h1 className='text-3xl font-bold text-center mt-10 mb-10'>Your Friends</h1>

    
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                {
                    friends.map((friend) => (
                        <Link 
                            to={`/friend/${friend.id}`} 
                            key={friend.id}
                            className="card bg-base-100 border border-gray-100 rounded-[32px] shadow-sm hover:shadow-md transition-all cursor-pointer group"
                        >
                       
                            <figure className="pt-8">
                                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-gray-50">
                                    <img
                                        src={friend.picture}
                                        alt={friend.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </figure>

                        
                            <div className="card-body items-center text-center p-8">
                                <h2 className="card-title text-xl font-bold text-gray-900">
                                    {friend.name}
                                </h2>
                                
                                <p className="text-gray-400 text-xs font-medium">
                                    {friend.days_since_contact}d ago
                                </p>

                            
                                <div className="card-actions justify-center mt-2">
                                    {friend.tags.map((tag, index) => (
                                        <div 
                                            key={index} 
                                            className="badge bg-[#E0F2F1] text-[#4DB6AC] border-none text-[10px] font-bold uppercase py-3 px-4"
                                        >
                                            {tag}
                                        </div>
                                    ))}
                                </div>

                           
                                <div className={`mt-4 px-6 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest ${getStatusStyle(friend.status)}`}>
                                    {friend.status}
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default AllFriends;