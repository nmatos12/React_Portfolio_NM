import React from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      name="footer"
      className="bottom-0 w-full h-[80px] flex items-center justify-around bg-slate-900 text-gray-300"
    >
      <ul className="flex flex-row items-center justify-around">
        <li className="w-[80px] h-[60-px] flex items-center">
          <a
            className="flex items-center w-full text-gray-300"
            href="https://www.linkedin.com/in/megan-mcdonough-mathis/"
            target="_blank"
          >
            <FaLinkedin size={30} />
          </a>
        </li>

        <li className="w-[80px] h-[60-px] flex items-center">
          <a
            className="flex items-center w-full text-gray-300"
            href="https://github.com/MegMathis"
            target="_blank"
          >
            <FaGithub size={30} alt="LinkedIn" />
          </a>
        </li>

        <li className="flex items-center w-full text-gray-300">
          <a
            className="flex items-center w-full text-gray-300"
            href="https://www.instagram.com/megz2550/"
            target="_blank"
          >
            <FaInstagram size={30} />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;