import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Aos from "aos";
import "aos/dist/aos.css";

const UserLayout = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: false,
    });
  }, []);

  useEffect(() => {
    Aos.refresh();
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-200 text-gray-800">
      <Navbar />
      <main className="grow w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default UserLayout;
