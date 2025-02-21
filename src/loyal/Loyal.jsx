import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Loader from "../Loader";

const Loyal = ({ children }) => {
    const [loader, setLoader] = useState(true);
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("theme") === "dark"
    );

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoader(false);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    return loader ? (
        <Loader />
    ) : (
        <div className={darkMode ? "dark bg-gray-900 text-white" : "bg-white text-black"}>
            <Header />
            <button
                className="p-2 bg-gray-300 dark:bg-gray-700 text-white rounded-lg m-4"
                onClick={() => setDarkMode(!darkMode)}
            >
                {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
            {children}
            <Footer />
        </div>
    );
};

export default Loyal;