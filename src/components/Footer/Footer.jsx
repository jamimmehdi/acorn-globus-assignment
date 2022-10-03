import React from 'react';
import "./Footer.scss";
const footerMenu = ["about us", "tour", "help", "blog", "chat", "data", "legal", "privacy policy", "work here", "advertising info", "mobile", "contact us", "feedback"];
const bodyMenu = [
    { heading: "technology", menu: ["stack overflow", "server fault", "super user", "web applications", "ask ubuntu", "webmasters", "game development", "teX, lateX"] },
    { heading: "life/arts", menu: ["photography", "science fiction and fantacy", "graphic design", "movies and TV", "Seasoned Advice", "Home Improvement", "Personal Fincance & money"] },
    { heading: "culture/recreation", menu: ["photography", "science fiction and fantacy", "graphic design", "movies and TV", "Seasoned Advice", "Home Improvement", "Personal Fincance & money"] },
    { heading: "science", menu: ["photography", "science fiction and fantacy", "graphic design", "movies and TV", "Seasoned Advice", "Home Improvement", "Personal Fincance & money"] },
    { heading: "others", menu: ["photography", "science fiction and fantacy", "graphic design", "movies and TV", "Seasoned Advice", "Home Improvement", "Personal Fincance & money"] },
];

export default function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-wrapper">
                <div className="footer-top-menu">
                    {footerMenu && footerMenu.map((menu, index) => (
                        <span key={index} className='menu-item'>{menu}</span>
                    ))}
                </div>
                <div className="footer-body-menu">
                    {bodyMenu && bodyMenu.map((item, index) => (
                        <div key={index} className="sec">
                            <span className="heading">{item.heading.toUpperCase()}</span>
                            <span className="menu-container">
                                {item.menu && item.menu.map((menu, index) => (
                                    <span key={index} className="menu-item">{menu.split(" ").map((word) => word.substring(0, 1).toUpperCase() + word.substring(1)).join(" ")}</span>
                                ))}
                            </span>
                        </div>
                    ))}
                </div>
                <div className="footer-bottom">
                    <p>site design / logo © 2016 Stack Exchange Inc; user contribution licensed under cc by-sa 3.0 with attribution required</p>
                </div>
            </div>
        </div>
    )
}
