import React from "react";
// import Socials from "./Socials";
import "../header/Header.scss";
import "../../../public/img/header/haupt.jpeg";
import Logo from "../../../public/img/header/logo-transparent-png.png";
import MobileNav from "../MobileNav";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CursorContext } from "../../context/CursorContext";

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
    <header className=" headerContainer ">
      <div className="headerBox">
        {/* Logo */}
        <Link
          onMouseEnter={mouserEnter}
          onMouseLeave={mouseLeaverEnter}
          to={"/"}
          className="imgHeader"
        >
          <img className=" imgHeader " src={Logo} alt="" />
        </Link>
        {/* Nav */}
        <nav
          onMouseEnter={mouserEnter}
          onMouseLeave={mouseLeaverEnter}
          className="hidden xl:flex navLink "
        >
          {Nav.map((nav) => {
            return (
              <li key={nav.id}>
                <Link className="l" to={nav.to}>
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
