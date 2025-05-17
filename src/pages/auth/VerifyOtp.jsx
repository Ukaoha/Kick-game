import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/logo.svg";
import ball from "../../assets/ball.svg";

const VerifyOTP = () => {
    const navigate = useNavigate();
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const inputRefs = useRef([]);

    useEffect(() => {
        inputRefs.current[0].focus();
    }, []);

    const handleChange = (index, value) => {
        if (value && !/^\d+$/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value.slice(-1);
        setOtp(newOtp);

        if (value && index < 5) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === 'Backspace') {
            if (!otp[index] && index > 0) {
                inputRefs.current[index - 1].focus();
            }
        }
    };

    const handlePaste = (e) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text').trim();

        if (/^\d{6}$/.test(pastedData)) {
            const digits = pastedData.split('');
            setOtp(digits);

            inputRefs.current[5].focus();
        }
    };

    const handleVerify = (e) => {
        e.preventDefault();
        const otpValue = otp.join('');
        // Verify OTP logic here
        if (otpValue.length === 6) {
            navigate('/game-mode');
        }
    };

    const handleResend = () => {
        // Resend OTP logic here
        console.log('Resending OTP');
        // Reset OTP fields
        setOtp(['', '', '', '', '', '']);
        inputRefs.current[0].focus();
    };

    return (
        <div className="bg-kick-dark min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden">
            {/* Background soccer balls */}
            <img src={ball} className="absolute top-[10%] right-[15%] md:block" alt="Soccer ball" />
            <img src={ball} className="absolute bottom-[15%] left-[10%] md:block" alt="Soccer ball" />
            <img src={ball} className="absolute top-[20%] right-[5%] md:block" alt="Soccer ball" />
            <img src={ball} className="absolute bottom-[25%] left-[8%] md:block" alt="Soccer ball" />

            <div className="max-w-lg w-full p-8 relative z-10">
                <div className="mb-4 flex flex-col items-center justify-center">
                    <img
                        src={logo}
                        alt="KICK Logo"
                        className="w-32 h-32 object-contain mx-auto"
                    />
                </div>

                <div className="mb-6 text-center">
                    <p className="text-xl text-white font-semibold">
                        Enter OTP and verify your email
                    </p>
                    <p className="text-sm text-white mt-2">
                        We've sent a 6-digit code to your email. Please enter it below to continue
                    </p>
                </div>

                <form onSubmit={handleVerify}>
                    <div className="flex justify-center gap-2 mb-6">
                        {otp.map((digit, index) => (
                            <input
                                key={index}
                                ref={(el) => (inputRefs.current[index] = el)}
                                type="text"
                                maxLength={1}
                                value={digit}
                                onChange={(e) => handleChange(index, e.target.value)}
                                onKeyDown={(e) => handleKeyDown(index, e)}
                                onPaste={index === 0 ? handlePaste : null}
                                className="w-12 h-12 text-center bg-transparent border border-kick-primary rounded-lg text-white text-xl focus:outline-none focus:border-kick-primary"
                            />
                        ))}
                    </div>

                    <button
                        type="submit"
                        className="bungee-regular cursor-pointer relative overflow-hidden rounded-xl py-2 px-2 text-white uppercase 
                        bg-gradient-to-r from-[#ff0044] to-[#8b31b4]
                        shadow-[0_0_50px_rgba(255,0,85,1.5)]
                        transition-all duration-300 hover:shadow-[0_0_50px_rgba(255,0,85,0.9)]
                        focus:outline-none
                        active:scale-[0.98]
                        w-full text-xl font-bold"
                    >
                        VERIFY
                    </button>
                </form>

                <div className="mt-4 text-center">
                    <p className="text-white text-sm md:text-lg">
                        Didn't receive OTP? <button onClick={handleResend} className="text-[#ff0044] font-medium">Resend</button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default VerifyOTP;