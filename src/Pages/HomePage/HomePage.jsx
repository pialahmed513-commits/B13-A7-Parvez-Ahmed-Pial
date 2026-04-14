import React, { Suspense } from 'react';
import Banner from '../../Component/Navber/HomePage/Banner'; // আপনার ফোল্ডার পাথ অনুযায়ী
import AllFriends from '../../Component/Navber/HomePage/AllFriends';

const HomePage = () => {
    return (
        <div className="bg-[#F8FAFC] min-h-screen"> 
            {/* ১. ব্যানার সেকশন */}
            <Banner />
            
            {/* ২. ফ্রেন্ডস লিস্ট উইথ সাসপেন্স */}
            <Suspense fallback={
                <div className="flex flex-col justify-center items-center my-32">
                    <span className="loading loading-spinner loading-lg text-[#2D4F40]"></span>
                    <p className="mt-4 text-gray-500 font-medium">Fetching your friends list...</p>
                </div>
            }>
                <AllFriends />
            </Suspense>
        </div>
    );
};

export default HomePage;