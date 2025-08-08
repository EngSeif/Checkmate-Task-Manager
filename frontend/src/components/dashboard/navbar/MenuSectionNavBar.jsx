import React from "react";
import IconComponent from "./IconComponent";
import "@/styles/dashboard/MenuSectionNavBar.css"

function MenuSectionNavBar() {
    return (
        <div className="MenuSectionNavBarContainer">
            <span className="w-[80%] text-left text-[0.8rem] text-[#A0A7A9] font-semibold">MENU</span>
            <IconComponent />
            <IconComponent />
            <IconComponent />
        </div>
    );
}

export default MenuSectionNavBar;