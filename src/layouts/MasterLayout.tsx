import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MasterLayout = () => {
    return (
        <div className='flex flex-col h-[100vh] w-[100vw]'>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
}

export default MasterLayout;
