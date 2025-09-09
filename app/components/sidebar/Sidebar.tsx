"use client";
import { useState, useEffect } from "react";
import MobileSidebar from "./mobileSidebar/MobileSidebar";
import DesktopSidebar from "./desktopSidebar/DesktopSidebar";

const Sidebar = () => {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <aside>
            {isDesktop ? <DesktopSidebar /> : <MobileSidebar />}
        </aside>
    );
};

export default Sidebar;
