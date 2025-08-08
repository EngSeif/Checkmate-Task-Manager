import React from "react";
import { House } from "lucide-react"
import '@/styles/dashboard/IconComponent.css'

function IconComponent() {
    return (
        <div className="IconComponentContainer">
            <House/>
            <span>Home</span>
        </div>
    )
}

export default IconComponent;