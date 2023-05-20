import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = (props) => {
  const [menu, setMenu] = useState(false);
  const handleClick = () => setMenu(!menu);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-slate-900 text-gray-300">
      <a href="/">
        <div className="text-4xl font-extrabold font-style: italic">
          Natalie Matos
        </div>
      </a>
      {/* nav menu */}

      <ul className="hidden md:flex">
        <li>
          <a
            href="#"
            onClick={() => props.handlePageChange("About")}
            className={
              props.page === "About" ? "border-b-2 border-#E2E8F0" : ""
            }
          >
            About Me
          </a>
        </li>

        <li>
          <a
            href="#"
            onClick={() => props.handlePageChange("Projects")}
            className={
              props.page === "Projects" ? "border-b-2 border-#E2E8F0" : ""
            }
          >
            Projects
          </a>
        </li>

        <li>
          <a
            href="#"
            onClick={() => props.handlePageChange("Resume")}
            className={
              props.page === "Resume" ? "border-b-2 border-#E2E8F0" : ""
            }
          >
            Resume
          </a>
        </li>

        <li>
          <a
            href="#"
            onClick={() => props.handlePageChange("Contact")}
            className={
              props.page === "Contact" ? "border-b-2 border-#E2E8F0" : ""
            }
          >
            Contact
          </a>
        </li>
      </ul>

      {/* 4 horizonal line thing - fabars and an x faTimes */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!menu ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}
      <ul
        className={
          !menu
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
        onClick={() => setMenu(false)}
      >
        <li className="py-6 text-4xl">
          <a href="#" onClick={() => props.handlePageChange("About")}>
            About Me
          </a>
        </li>
        <li className="py-6 text-4xl">
          <a href="#" onClick={() => props.handlePageChange("Resume")}>
            Resume
          </a>
        </li>
        <li className="py-6 text-4xl">
          <a href="#" onClick={() => props.handlePageChange("Projects")}>
            Projects
          </a>
        </li>
        <li className="py-6 text-4xl">
          <a href="#" onClick={() => props.handlePageChange("Contact")}>
            Contact Me
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;