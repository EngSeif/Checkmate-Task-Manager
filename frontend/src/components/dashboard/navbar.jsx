import React from "react";

import '@/styles/dashboard/navBarDashboard.css'
import AvatarCard from "./avatarCard";

function NavBar() {
    return (
        <div className="navBarContainer">
            <AvatarCard />
        </div>
    );
}

export default NavBar;