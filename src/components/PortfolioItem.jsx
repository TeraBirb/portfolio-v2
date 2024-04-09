import React from "react";

const PortfolioItem = ({ title, imgUrl, stack, link }) => {
    return (
        <div className="border-2 border-stone-900 rounded-md overflow-hidden">
            <img
                src={imgUrl}
                alt="portfolio"
                className="w-full h-36 md:h-48 object-cover cursor-pointer"
            />
            <div className="w-full p-4">
                <h3 className="text-lg med:text-xl mb-2 md:mb-3 font-semibold">
                    {title}
                </h3>
                <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
                    {stack.map((tech) => (
                        <span
                            className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 rounded-md"
                            key={tech}
                            // mystery code lol
                            // className="text-xs bg-gray-200 text-gray-800 p-1 rounded-md mr-1"
                        >
                            {tech}
                        </span>
                    ))}
                </p>
            </div>
        </div>
    );
};

export default PortfolioItem;
