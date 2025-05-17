// pages/Arcade.jsx
import React from 'react';
import MainLayout from '../layouts/MainLayouts';
import GameCard from '../components/GameCard';
import movie1 from "../assets/movie1.png";
import movie2 from "../assets/movie2.png";
import movie3 from "../assets/movie3.png";

// Mock data for arcade games
const arcadeGames = [
    {
        id: 1,
        title: "TETRIS EFFECT",
        image: movie1,
        players: "3214",
        filledStars: 5
    },
    {
        id: 2,
        title: "PAC-MAN 256",
        image: movie2,
        players: "1850",
        filledStars: 4
    },
    {
        id: 3,
        title: "GEOMETRY DASH",
        image: movie3,
        players: "2730",
        filledStars: 5
    },
    {
        id: 4,
        title: "GALAGA",
        image: movie1,
        players: "1254",
        filledStars: 4
    },
    {
        id: 5,
        title: "SPACE INVADERS",
        image: movie2,
        players: "986",
        filledStars: 3
    },
    {
        id: 6,
        title: "FROGGER",
        image: movie3,
        players: "1432",
        filledStars: 4
    }
];

const Arcade = () => {
    return (
        <MainLayout title="Kick Arcade">
            <div className="bg-dark text-white min-h-screen">
                {/* Featured Arcade Game */}
                <section className="mb-12 px-4">
                    <div className="relative w-full h-64 rounded-xl overflow-hidden">
                        <img
                            src={movie1}
                            alt="Featured Arcade Game"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-6">
                            <h2 className="text-3xl font-bold mb-2">Arcade Games</h2>
                            <p className="text-gray-300">Play classic arcade games and earn points!</p>
                        </div>
                    </div>
                </section>

                {/* Arcade Games Section */}
                <section className="px-4">
                    <h2 className="text-2xl font-semibold mb-6">Popular Arcade Games</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {arcadeGames.map(game => (
                            <GameCard key={game.id} {...game} />
                        ))}
                    </div>
                </section>
            </div>
        </MainLayout>
    );
};

export default Arcade;