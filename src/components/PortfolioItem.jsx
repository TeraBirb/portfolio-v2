import React from "react";

const linkIcon = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
        />
    </svg>
);

const hostIcon = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
        />
    </svg>
);

const PortfolioItem = ({ title, imgUrl, stack, link, host }) => {
    return (
        <div className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden">
            <img
                src={imgUrl}
                alt="portfolio"
                className="w-full h-36 md:h-48 object-cover"
            />
            <div className="w-full p-4">
                <h3 className="text-lg med:text-xl mb-2 md:mb-3 font-semibold dark:text-white ">
                    {title}
                </h3>
                <div className="flex flex-row">
                    {host && (
                        <div className="mr-2">
                            <a
                                href={host}
                                target="_blank"
                                rel="noreferrer"
                                className="text-xs md:text-sm text-blue-500 dark:text-blue-400"
                            >
                                {hostIcon}
                            </a>
                        </div>
                    )}
                    <div className="w-6 mb-3">
                        <a
                            href={link}
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-500 dark:text-blue-400"
                        >
                            {linkIcon}
                        </a>
                    </div>
                </div>
                <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
                    {stack.map((tech) => (
                        <span
                            className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white dark:text-white rounded-md"
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
