import React from "react";
import './SideMenu.css';
import { Avatar } from "../../assets/Avatar";


export const SideMenu = () => {
    return (
        <aside className="side-menu">
            <div className="sidemenu-button">
                <Avatar/>
            </div>
        </aside>
    );
}