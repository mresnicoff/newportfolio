'use client'
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from 'next/link'

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
      path:"/"
    },
    {
      id: 2,
      link: "about",
      path: "/about"
    },
    {
      id: 3,
      link: "portfolio",
      path:"/projects"
    },
    {
      id: 4,
      link: "experience",
      path:"/experience"
    },
    {
      id: 5,
      link: "contact",
      path:"/contact"
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-15 px-4 text-white fixed bg-neutral-200 dark:bg-black py-2 ">
        <div>
        <h1 className="text-4xl font-signature ml-2 text-black dark:text-white">Martin Resnicoff</h1>
      </div>

      <ul className="hidden md:flex ">
        {links.map(({ id, link, path }) => (
          <Link
            key={id}
            href={path}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 duration-200"
          >{link}</Link>
        ))}
      </ul>

    </div>
  );
};

export default NavBar;