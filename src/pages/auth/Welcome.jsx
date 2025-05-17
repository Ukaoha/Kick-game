import { useState, useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { useNavigate } from "react-router";
import logo from "../../assets/logo.svg";
export default function WelcomePage() {
    const [phoneNumber, setPhoneNumber] = useState("+234 7050 857 338");
    const navigate = useNavigate();
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: "ease-in-out"
        });
    }, []);

    return (
        <div className="min-h-screen bg-dark flex items-center justify-center p-4">
            <div
                className="max-w-md w-full  shadow-lg flex flex-col items-center text-center py-12 px-6"
                data-aos="fade-up"
            >
                <div
                    className=""
                    data-aos="zoom-in"
                    data-aos-delay="300"
                >
                    <img
                        src={logo}
                        alt="KICK Logo"
                        className="w-32 h-32 object-contain"
                    />

                </div>

                <div
                    className="space-y-3 mb-8"
                    data-aos="fade-up"
                    data-aos-delay="500"
                >
                    <h2 className="text-white text-lg">Welcome to KICK: {phoneNumber}</h2>
                    <p className="text-gray-300 text-sm">
                        We've successfully detected your phone number.<br />
                        Let's set up your account.
                    </p>
                </div>
                <button
                    onClick={() => navigate("/onboarding")}
                    className="bungee-regular cursor-pointer relative overflow-hidden rounded-xl py-3 px-2 text-white uppercase 
                    bg-gradient-to-r from-[#ff0044] to-[#8b31b4]
                    shadow-[0_0_50px_rgba(255,0,85,1.5)]
                    transition-all duration-300 hover:shadow-[0_0_50px_rgba(255,0,85,0.9)]
                    focus:outline-none
                    active:scale-[0.98]
                    w-2/3 text-xl font-bold"
                >
                    CONTINUE
                </button>
            </div>
        </div>
    );
}