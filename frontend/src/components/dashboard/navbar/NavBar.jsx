import React from "react";

import '@/styles/dashboard/navBarDashboard.css'
import AvatarCard from "./AvatarCard";
import MenuSectionNavBar from "./MenuSectionNavBar";

function NavBar() {
    return (
        <div className="navBarContainer">
            <AvatarCard />
            <MenuSectionNavBar />
            <MenuSectionNavBar />
            <MenuSectionNavBar />
        </div>
    );
}

export default NavBar;