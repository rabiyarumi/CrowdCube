import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const Homepage = () => {

    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");
    
    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme)
        // document.getElementsByClassName("theme").setAttribute("data-theme", localTheme);

    } , [theme])


    return (
        <div className='flex flex-col items-center min-h-screen  ' >
           <Navbar theme={theme} setTheme={setTheme} />
          
            
          
           <div className='flex-grow '>
            <Outlet/>
           </div>
           <Footer/>
        </div>
    );
};

export default Homepage;