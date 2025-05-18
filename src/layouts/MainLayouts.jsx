

import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import UserNav from '../components/Usernav';
import logo from '../assets/logo.svg';

const MainLayout = ({ children, title }) => {
    const [isMobile, setIsMobile] = useState(false);
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

    useEffect(() => {
        const checkIfMobile = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
            if (mobile) {
                setSidebarCollapsed(true);
            }
        };

        checkIfMobile();

        // Add event listener
        window.addEventListener('resize', checkIfMobile);

        // Clean up
        return () => window.removeEventListener('resize', checkIfMobile);
    }, []);

    // Function to handle sidebar collapse state
    const handleSidebarCollapse = (collapsed) => {
        setSidebarCollapsed(collapsed);
    };

    return (
        <div className="min-h-screen bg-kick-darker flex">
            {/* Sidebar */}
            <Sidebar onToggle={handleSidebarCollapse} />

            <div
                className={`
                    flex-1 transition-all duration-300
                    ${isMobile ? 'ml-0' : sidebarCollapsed ? 'ml-24' : 'ml-64'}
                `}
            >
                {/* Top Navigation */}
                <header className="bg-kick-dark h-16 px-4 md:px-6 flex items-center justify-between sticky top-0 z-10">
                    {location.pathname === "/game-mode" ? (
                        <div className="hidden md:block">
                            <p className="font-normal text-base text-[#AFAFAF]">GMT- 02:48</p>
                            <p className="text-sm text-[#AFAFAF]">12/04/24</p>
                        </div>
                    ) : (
                        <h2 className="font-semibold text-lg hidden md:block">{title}</h2>
                    )}
                    <img src={logo} alt="Logo" className="md:hidden" />

                    <UserNav />
                </header>

                {/* Page Content */}
                <main className="p-4 md:p-6 overflow-y-auto no-scrollbar">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default MainLayout;

