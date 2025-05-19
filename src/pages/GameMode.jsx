import React from 'react';
import FeaturedGame from '../components/FeaturedGame';
import GameCard from '../components/GameCard';
import MainLayout from '../layouts/MainLayouts';
import movie1 from "../assets/movie1.png";
import movie3 from "../assets/movie3.png";
import movie2 from "../assets/movie2.png";
import featureking from "../assets/featureking.svg";
import featureking2 from "../assets/Featuredking2.svg";

// Mock data for games
const featuredGames = [
    {
        id: 1,
        title: "Ruined King",
        description: "There's a lot to learn about LoL, so we'll start with the essentials.",
        image: featureking,
        rating: "9,2",
        category: "LEAGUE LEGENDS",
        reviews: "3.4k",
        filledStars: 5
    },
    {
        id: 2,
        title: "Fortnite",
        description: "There's a lot to learn about Fortnite, so we'll start with the essentials.",
        image: featureking2,
        rating: "9,4",
        category: "BATTLE ROYALE",
        reviews: "10k",
        filledStars: 5
    }
];

const gameCards = [
    {
        id: 1,
        title: "BIOMUTANT",
        image: movie1,
        isNew: true,
        filledStars: 5
    },
    {
        id: 2,
        title: "DYING LIGHT",
        image: movie2,
        isNew: true,
        filledStars: 5
    },
    {
        id: 3,
        title: "ARCADEGEDDON",
        image: movie3,
        isNew: true,
        filledStars: 5
    }
];

const GameMode = () => {
    return (
        <MainLayout title="Home">
            <div className="bg-dark text-white min-h-screen">
                {/* Featured Games Section */}
                <section className="md:mb-12 mb-0 md:px-0 px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3">
                        <div className="md:col-span-2 md:h-96 h-64 md:mt-0 mt-12">
                            <FeaturedGame {...featuredGames[0]} />
                        </div>
                        {/* Second featured game - hidden on mobile, visible on md and up */}
                        <div className="hidden md:block md:col-span-1 h-96">
                            <FeaturedGame {...featuredGames[1]} />
                        </div>
                    </div>
                </section>

                {/* All Games Section */}
                <section className="md:px-4 px-1">
                    <h2 className="text-2xl font-semibold mb-4">All Games</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {gameCards.map(game => (
                            <GameCard key={game.id} {...game} />
                        ))}
                    </div>
                </section>
            </div>
        </MainLayout>
    );
};

export default GameMode;