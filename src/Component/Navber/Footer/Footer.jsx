import React from 'react';
import instagram from '../../../assets/instagram.png'
import facebok from '../../../assets/facebook.png'
import twitter from '../../../assets/twitter.png'
const Footer = () => {
    return (
      
       <footer className="bg-[#1B3C31] text-white py-14 mt-20 w-full">
            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
                
                {/* ১. মেইন বড় টাইটেল */}
                <h1 className="text-5xl md:text-[64px] font-black mb-4 tracking-tighter text-center">
                    KeenKeeper
                </h1>

                {/* ২. ডেসক্রিপশন টেক্সট */}
                <p className="text-gray-300 text-sm md:text-base max-w-2xl text-center mb-10 leading-relaxed opacity-80">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>

                {/* ৩. সোশ্যাল লিঙ্ক সেকশন (শুধুমাত্র টেক্সট লিঙ্ক) */}
                <div className="flex flex-col items-center mb-16">
                    <p className="text-xs font-bold text-white mb-6 uppercase tracking-[0.2em] opacity-90">
                        Social Links
                    </p>
                    
                    <div className="flex justify-center gap-2">
                        {/* আইকনের বদলে শুধু টেক্সট লিঙ্ক */}
                       <img src={instagram} alt="" srcset="" />
                       <img src={facebok} alt="" />
                       <img src={twitter} alt="" />
                    </div>
                </div>

                {/* ৪. বটম কপিরাইট ও লিগ্যাল পার্ট */}
                <div className="w-full pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[13px] text-gray-400">
                    <p className="font-medium">© 2026 KeenKeeper. All rights reserved.</p>
                    
                    <div className="flex gap-8 font-medium">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>

    )
};

export default Footer;