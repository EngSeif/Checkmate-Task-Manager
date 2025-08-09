import React from "react";
import '@/styles/dashboard/navBarDashboard.css'

import NavBar from "@/components/dashboard/navbar/NavBar.jsx";
import HeaderBar from "@/components/dashboard/HeaderBar/HeaderBar";


function Dashboard() {
    return (
        <div className="mainDashboardContainer">
            <NavBar />
            <div className="w-full">
                    <HeaderBar />
            </div>
        </div>
    );
}

export default Dashboard;