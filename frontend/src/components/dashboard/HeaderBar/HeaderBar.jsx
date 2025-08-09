import React from "react";
import { Bell, Menu } from "lucide-react";
import '@/styles/dashboard/HeaderBar.css'

function HeaderBar() {
    return (
        <div className="HeadderBarContainer">
            <h2>Dashboard Activity</h2>
            <div className="UtilityIconsContainer">
                <span className="UtilityIconsStyle">
                    <Bell />
                </span>
                <span className="UtilityIconsStyle">
                    <Menu />
                </span>
            </div>
        </div>
    );
}

export default HeaderBar