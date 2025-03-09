import React, { useState } from "react";
import CoderGif from "../assets/coder.gif";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { Link } from "react-scroll"; 

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="flex justify-between p-5 items-center bg-gradient-to-t from-slate-300 to-slate-400">
      <img className="w-24 rounded-full" src={CoderGif} alt="Coder" />

      
      <nav className="hidden md:block">
        <ul className="flex space-x-7">
          <li className="font-medium hover:text-zinc-300">
            <Link to="about" smooth={true} duration={500}>About</Link>
          </li>
          <li className="font-medium hover:text-zinc-300">
            <a href="Resume.pdf" download='Akash_Resume.pdf'>Resume</a>
          </li>
          <li className="font-medium hover:text-zinc-300">
            <Link to="overview" smooth={true} duration={500}>Overview</Link>
          </li>
          <li className="font-medium hover:text-zinc-300">
            <Link to="projects" smooth={true} duration={500}>Projects</Link>
          </li>
          <li className="font-medium hover:text-zinc-300">
            <Link to="contact" smooth={true} duration={500}>Contact</Link>
          </li>
        </ul>
      </nav>

      
      {toggleMenu && (
        <nav className="block md:hidden">
          <ul className="flex flex-col mobile-nav">
            <li className="font-medium hover:text-zinc-300">
              <Link to="home" smooth={true} duration={500} onClick={() => setToggleMenu(false)}>Home</Link>
            </li>
            <li className="font-medium hover:text-zinc-300">
              <Link to="about" smooth={true} duration={500} onClick={() => setToggleMenu(false)}>About</Link>
            </li>
            <li className="font-medium hover:text-zinc-300">
              <Link to="resume" smooth={true} duration={500} onClick={() => setToggleMenu(false)}>Resume</Link>
            </li>
            <li className="font-medium hover:text-zinc-300">
              <Link to="projects" smooth={true} duration={500} onClick={() => setToggleMenu(false)}>Projects</Link>
            </li>
            <li className="font-medium hover:text-zinc-300">
              <Link to="contact" smooth={true} duration={500} onClick={() => setToggleMenu(false)}>Contact</Link>
            </li>
          </ul>
        </nav>
      )}

     
      <button className="block md:hidden" onClick={() => setToggleMenu(!toggleMenu)}>
        <Bars3Icon className="text-white h-10" />
      </button>
    </header>
  );
};

export default Header;
