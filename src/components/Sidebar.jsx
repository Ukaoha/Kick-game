
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import bonus from '../assets/bonus.svg';
import logo from '../assets/logo.svg';
import {

    RiArrowLeftSLine,
    RiArrowRightSLine,
    RiMenuLine,
    RiCloseLine
} from 'react-icons/ri';
import questionicon from '../assets/questions.svg';
import kickicon from '../assets/kick.svg';
import leaderboard from '../assets/leaderboard.svg';
import support from '../assets/support.svg';
import win from '../assets/win.svg';
import profile from '../assets/profile.svg';
import settings from '../assets/settings.svg';
import invite from '../assets/invite.svg';

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
        { path: '/game-mode', label: 'Kick Arcade', icon: kickicon },
        { path: '/trivia', label: 'Kick Trivia', icon: questionicon },
        { path: '/leaderboard', label: 'Leaderboard', icon: leaderboard },
        { path: '/win-cash', label: 'Win & Cash', icon: win },
        { path: '/invite', label: 'Invite a Friend', icon: invite },
        { path: '/support', label: 'Support', icon: support },
    ];

    const profileItems = [
        { path: '/profile', label: 'Profile', icon: profile },
        { path: '/settings', label: 'Settings', icon: settings },
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
                    className="fixed top-4 right-4 z-50 bg-gray-800 bg-opacity-70 rounded-full p-2 text-white"
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
                    ${collapsed && !mobileMenuOpen ? (isMobile ? 'w-0 -right-full' : 'w-28 left-0') : 'w-64 left-0'} 
                    ${mobileMenuOpen ? 'right-0' : isMobile ? '-right-full' : 'left-0'}
                    ${collapsed && !mobileMenuOpen ? 'border-r border-gray-700' : 'border-r border-gray-700'}
                    bg-[#111829] overflow-y-auto overflow-x-hidden scrollbar-hide no-scrollbar
                `}
                style={{
                    height: '100vh',
                    position: 'fixed',
                    scrollbarWidth: 'none', /* Firefox */
                    msOverflowStyle: 'none', /* IE and Edge */
                }}
            >
                {/* Logo and collapse button container */}
                <div className={`${collapsed && !mobileMenuOpen ? 'p-4' : 'p-6'} flex justify-between items-center relative`}>
                    {(!collapsed || mobileMenuOpen) && (
                        <img src={logo} alt="Logo" className="mx-auto" />
                    )}
                    {collapsed && !mobileMenuOpen && !isMobile && (
                        <img src={logo} alt="Logo" className="mx-auto" />
                    )}

                    {/* Collapse button positioned on the border */}
                    {!isMobile && (
                        <button
                            onClick={toggleSidebar}
                            className="absolute -right-2 top-6 bg-[#111829] text-white hover:text-kick-primary transition-colors"
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

                                return (
                                    <li key={item.path}>
                                        <Link
                                            to={item.path}
                                            onClick={() => handleTabClick(item.path)}
                                            className={`flex items-center ${collapsed && !mobileMenuOpen ? 'justify-center' : ''} px-3 py-2 rounded-md ${isActive ? 'bg-[#FF197533] text-white' : 'text-[#616161]'} transition-all`}
                                        >
                                            <img
                                                src={item.icon}
                                                alt={item.label}
                                                className={`w-5 h-5 ${collapsed && !mobileMenuOpen ? 'mr-0' : 'mr-3'} ${isActive ? 'text-white' : ''}`}
                                            />
                                            {(!collapsed || mobileMenuOpen) && <span>{item.label}</span>}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>

                        <ul className="space-y-2 bg-[#171E2F] mt-4 shadow-md px-3 pt-3 pb-12 rounded-lg">
                            {profileItems.map((item) => {
                                const isActive = currentPath === item.path;

                                return (
                                    <li key={item.path}>
                                        <Link
                                            to={item.path}
                                            onClick={() => handleTabClick(item.path)}
                                            className={`flex items-center ${collapsed && !mobileMenuOpen ? 'justify-center' : ''} px-3 py-2 rounded-md ${isActive ? 'bg-[#FF197533] text-white' : 'text-[#616161]'} transition-all`}
                                        >
                                            <img
                                                src={item.icon}
                                                alt={item.label}
                                                className={`w-5 h-5 ${collapsed && !mobileMenuOpen ? 'mr-0' : 'mr-3'}`}
                                            />
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