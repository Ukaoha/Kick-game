
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import bonus from '../assets/bonus.svg';
import logo from '../assets/logo.svg';
import {
    RiHome4Line,
    RiGamepadLine,
    RiTrophyLine,
    RiTeamLine,
    RiUserLine,
    RiSettings4Line,
    RiQuestionLine,
    RiArrowLeftSLine,
    RiArrowRightSLine,
    RiMenuLine,
    RiCloseLine
} from 'react-icons/ri';

const Sidebar = ({ onToggle }) => {
    const location = useLocation();
    const [currentPath, setCurrentPath] = useState(location.pathname);
    const [collapsed, setCollapsed] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setCurrentPath(location.pathname);
    }, [location]);

    useEffect(() => {
        const checkIfMobile = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
            if (mobile) {
                setCollapsed(true);
                if (onToggle) {
                    onToggle(true);
                }
            }
        };

        checkIfMobile();

        window.addEventListener('resize', checkIfMobile);

        return () => window.removeEventListener('resize', checkIfMobile);
    }, [onToggle]);

    // Handle mobile menu toggling
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    // Handle sidebar collapsing
    const toggleSidebar = () => {
        if (!isMobile) {
            const newCollapsedState = !collapsed;
            setCollapsed(newCollapsedState);
            if (onToggle) {
                onToggle(newCollapsedState);
            }
        } else {
            toggleMobileMenu();
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            const sidebar = document.getElementById('sidebar');
            if (mobileMenuOpen && sidebar && !sidebar.contains(event.target)) {
                setMobileMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [mobileMenuOpen]);

    // Navigation items
    const navItems = [
        { path: '/game-mode', label: 'Home', icon: RiHome4Line },
        { path: '/arcade', label: 'Kick Arcade', icon: RiGamepadLine },
        { path: '/trivia', label: 'Kick Trivia', icon: RiQuestionLine },
        { path: '/leaderboard', label: 'Leaderboard', icon: RiTrophyLine },
        { path: '/win-cash', label: 'Win & Cash', icon: RiTeamLine },
        { path: '/invite', label: 'Invite a Friend', icon: RiUserLine },
        { path: '/support', label: 'Support', icon: RiQuestionLine },
    ];

    const profileItems = [
        { path: '/profile', label: 'Profile', icon: RiUserLine },
        { path: '/settings', label: 'Settings', icon: RiSettings4Line },
    ];

    // Handle tab click
    const handleTabClick = (path) => {
        setCurrentPath(path);
        if (isMobile) {
            setMobileMenuOpen(false);
        }
    };

    return (
        <>
            {isMobile && (
                <button
                    onClick={toggleMobileMenu}
                    className="fixed top-4 left-4 z-50 bg-gray-800 bg-opacity-70 rounded-full p-2 text-white"
                >
                    {mobileMenuOpen ? <RiCloseLine size={24} /> : <RiMenuLine size={24} />}
                </button>
            )}

            {isMobile && mobileMenuOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-30" />
            )}

            <div
                id="sidebar"
                className={`
                    fixed top-0 min-h-screen z-40 flex flex-col transition-all duration-300
                    ${collapsed && !mobileMenuOpen ? (isMobile ? 'w-0 -left-full' : 'w-24 left-0') : 'w-64 left-0'} 
                    ${mobileMenuOpen ? 'left-0' : isMobile ? '-left-full' : 'left-0'}
                    ${collapsed && !mobileMenuOpen ? 'border-r border-gray-700' : 'border-r border-gray-700'}
                    bg-[#111829] 
                `}
            >
                {/* Logo and collapse button container */}
                <div className={`${collapsed && !mobileMenuOpen ? 'p-4' : 'p-6'} flex justify-between items-center relative`}>
                    {(!collapsed || mobileMenuOpen) && (
                        <img src={logo} alt="Logo" className="mx-auto" />
                    )}
                    {collapsed && !mobileMenuOpen && !isMobile && (
                        <span className="text-2xl font-bold tracking-wider text-white mx-auto">K</span>
                    )}

                    {/* Collapse button positioned on the border */}
                    {!isMobile && (
                        <button
                            onClick={toggleSidebar}
                            className="absolute -right-4 top-6 bg-[#111829] border border-gray-700 rounded-full p-1 text-white hover:text-kick-primary transition-colors z-10"
                        >
                            {collapsed ? <RiArrowRightSLine size={20} /> : <RiArrowLeftSLine size={20} />}
                        </button>
                    )}
                </div>

                {/* Navigation Links */}
                <div className='bg-[#111829] rounded-md mx-4'>
                    <nav className={`mt-8 rounded-md ${collapsed && !mobileMenuOpen ? 'px-2' : 'px-4'}`}>

                        <div className="bg-[#171E2F] py-3 px-2 flex items-center gap-x-3 rounded-lg">
                            <div>
                                <img src={bonus} alt="bonus" />
                            </div>
                            {(!collapsed || mobileMenuOpen) && (
                                <div>
                                    <h2 className="text-sm font-bold mb-3 text-white">Bonus</h2>
                                    <p className="text-[#616161] text-xs font-normal">
                                        Get everyday extra points
                                    </p>
                                </div>
                            )}
                        </div>
                        <ul className="space-y-2 bg-[#171E2F] shadow-md mt-4 p-3 rounded-lg">
                            {navItems.map((item) => {
                                const isActive = currentPath === item.path;
                                const Icon = item.icon;

                                return (
                                    <li key={item.path}>
                                        <Link
                                            to={item.path}
                                            onClick={() => handleTabClick(item.path)}
                                            className={`flex items-center ${collapsed && !mobileMenuOpen ? 'justify-center' : ''} px-3 py-2 rounded-md ${isActive ? 'bg-[#FF197533] text-white' : 'text-[#616161]'} transition-all`}
                                        >
                                            <Icon className={`text-xl mr-3 ${collapsed && !mobileMenuOpen ? 'text-white' : ''} ${isActive ? 'text-white' : ''}`} />
                                            {(!collapsed || mobileMenuOpen) && <span>{item.label}</span>}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>

                        <ul className="space-y-2 bg-[#171E2F] mt-4 shadow-md px-3 pt-3 pb-12 rounded-lg">
                            {profileItems.map((item) => {
                                const isActive = currentPath === item.path;
                                const Icon = item.icon;

                                return (
                                    <li key={item.path}>
                                        <Link
                                            to={item.path}
                                            onClick={() => handleTabClick(item.path)}
                                            className={`flex items-center ${collapsed && !mobileMenuOpen ? 'justify-center' : 'text-white'} px-3 py-2 rounded-md ${isActive ? 'bg-[#FF197533] text-white' : 'text-white'}transition-all`}
                                        >
                                            <Icon className={`text-xl mr-3 ${collapsed && !mobileMenuOpen ? 'text-white' : 'text-white'} ${isActive ? 'text-white' : 'text-white'}`} />
                                            {(!collapsed || mobileMenuOpen) && <span>{item.label}</span>}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Sidebar;