import React from "react";

import '@/styles/dashboard/navBarDashboard.css'



function AvatarCard() {
    return (
        <div className="avatar-card">
            <img src="./images/user.jpg" className="w-16 rounded-full" />
            <div>
                <p className="font-semibold">Seif Mohamed</p>
                <p className="text-xs">A Premimum User</p>
            </div>
        </div>
    )
}

export default AvatarCard