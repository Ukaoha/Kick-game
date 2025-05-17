

import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/logo.svg";

const OnboardingScreen = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/login');
    };

    return (
        <div className="bg-kick-dark min-h-screen w-full flex flex-col items-center justify-center ">
            <div className="max-w-lg w-full  p-8">
                {/* Logo */}
                <div className="mb-4 flex flex-col items-center justify-center">
                    <img
                        src={logo}
                        alt="KICK Logo"
                        className="w-32 h-32 object-contain mx-auto"
                    />

                    <p className="text-xl text-white mt-1 font-semibold">
                        Set Up Your KICK Account
                    </p>
                </div>

                <div className="mb-4 text-center">
                    <p className="text-lg text-[#FFFFFF] font-normal">
                        We'll use your email to keep your account secure and send updates
                    </p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <div>
                            <input
                                type="text"
                                placeholder="Enter your first name"
                                className="w-full bg-transparent border border-kick-primary rounded-lg p-3 text-white focus:outline-none focus:border-kick-primary"
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="Enter your last name"
                                className="w-full bg-transparent border border-kick-primary rounded-lg p-3 text-white focus:outline-none focus:border-kick-primary"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="w-full bg-transparent border border-kick-primary rounded-lg p-3 text-white focus:outline-none focus:border-kick-primary"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="bungee-regular cursor-pointer relative overflow-hidden rounded-xl py-2 px-2 text-white uppercase 
                        bg-gradient-to-r from-[#ff0044] to-[#8b31b4]
                        shadow-[0_0_50px_rgba(255,0,85,1.5)]
                        transition-all duration-300 hover:shadow-[0_0_50px_rgba(255,0,85,0.9)]
                        focus:outline-none
                        active:scale-[0.98]
                        w-full text-xl font-bold mt-6"
                    >
                        CONTINUE
                    </button>
                </form>
            </div>
        </div>
    );
};

export default OnboardingScreen;