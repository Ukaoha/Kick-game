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
        <div className="bg-[#151C2F] rounded-xl overflow-hidden shadow-md relative w-62 md:w-full">
            <div className="relative">
                <img
                    src={image}
                    alt={title}
                    className="w-full  object-cover"
                />



                {players && (
                    <div className="absolute top-2 left-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded flex items-center">
                        <span className="mr-1">👤</span>
                        {players}
                    </div>
                )}
            </div>

            <div className="py-4 px-2">
                <div className="flex justify-between items-center">
                    {isNew && (
                        <>
                            <div className="absolute top-2 left-2 bg-[#EA3D17] text-white text-xs font-bold px-2 py-1 rounded-tr rounded-bl z-10 md:hidden">
                                NEW
                            </div>

                            <div className=" bg-[#EA3D17] text-white text-xs font-bold px-2 py-1 rounded hidden md:block">
                                NEW
                            </div>
                        </>
                    )}

                    <div>

                        <h3 className="font-semibold text-lg text-white">{title}</h3>

                        <div className="flex items-center mt-1">
                            {[...Array(starCount)].map((_, i) => (
                                <RiStarFill
                                    key={i}
                                    className={`${i < filledStars ? 'text-yellow-400' : 'text-gray-500'} mr-1`}
                                />
                            ))}
                        </div>
                    </div>
                    <button className="text-white p-2 rounded-full hover:bg-opacity-50 transition-all">
                        <RiHeartLine className="text-lg" />
                    </button>

                </div>

                {/* Star Rating */}


                {rating && (
                    <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded">
                        {rating}
                    </div>
                )}
            </div>
        </div>
    );
};

export default GameCard;