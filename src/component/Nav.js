import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

function Nav() {
  const [isHovered, setIsHovered] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  const [activePage, setActivePage] = useState(1);

  const handleHover = (index, bool) => {
    setIsHovered((prevState) => {
      const updatedArray = [...prevState]; // Create a copy of the state array
      updatedArray[index] = bool; // Update the value at the specified index
      return updatedArray; // Return the updated array
    });
  };

  return (
    <nav className="flex items-center">
      <div className="relative">
        <div className="bg-[#B8A47F] rounded-full absolute w-40 h-40 -z-10 top-[-3rem] left-2"></div>
        <img src={logo} alt="logo" className="w-32 mt-4 ml-6"></img>
      </div>
      <div className="ml-20 flex space-x-20 items-center">
        <Link
          className="flex items-center space-x-2"
          onMouseEnter={() => handleHover(0, true)}
          onMouseLeave={() => handleHover(0, false)}
          onClick={() => setActivePage(1)}
        >
          {isHovered[0] || activePage === 1 ? (
            <div className="w-8 bg-[#B8A47F] h-[1.5px]"></div>
          ) : null}
          <p className="text-sm font-bold tracking-tight">
            NAVY SALT {isHovered[0]}
          </p>
          {isHovered[0] || activePage === 1 ? (
            <div className="w-1 h-1 bg-[#B8A47F] rounded-full"></div>
          ) : null}
        </Link>

        <Link
          className="flex items-center space-x-2"
          onMouseEnter={() => handleHover(1, true)}
          onMouseLeave={() => handleHover(1, false)}
          onClick={() => setActivePage(2)}
        >
          {isHovered[1] || activePage === 2 ? (
            <div className="w-8 bg-[#B8A47F] h-[1.5px]"></div>
          ) : null}
          <p className="text-sm font-bold tracking-tight">VOYAGER</p>
          {isHovered[1] || activePage === 2 ? (
            <div className="w-1 h-1 bg-[#B8A47F] rounded-full"></div>
          ) : null}
        </Link>

        <Link
          className="flex items-center space-x-2"
          onMouseEnter={() => handleHover(2, true)}
          onMouseLeave={() => handleHover(2, false)}
          onClick={() => setActivePage(3)}
        >
          {isHovered[2] || activePage === 3 ? (
            <div className="w-8 bg-[#B8A47F] h-[1.5px]"></div>
          ) : null}
          <p className="text-sm font-bold tracking-tight">DRIFTER</p>
          {isHovered[2] || activePage === 3 ? (
            <div className="w-1 h-1 bg-[#B8A47F] rounded-full"></div>
          ) : null}
        </Link>

        <Link
          className="flex items-center space-x-2"
          onMouseEnter={() => handleHover(3, true)}
          onMouseLeave={() => handleHover(3, false)}
          onClick={() => setActivePage(4)}
        >
          {isHovered[3] || activePage === 4 ? (
            <div className="w-8 bg-[#B8A47F] h-[1.5px]"></div>
          ) : null}
          <p className="text-sm font-bold tracking-tight">COLLECTION</p>
          {isHovered[3] || activePage === 4 ? (
            <div className="w-1 h-1 bg-[#B8A47F] rounded-full"></div>
          ) : null}
        </Link>

        <Link
          className="flex items-center space-x-2"
          onMouseEnter={() => handleHover(4, true)}
          onMouseLeave={() => handleHover(4, false)}
          onClick={() => setActivePage(5)}
        >
          {isHovered[4] || activePage === 5 ? (
            <div className="w-8 bg-[#B8A47F] h-[1.5px]"></div>
          ) : null}
          <p className="text-sm font-bold tracking-tight">CONTACT</p>
          {isHovered[4] || activePage === 5 ? (
            <div className="w-1 h-1 bg-[#B8A47F] rounded-full"></div>
          ) : null}
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
