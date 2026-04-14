import React, { Suspense } from 'react';
import Banner from '../../Component/Navber/HomePage/Banner'; // আপনার ফোল্ডার পাথ অনুযায়ী
import AllFriends from '../../Component/Navber/HomePage/AllFriends';
import Navbar from '../../Component/Navber/Navbar';
import Footer from '../../Component/Navber/Footer/Footer';

const HomePage = () => {
    return (
        <div className="bg-[#F8FAFC] min-h-screen"> 
       
            <Banner />
            
     
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