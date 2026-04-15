import React from 'react';
import { SquarePlus } from 'lucide-react';

const Banner = () => {
    return (
        <div className='mt-10 md:mt-14 px-4'>
    
            <div className='flex flex-col items-center justify-center text-center'>
                <h1 className='text-3xl md:text-4xl font-bold text-gray-800'>
                    Friends to keep close in your life
                </h1>
                <p className='mt-4 text-gray-600 max-w-2xl'>
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>
                <button className="btn bg-[#2D4F40] hover:bg-[#213a2f] text-white mt-6 gap-2 border-none">
                    <SquarePlus size={20} />
                    Add a Friend
                </button>
            </div>

          
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 max-w-6xl mx-auto'>
                
             
                <div className='border-2 rounded-xl p-8 text-center shadow-sm'>
                    <h2 className='text-4xl font-bold'>10</h2>
                    <p className='text-gray-500 mt-2'>Total Friends</p>
                </div>

           
                <div className='border-2 rounded-xl p-8 text-center shadow-sm'>
                    <h2 className='text-4xl font-bold'>3</h2>
                    <p className='text-gray-500 mt-2'>On Track</p>
                </div>

            
                <div className='border-2 rounded-xl p-8 text-center shadow-sm'>
                    <h2 className='text-4xl font-bold'>6</h2>
                    <p className='text-gray-500 mt-2'>Need Attention</p>
                </div>

           
                <div className='border-2 rounded-xl p-8 text-center shadow-sm'>
                    <h2 className='text-4xl font-bold'>12</h2>
                    <p className='text-gray-500 mt-2'>Interactions This Month</p>
                </div>

            </div>
        </div>
    );
};

export default Banner;