import React from "react";
import '@/styles/dashboard/navBarDashboard.css'

import NavBar from "@/components/dashboard/navbar/NavBar.jsx";


function Dashboard() {
    return (
        <div className="mainDashboardContainer">
            <NavBar />
        </div>
    );
}

export default Dashboard;