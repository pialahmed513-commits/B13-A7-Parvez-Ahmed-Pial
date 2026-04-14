import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Clock, BarChart2 } from 'lucide-react'; 

const Navbar = () => {
    return (
        <div className="navbar bg-white shadow-sm px-4 lg:px-12 py-4">
        
            <div className="navbar-start">
                <h1 className='text-2xl font-bold text-gray-800'>
                    Keen<span className='text-[#2D4F40]'>Keeper</span>
                </h1>
            </div>

           
            <div className="navbar-end hidden lg:flex">
                <ul className="flex gap-4 items-center">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                                    isActive 
                                    ? 'bg-[#2D4F40] text-white' 
                                    : 'text-gray-500 hover:bg-gray-100'
                                }`
                            }
                        >
                            <Home size={18} />
                            <span className="font-medium">Home</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/Timeline"
                            className={({ isActive }) =>
                                `flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                                    isActive 
                                    ? 'bg-[#2D4F40] text-white' 
                                    : 'text-gray-500 hover:bg-gray-100'
                                }`
                            }
                        >
                            <Clock size={18} />
                            <span className="font-medium">Timeline</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/Stats"
                            className={({ isActive }) =>
                                `flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                                    isActive 
                                    ? 'bg-[#2D4F40] text-white' 
                                    : 'text-gray-500 hover:bg-gray-100'
                                }`
                            }
                        >
                            <BarChart2 size={18} />
                            <span className="font-medium">Stats</span>
                        </NavLink>
                    </li>
                </ul>
            </div>

         
            <div className="navbar-end lg:hidden">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/Timeline">Timeline</NavLink></li>
                        <li><NavLink to="/Stats">Stats</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;