import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import UserNav from '../components/Usernav';

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
                    <h2 className="font-semibold text-lg ml-8 md:ml-0">{title}</h2>
                    <UserNav />
                </header>

                {/* Page Content */}
                <main className="p-4 md:p-6">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default MainLayout;


