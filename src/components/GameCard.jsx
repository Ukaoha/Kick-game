import React from 'react';
import { RiHeartLine, RiStarFill } from 'react-icons/ri';

const GameCard = ({
    title,
    image,
    players,
    filledStars = 5,
    isNew = false,
    starCount = 5,
    rating,
}) => {
    return (
        <div className="bg-gray-800 rounded-xl overflow-hidden shadow-md relative">
            <img
                src={image}
                alt={title}
                className="w-full h-32 object-cover"
            />

            {players && (
                <div className="absolute top-2 left-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded flex items-center">
                    <span className="mr-1">👤</span>
                    {players}
                </div>
            )}



            <div className='flex justify-between items-center px-4 '>
                {isNew && (
                    <>
                        <div className="absolute top-2 left-2 bg-kick-primary text-white text-xs font-bold px-2 py-1 rounded-tr rounded-bl z-10 md:hidden">
                            NEW
                        </div>

                        <div className=" bg-kick-primary text-white text-xs font-bold px-2 py-1 rounded hidden md:block">
                            NEW
                        </div>
                    </>
                )}



                <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{title}</h3>

                    {/* Star Rating */}
                    <div className="flex items-center">
                        {[...Array(starCount)].map((_, i) => (
                            <RiStarFill
                                key={i}
                                className={`${i < filledStars ? 'text-yellow-400' : 'text-gray-500'} mr-1`}
                            />
                        ))}
                    </div>
                </div>

                {rating && (
                    <div className="absolute -top-4 right-4 rating-badge">
                        {rating}
                    </div>
                )}

                <button className="right-3 text-white bg-black bg-opacity-30 p-2 rounded-full hover:bg-opacity-50 transition-all">
                    <RiHeartLine className="text-lg" />
                </button>
            </div>
        </div>
    );
};

export default GameCard;