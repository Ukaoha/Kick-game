
import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/logo.svg";
import ball from "../../assets/ball.svg";

const LoginScreen = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/verify-otp');
    };

    return (
        <div className="bg-kick-dark min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden">
            {/* Background soccer balls */}
            <img src={ball} className="absolute top-[10%] right-[15%]  md:block" />
            <img src={ball} className="absolute bottom-[15%] left-[10%]  md:block" />
            <img src={ball} className="absolute top-[20%] right-[5%] md:block" />
            <img src={ball} className="absolute bottom-[25%] left-[8%] md:block" />

            <div className="max-w-lg w-full  p-8 relative z-10">
                <div className="mb-4 flex flex-col items-center justify-center">
                    <img
                        src={logo}
                        alt="KICK Logo"
                        className="w-32 h-32 object-contain mx-auto"
                    />

                    <p className="text-xl text-white mt-1 font-semibold">
                        Welcome back
                    </p>
                </div>

                <div className="mb-6 text-center">
                    <p className="text-lg text-[#FFFFFF] font-normal md:block hidden">
                        Play trivia and arcade games
                    </p>
                    <p className="text-lg text-[#FFFFFF] font-normal md:hidden block">
                        Get started with KICK by signing up with your details below
                    </p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
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

export default LoginScreen;