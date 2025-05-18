
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const FeaturedGame = ({
    title,
    image,
}) => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);
    return (

        <div className="relative  rounded-xl overflow-visible shadow-lg h-full w-full">

            <div className="absolute inset-0 z-0 overflow-visible flex justify-center items-center">

                <img
                    src={image}
                    alt={title}

                    className="w-100 h-100 object-contain transform scale-125 translate-y-16  "
                    style={{
                        objectPosition: 'center',
                        transformOrigin: 'center',
                    }}



                />
            </div>

        </div>
    );
};

export default FeaturedGame;




