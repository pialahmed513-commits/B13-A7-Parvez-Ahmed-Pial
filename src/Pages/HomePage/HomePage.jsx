import React, { Suspense } from 'react'; // ১. Suspense ইমপোর্ট করুন
import Banner from '../../Component/Navber/HomePage/Banner';
import AllFriends from '../../Component/Navber/HomePage/AllFriends';

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            
            {/* ২. AllFriends কে Suspense এর ভেতরে রাখুন */}
            <Suspense fallback={
                <div className="flex justify-center items-center my-20">
                    <span className="loading loading-spinner loading-lg text-primary"></span>
                    <p className="ml-4 text-xl font-medium">Loading Friends...</p>
                </div>
            }>
                <AllFriends></AllFriends>
            </Suspense>
        </div>
    );
};

export default HomePage;