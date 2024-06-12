"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CgClose, CgMenuRight } from "react-icons/cg";
import Nav from "./Nav";
import Button from "./Button";

const Header = () => {
  const [active, setActive] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);
  const toggleMenu = () => setMenuOpened(!menuOpened);

  useEffect(() => {
    const handleScroll = () => {
      // detect scroll
      setActive(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        active ? "bg-blue-600 text-white shadow-lg py-2 z-50 " : "bg-blue-600 text-white py-3 z-50"
      } fixed top-0 w-full z-50 left-0 right-0 transition-all duration-200`}
    >
      <div className="max-container padding-container flexBetween">
        {/* logo */}
        <Link href={"/"} className="flexCenter">
          <Image src={"./navbar-logo-es.webp"} alt=""
            width={150}
            height={50}
          />
        </Link>
        {/* nav links */}
        {/* FOR DESKTOP */}
        <Nav
          containerStyles={"hidden lg:flex gap-x-10 items-start justify-center"}
          linkStyles={"capitalize cursor-pointer my-4 relative transition-all"}
        />
        {/* FOR MOBILE */}
        <Nav
          containerStyles={`${
            menuOpened
              ? "flex items-start flex-col justify-center fixed top-20 p-12 bg-white rounded-lg transition-all duration-500 shadow-md right-0 w-60"
              : "flex items-start flex-col justify-center fixed top-20 p-12 bg-white rounded-lg transition-all duration-500 shadow-md right-[-100%] w-60"
          }`}
          linkStyles={"capitalize cursor-pointer my-4 relative transition-all"}
        />
        {/* icon & button */}
        <div className="flexCenter">
          <div className="hidden lg:block">
            <Button
              type="button"
              title="Iniciar sesión"
              icon="/user.svg"
              variant="btn_secondary_rounded"
            />
          </div>
          {!menuOpened ? (
            <CgMenuRight
              className="lg:hidden inline-block cursor-pointer regular-24 hover:text-secondary"
              onClick={toggleMenu}
            />
          ) : (
            <CgClose
              className="lg:hidden inline-block cursor-pointer regular-24 hover:text-secondary"
              onClick={toggleMenu}
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
