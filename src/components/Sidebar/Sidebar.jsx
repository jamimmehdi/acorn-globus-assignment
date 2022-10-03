import React from 'react';
import Logo from '../Logo/Logo';
import "./Sidebar.scss";

export default function Sidebar() {
    return (
        <div className="side-container">
            <div className="logo-container">
                <Logo />
            </div>
            <div className="side-menu-container border">

            </div>
        </div>
    )
}
