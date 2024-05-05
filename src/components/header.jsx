import React, { useEffect } from 'react';

const Header = () => {
    
    useEffect(() => {
        const handleMouseMove = (e) => {
            const header = document.querySelector("header");
            const rect = header.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            header.style.setProperty("--mouse-x", `${x}px`);
            header.style.setProperty("--mouse-y", `${y}px`);
        };

        const header = document.querySelector("header");
        header.addEventListener("mousemove", handleMouseMove);

        return () => {
            header.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <header className="header" id="header">
            <div className="animefinder"><strong>ANIME FINDER</strong></div>
        </header>
    );
};

export default Header;
