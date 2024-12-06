import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const Homepage = () => {

    const [theme, setTheme] = useState(true);



    return (
        <div className='flex flex-col min-h-screen' data-theme={theme ? "light" : "dark"}>
           <Navbar/>
          
            <button onClick={() => setTheme(!theme)} className='btn btn-outline'>
                {
                    theme ? "Dark" : "Light"
                }
                </button>
          
           <div className='flex-grow '>
            <Outlet/>
           </div>
           <Footer/>
        </div>
    );
};

export default Homepage;