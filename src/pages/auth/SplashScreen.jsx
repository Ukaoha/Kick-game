

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import splash from '../../assets/home.png';

import splashmobile from '../../assets/splashmobile.png';

const SplashScreen = () => {
    // Initialize AOS
    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: true,
            easing: 'ease-out-cubic',
        });
    }, []);

    return (
        <div className="fixed top-0 left-0 w-screen h-screen overflow-hidden flex justify-center items-center">
            <img
                className="hidden md:block"
                src={splash}
                alt="splash screen"
                data-aos="fade-up"
                data-aos-delay="300"
            />

            <img
                className="block md:hidden object-contain"
                src={splashmobile}
                alt="splash screen image"
                data-aos="zoom-in"
                data-aos-delay="300"
            />
        </div>
    );
};

export default SplashScreen;