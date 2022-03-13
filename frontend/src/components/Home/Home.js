import React from "react";
import './Home.css';
import { Link } from "react-router-dom";


const content = () => {;
    return (
        <div>
            <div className="max-w-7xl mx-auto mt-20 p-10 shadow items-center justify-center">
                <p className="text-3xl font-bold  ">Admin Panel</p>
                <div className="flex items-center justify-between mt-10 w-70">
                    <Link to="/ipgeo" className="border-2 border-purple-600 text-black px-32 py-3 rounded-md text-1xl font-medium hover:bg-purple-600 transition duration-300">IP Geolocation</Link>
                    <Link to="/charts" className="bg-blue-500 text-white px-32 py-3 rounded-md text-1xl font-medium hover:bg-blue-700 transition duration-300">View Charts</Link>
                </div>
            </div>
        </div>
        );
}

export default content;