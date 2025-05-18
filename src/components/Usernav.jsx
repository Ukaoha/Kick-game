import React, { useState } from 'react';
import { FaArrowDown, FaBell } from 'react-icons/fa';
import { RiSearchLine, RiBellLine, RiUser3Line, RiMenuLine } from 'react-icons/ri';
import bell from '../assets/bell.svg';
import person from '../assets/person.svg';
import arrowdown from '../assets/arrowicons.svg';
const UserNav = () => {
    const [showMobileSearch, setShowMobileSearch] = useState(false);

    return (
        <div className="flex items-center space-x-3 md:space-x-6">
            {/* Mobile Search Toggle */}
            <button
                className="md:hidden p-2 text-gray-400 hover:text-white"
                onClick={() => setShowMobileSearch(!showMobileSearch)}
            >
                <RiSearchLine size={22} />
            </button>

            {/* Search Bar - Desktop always visible, Mobile expandable */}
            <div className={`${showMobileSearch ? 'block absolute top-16 left-0 right-0 p-2 bg-kick-dark z-30' : 'hidden'} md:relative md:block md:top-0`}>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search"
                        className="bg-kick-card border border-gray-700 rounded-lg py-2 pl-10 pr-4 text-sm w-full md:w-64 focus:outline-none focus:border-kick-primary"
                    />
                    <RiSearchLine className="absolute left-3 top-2.5 text-gray-400" size={18} />
                </div>
            </div>

            {/* Notifications */}
            <button className="p-2 text-gray-400 hover:text-white relative">
                <img src={bell} alt="Notification" />
                <span className="absolute -top-1 -right-1 bg-kick-primary text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    1
                </span>
            </button>

            {/* User Profile */}
            <div className="flex items-center space-x-2 md:space-x-3">
                <div className="w-8 h-8 md:w-9 md:h-9 bg-gray-700 rounded-full flex items-center justify-center">
                    <img src={person} />
                </div>
                <div className="hidden md:block">
                    <img src={arrowdown} />

                </div>
            </div>
        </div>
    );
};

export default UserNav;

