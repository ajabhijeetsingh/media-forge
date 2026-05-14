// 'use client';

// import { useState } from 'react';

// const COMPONENTS = [
//     { name: 'Hero', id: 'hero' },
//     { name: 'About', id: 'about' },
//     { name: 'Work Grid', id: 'workgrid' },
// ];

// export default function Header() {
//     const [sidebarOpen, setSidebarOpen] = useState(false);

//     const handleNavigation = (sectionId: string) => {
//         const element = document.getElementById(sectionId);
//         if (element) {
//             element.scrollIntoView({ behavior: 'smooth' });
//         }
//         setSidebarOpen(false);
//     };

//     return (
//         <header className="absolute top-0 left-0 right-0 max-w-7xl mx-auto w-full flex justify-between items-start px-8 py-10 z-50">

//             {/* Logo Image */}
//             <a href="/" className="flex-shrink-0">
//                 <img
//                     src="/Assets/images/logo.png"
//                     alt="Media Forge Logo"
//                     className="h-14 md:h-20 w-auto object-contain"
//                 />
//             </a>

//             {/* Right Section */}
//             <div className="flex items-start gap-6">
//                 {/* Button with updated padding and text casing */}
//                 <button className="hidden md:block border border-black px-8 py-5 rounded-full text-base font-medium hover:bg-black hover:text-white transition-colors duration-300 mt-7 bg-white">
//                     Work with us
//                 </button>

//                 {/* Hover Menu Container - Only Hamburger */}
//                 <div
//                     className="flex items-start"
//                     onMouseEnter={() => setSidebarOpen(true)}
//                     onMouseLeave={() => setSidebarOpen(false)}
//                 >
//                     {/* Hamburger Menu Button */}
//                     <button
//                         className="flex flex-col justify-right items-center w-8 h-8 gap-1.5 mt-13 cursor-pointer group"
//                         aria-label="Menu"
//                     >
//                         <span className="w-6 h-0.5 bg-black block group-hover:scale-110 transition-transform duration-300 origin-center"></span>
//                         <span className="w-6 h-0.5 bg-black block group-hover:scale-110 transition-transform duration-300 origin-center"></span>
//                         <span className="w-6 h-0.5 bg-black block group-hover:scale-110 transition-transform duration-300 origin-center"></span>
//                     </button>

//                     {/* Sidebar Overlay */}
//                     {sidebarOpen && (
//                         <div
//                             className="fixed inset-0 bg-black bg-opacity-20 z-50 transition-opacity duration-500 ease-in-out"
//                         ></div>
//                     )}

//                     {/* Sidebar */}
//                     <div
//                         className={`fixed top-0 right-0 h-full w-100 bg-white shadow-2xl transform transition-all duration-500 ease-in-out z-50 ${sidebarOpen
//                             ? 'translate-x-0 opacity-100 visible'
//                             : 'translate-x-full opacity-0 invisible'
//                             } flex flex-col`}
//                         onMouseLeave={() => setSidebarOpen(false)}
//                     >
//                         {/* Close Button */}
//                         <button
//                             onClick={() => setSidebarOpen(false)}
//                             className="self-end p-6 text-2xl font-light hover:rotate-90 transition-transform duration-300"
//                         >
//                             ✕
//                         </button>

//                         {/* Navigation Items */}
//                         <nav className="flex flex-col gap-2 px-6 pb-6 flex-1">
//                             <h1 className="text-lg font-bold italic mb-8 text-gray-1000">COMPONENTS</h1>
//                             {COMPONENTS.map((component) => (
//                                 <button
//                                     key={component.id}
//                                     onClick={() => handleNavigation(component.id)}
//                                     className="text-left py-3 px-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-medium text-gray-700 hover:text-black hover:translate-x-1 hover:shadow-sm"
//                                 >
//                                     {component.name}
//                                 </button>
//                             ))}
//                         </nav>
//                     </div>
//                 </div>
//             </div>
//         </header>
//     );
// }



'use client';

import { useState } from 'react';

const COMPONENTS = [
    { name: 'Hero', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Work Grid', id: 'workgrid' },
];

export default function Header() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleNavigation = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setSidebarOpen(false);
    };

    return (
        <header className="absolute top-0 left-0 right-0 max-w-7xl mx-auto w-full flex justify-between items-start px-8 py-10 z-50">

            {/* Logo Image */}
            <a href="/" className="flex-shrink-0">
                <img
                    src="/Assets/images/logo.png"
                    alt="Media Forge Logo"
                    className="h-14 md:h-20 w-auto object-contain"
                />
            </a>

            {/* Right Section */}
            <div className="flex items-start gap-6">
                
                {/* Desktop "Work with us" Button (Hidden on Mobile) */}
                <button className="hidden md:block border border-black px-8 py-3 rounded-full text-base font-medium hover:bg-black hover:text-white transition-colors duration-300 mt-1 bg-white">
                    Work with us
                </button>

                {/* Hover Menu Container */}
                <div
                    className="flex items-start"
                    onMouseEnter={() => setSidebarOpen(true)}
                >
                    {/* Hamburger Menu Button */}
                    <button
                        className="flex flex-col justify-center items-end w-10 h-10 gap-1.5 cursor-pointer group mt-2"
                        aria-label="Menu"
                        onClick={() => setSidebarOpen(true)}
                    >
                        <span className="w-8 h-[2px] bg-black block transition-all duration-300 origin-right"></span>
                        <span className="w-6 h-[2px] bg-black block transition-all duration-300 origin-right group-hover:w-8"></span>
                        <span className="w-8 h-[2px] bg-black block transition-all duration-300 origin-right"></span>
                    </button>

                    {/* Sidebar Overlay (Clicking this closes the menu) */}
                    {sidebarOpen && (
                        <div
                            onClick={() => setSidebarOpen(false)}
                            className="fixed inset-0 bg-black/30 z-40 transition-opacity duration-500 ease-in-out cursor-pointer"
                        ></div>
                    )}

                    {/* Sidebar (Fixed width for mobile) */}
                    <div
                        className={`fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white shadow-2xl transform transition-transform duration-500 ease-in-out z-50 flex flex-col ${sidebarOpen
                            ? 'translate-x-0'
                            : 'translate-x-full'
                            }`}
                        onMouseLeave={() => setSidebarOpen(false)}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setSidebarOpen(false)}
                            className="self-end p-6 text-2xl font-light hover:rotate-90 transition-transform duration-300 mt-4 mr-2"
                            aria-label="Close menu"
                        >
                            ✕
                        </button>

                        {/* Navigation Items */}
                        <nav className="flex flex-col gap-2 px-8 pb-6 flex-1 mt-4">
                            <h1 className="text-sm font-bold tracking-widest text-gray-400 mb-6">COMPONENTS</h1>
                            {COMPONENTS.map((component) => (
                                <button
                                    key={component.id}
                                    onClick={() => handleNavigation(component.id)}
                                    className="text-left py-4 text-2xl font-serif text-gray-800 hover:text-black hover:translate-x-2 transition-all duration-300 border-b border-gray-100 last:border-0"
                                >
                                    {component.name}
                                </button>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}

