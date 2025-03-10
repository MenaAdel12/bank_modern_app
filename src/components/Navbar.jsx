import { useState } from "react";
import { logo, close, menu } from "./../assets";
import { navLinks } from "./../constants/index";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="w-[123px] h-[32px]" />

      <ul
        className="list-none sm:flex hidden
      justify-end items-center"
      >
        {navLinks.map((link, index) => (
          <li
            key={index}
            className={`font-poppins
              font-normal cursor-pointer
              text-[16px] text-white
              ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
          >
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>

      <div
        className={`sm:hidden flex flex-1
      justify-end items-center`}
      >
        <img
          src={`${toggle ? close : menu}`}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div className={`${toggle ? "flex" : "hidden"}
        p-6 bg-black-gradient absolute top-20 right-0
        mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul
            className="list-none flex flex-col
            justify-end items-center"
          >
            {navLinks.map((link, index) => (
              <li
                key={index}
                className={`font-poppins
              font-normal cursor-pointer
              text-[16px] text-white
              ${index === navLinks.length - 1 ? "mb-0" : "mb-10"}`}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
