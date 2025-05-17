import React from 'react';
import MainLayout from '../layouts/MainLayouts';
import movie2 from "../assets/movie2.png";

const triviaCategories = [
    { id: 1, name: "Movies & TV", questions: 250, color: "bg-blue-500" },
    { id: 2, name: "Video Games", questions: 180, color: "bg-green-500" },
    { id: 3, name: "Science", questions: 120, color: "bg-purple-500" },
    { id: 4, name: "Sports", questions: 200, color: "bg-yellow-500" },
    { id: 5, name: "History", questions: 150, color: "bg-red-500" },
    { id: 6, name: "Geography", questions: 130, color: "bg-indigo-500" },
    { id: 7, name: "Music", questions: 170, color: "bg-pink-500" },
    { id: 8, name: "Technology", questions: 140, color: "bg-teal-500" }
];

const TriviaCard = ({ name, questions, color }) => {
    return (
        <div className="bg-[#171E2F] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className={`${color} h-2`}></div>
            <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{name}</h3>
                <p className="text-[#616161]">{questions} questions</p>
                <button className="mt-4 bg-[#FF1975] text-white py-2 px-4 rounded-lg hover:bg-opacity-80 transition-colors w-full">
                    Play Now
                </button>
            </div>
        </div>
    );
};

const Trivia = () => {
    return (
        <MainLayout title="Kick Trivia">
            <div className="bg-dark text-white min-h-screen">
                {/* Hero Section */}
                <section className="mb-12 px-4">
                    <div className="relative w-full h-64 rounded-xl overflow-hidden">
                        <img
                            src={movie2}
                            alt="Trivia Banner"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-6">
                            <h2 className="text-3xl font-bold mb-2">Kick Trivia</h2>
                            <p className="text-gray-300">Test your knowledge and earn rewards!</p>
                        </div>
                    </div>
                </section>

                {/* Daily Challenge */}
                <section className="px-4 mb-12">
                    <div className="bg-[#171E2F] rounded-xl p-6">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-2xl font-semibold">Daily Challenge</h2>
                            <span className="bg-[#FF1975] text-white px-3 py-1 rounded-full text-sm">2X Points</span>
                        </div>
                        <p className="text-[#616161] mb-4">Complete today's challenge to earn bonus points!</p>
                        <button className="bg-[#FF1975] text-white py-3 px-6 rounded-lg hover:bg-opacity-80 transition-colors">
                            Start Challenge
                        </button>
                    </div>
                </section>

                {/* Categories Section */}
                <section className="px-4">
                    <h2 className="text-2xl font-semibold mb-6">Categories</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {triviaCategories.map(category => (
                            <TriviaCard
                                key={category.id}
                                name={category.name}
                                questions={category.questions}
                                color={category.color}
                            />
                        ))}
                    </div>
                </section>
            </div>
        </MainLayout>
    );
};

export default Trivia;