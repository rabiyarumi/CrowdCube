import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className='flex flex-col min-h-screen'>
           <Navbar/>
           <div className='flex-grow'>
            <Outlet/>
           </div>
           <Footer/>
        </div>
    );
};

export default Home;