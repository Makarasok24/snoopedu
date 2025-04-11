import React, { useState, useEffect } from 'react';
import { useLocation, Outlet, Link } from 'react-router-dom';
import { IoBook, IoGrid, IoPeople, IoSettings, IoWallet } from 'react-icons/io5';
import { FaUserGraduate } from 'react-icons/fa';
import MenuItem from './components/MenuItem';

const StudentLayout = () => {
    const location = useLocation();
    const [activeMenu, setActiveMenu] = useState("Dashboard");

    useEffect(() => {
        // Set the active menu based on the current path
        if (location.pathname.includes("/admin/dashboard")) {
            setActiveMenu("Dashboard");
        } else if (location.pathname.includes("/admin/courses")) {
            setActiveMenu("Courses");
        } else if (location.pathname.includes("/admin/students")) {
            setActiveMenu("Students");
        } else if (location.pathname.includes("/admin/instructors")) {
            setActiveMenu("Instructors");
        } else if (location.pathname.includes("/admin/payments")) {
            setActiveMenu("Payments");
        } else if (location.pathname.includes("/admin/author")) {
            setActiveMenu("Author");
        }
    }, [location.pathname]);

    const handleMenuClick = (label) => {
        setActiveMenu(label);
    };

    return (
        <div className="flex flex-col w-full h-screen">
            <div className="flex flex-row w-full h-screen">
                <div className="bg-secondary w-[300px] py-10 flex flex-col items-center fixed h-full">
                <Link to={"/student/dashboard"} className="w-[48px] md:w-[96px]">
                    <img src="https://snoopedu.com/app/themes/snoopedu/resources/assets/images/logo.svg" alt="snoopedu logo" />
                </Link>
                    <nav className="flex flex-col w-full px-4 mt-5 text-white">
                        <MenuItem
                            to="/student/dashboard"
                            icon={<IoGrid />}
                            label="Dashboard"
                            onClick={() => handleMenuClick("Dashboard")}
                            isActive={activeMenu === "Dashboard"}
                        />
                        <MenuItem
                            to="/student/courses"
                            icon={<IoBook />}
                            label="My Courses"
                            onClick={() => handleMenuClick("Courses")}
                            isActive={activeMenu === "Courses"}
                        />

                    </nav>
                </div>
                <main className="w-full ml-[300px] overflow-y-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default StudentLayout;