import React from "react";

import '@/styles/dashboard/navBarDashboard.css'



function AvatarCard() {
    return (
        <div className="avatar-card">
            <img src="./images/user.jpg" className="w-16 rounded-full" />
            <div>
                <p>Seif Mohamed</p>
                <p>A Premimum User</p>
            </div>
        </div>
    )
}

export default AvatarCard