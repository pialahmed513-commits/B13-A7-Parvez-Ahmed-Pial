import React from 'react';
import Navbar from '../Component/Navber/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Component/Navber/Footer/Footer';


const MainLayout = () => {
    return (
        <div>
                <Navbar></Navbar>
                  <Outlet></Outlet>
                 <Footer></Footer>
        </div>
    );
};

export default MainLayout;