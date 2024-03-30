// export function Header() {
//     return (
//         <div className="flex justify-between items-center p-1 pb-2">
//             <div className="text-white">
//                 <h1 className="text-2xl pl-5 font-bold">Abdul Mannan</h1>
//             </div>
//             <div className="flex justify-between items-center space-x-4 pr-5">
//             <a href="https://google.com"><button className="bg-white rounded-lg text-sm text-gray-800 font-semibold py-2 px-4">Resume</button></a>
//                 <button className="bg-white rounded-lg text-sm text-gray-800 font-semibold py-2 px-4" section="#projects">Projects</button>
//                 <button className="bg-white rounded-lg text-sm text-gray-800 font-semibold py-2 px-4">Internships</button>
//                 <button className="bg-white rounded-lg text-sm text-gray-800 font-semibold py-2 px-4">Contact me</button>
//             </div>
//         </div>
//     );
// }
import { useState } from 'react';

export function Header() {
    // State to manage dropdown visibility
    const [dropdownOpen, setDropdownOpen] = useState(false);

    // Function to toggle dropdown visibility
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div className="flex justify-between items-center p-1 pb-2">
            <div className="text-white">
                <h1 className="text-2xl pl-5 font-bold">Abdul Mannan</h1>
            </div>
            <div className="relative">
                <button onClick={toggleDropdown} className="md:hidden bg-white rounded-lg text-sm text-gray-800 font-semibold py-2 px-4">Menu</button>
                {/* Dropdown menu */}
                <div className={`absolute ${dropdownOpen ? 'block' : 'hidden'} right-0 mt-1 w-48 bg-white rounded-lg shadow-md z-10`}>
                    <a href="https://google.com" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Resume</a>
                    <a href="#projects" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Projects</a>
                    <a href="#internships" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Internships</a>
                    <a href="#contact" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Contact me</a>
                </div>
            </div>
            <div className="hidden md:flex items-center space-x-4 pr-5">
                <a href="https://google.com"><button className="bg-white rounded-lg text-sm text-gray-800 font-semibold py-2 px-4">Resume</button></a>
                <a href="#projects"><button className="bg-white rounded-lg text-sm text-gray-800 font-semibold py-2 px-4">Projects</button> </a>
                <a href="#internships"><button className="bg-white rounded-lg text-sm text-gray-800 font-semibold py-2 px-4">Internships</button> </a>
                <a href="#contact"><button className="bg-white rounded-lg text-sm text-gray-800 font-semibold py-2 px-4">Contact me</button> </a>
            </div>
        </div>
    );
}





