// pages/Leaderboard.jsx
import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayouts';

// Mock leaderboard data
const leaderboardData = [
    { id: 1, rank: 1, username: "GamerPro123", points: 15460, games: 142, avatar: "https://via.placeholder.com/40" },
    { id: 2, rank: 2, username: "NinjaWarrior", points: 14280, games: 130, avatar: "https://via.placeholder.com/40" },
    { id: 3, rank: 3, username: "PixelQueen", points: 12970, games: 115, avatar: "https://via.placeholder.com/40" },
    { id: 4, rank: 4, username: "EpicGamer42", points: 10840, games: 98, avatar: "https://via.placeholder.com/40" },
    { id: 5, rank: 5, username: "TheDestroyer", points: 9650, games: 87, avatar: "https://via.placeholder.com/40" },
    { id: 6, rank: 6, username: "GameMaster", points: 8730, games: 79, avatar: "https://via.placeholder.com/40" },
    { id: 7, rank: 7, username: "LegendaryPlayer", points: 7890, games: 72, avatar: "https://via.placeholder.com/40" },
    { id: 8, rank: 8, username: "ProSniper", points: 7240, games: 65, avatar: "https://via.placeholder.com/40" },
    { id: 9, rank: 9, username: "ShadowHunter", points: 6510, games: 59, avatar: "https://via.placeholder.com/40" },
    { id: 10, rank: 10, username: "PixelWarrior", points: 5980, games: 54, avatar: "https://via.placeholder.com/40" },
];

const Leaderboard = () => {
    const [timeFilter, setTimeFilter] = useState('all');
    const [gameFilter, setGameFilter] = useState('all');

    return (
        <MainLayout title="Leaderboard">
            <div className="bg-dark text-white min-h-screen">
                {/* Header */}
                <section className="mb-8 px-4">
                    <div className="bg-[#171E2F] rounded-xl p-6">
                        <h2 className="text-2xl font-semibold mb-4">Global Leaderboard</h2>
                        <p className="text-[#616161]">Compare your performance with players around the world!</p>
                    </div>
                </section>

                {/* Filters */}
                <section className="mb-8 px-4">
                    <div className="flex flex-wrap gap-4">
                        <div className="flex-1 min-w-[200px]">
                            <label className="block text-[#616161] mb-2">Time Period</label>
                            <select
                                value={timeFilter}
                                onChange={(e) => setTimeFilter(e.target.value)}
                                className="w-full bg-[#171E2F] border border-gray-700 rounded-lg p-3 text-white"
                            >
                                <option value="all">All Time</option>
                                <option value="month">This Month</option>
                                <option value="week">This Week</option>
                                <option value="day">Today</option>
                            </select>
                        </div>
                        <div className="flex-1 min-w-[200px]">
                            <label className="block text-[#616161] mb-2">Game</label>
                            <select
                                value={gameFilter}
                                onChange={(e) => setGameFilter(e.target.value)}
                                className="w-full bg-[#171E2F] border border-gray-700 rounded-lg p-3 text-white"
                            >
                                <option value="all">All Games</option>
                                <option value="arcade">Arcade Games</option>
                                <option value="trivia">Trivia</option>
                            </select>
                        </div>
                    </div>
                </section>

                {/* Leaderboard Table */}
                <section className="px-4">
                    <div className="bg-[#171E2F] rounded-xl overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-700">
                                <thead className="bg-[#111829]">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[#616161] uppercase tracking-wider">
                                            Rank
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[#616161] uppercase tracking-wider">
                                            Player
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[#616161] uppercase tracking-wider">
                                            Points
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[#616161] uppercase tracking-wider">
                                            Games Played
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-[#171E2F] divide-y divide-gray-700">
                                    {leaderboardData.map((player) => (
                                        <tr key={player.id}>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm font-medium text-white">#{player.rank}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 h-10 w-10">
                                                        <img className="h-10 w-10 rounded-full" src={player.avatar} alt="" />
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-white">{player.username}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-white">{player.points.toLocaleString()}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                                                {player.games}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
};

export default Leaderboard;