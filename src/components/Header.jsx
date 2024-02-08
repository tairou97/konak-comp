import React from "react";
// import Socials from "./Socials";
import Logo from "../img/header/logo-transparent-png.png";
import MobileNav from "./MobileNav";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CursorContext } from "../context/CursorContext";

const Header = () => {
  const { mouserEnter, mouseLeaverEnter } = useContext(CursorContext);
  const Nav = [
    { id: 1, name: "Start", to: "/" },
    { id: 2, name: "Über uns", to: "/über-uns" },
    { id: 3, name: "Leistungen", to: "/leistungen" },
    { id: 4, name: "Kontakt", to: "/kontakt" },
    { id: 5, name: "Impressum", to: "/impressum" },
    { id: 6, name: "Datenschutz", to: "/datenschutz" },
  ];

  return (
    <header
      className=" fixed w-full px-[30px]
  lg:px-[100px] z-30 h-[100px] lg:h[140px] flex items-center j"
    >
      <div className="flex  flex-col lg:flex-row lg:items-center w-full justify-between">
        {/* Logo */}
        <Link
          onMouseEnter={mouserEnter}
          onMouseLeave={mouseLeaverEnter}
          to={"/"}
          className="max-w-[200px]"
        >
          <img className="w-30" src={Logo} alt="" />
        </Link>
        {/* Nav */}
        <nav
          onMouseEnter={mouserEnter}
          onMouseLeave={mouseLeaverEnter}
          className="hidden xl:flex  list-none gap-x-12 font-semibold "
        >
          {Nav.map((nav) => {
            return (
              <li key={nav.id}>
                <Link
                  className=" hover:text-primary transition text-green-700 text-xl"
                  to={nav.to}
                >
                  {nav.name}
                </Link>
              </li>
            );
          })}
        </nav>
      </div>
      {/* Socials */}
      {/* <Socials /> */}
      {/* Mobile Nav */}
      <MobileNav key={Nav} />
    </header>
  );
};

export default Header;
