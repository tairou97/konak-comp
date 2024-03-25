import React from "react";
import TImg from "../img/contact/konta.png";
import { BsTelephoneX } from "react-icons/bs";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../transition";
import { useContext } from "react";
import { CursorContext } from "../context/CursorContext";
import "../App.css";

const Kontakt = () => {
  const { mouserEnter, mouseLeaverEnter } = useContext(CursorContext);

  return (
    <motion.section
      initial={{ scale: 0, y: "100%" }}
      animate={{ scale: 1, y: 0 }}
      exit={{ scale: 0, y: "100%" }}
      transition={transition1}
      className="section top-40 "
      id="about"
    >
      <div className="container mx-auto h-full ">
        {/* text & img wrapper */}
        <div
          className=" flex flex-col lg:flex-row  
        h-full items-center justify-center gap-x-24 
        text-center lg:text-left lg:pt-16"
        >
          {/* img */}
          <div className="flex-1 max-h-96 lg:max-h-max order-2 lg:oder-none  rounded-2xl">
            <img className=" rounded-2xl" src={TImg} alt="" />
          </div>
          {/* text */}
          <motion.div
            initial={{ scale: 0, y: "-80%" }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0, y: "-80%" }}
            transition={transition1}
            className=" kontakt  pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start  text-green-900  "
          >
            <h1 className="h1">Kontakt</h1>
            <ul>
              <li className=" mb-2 max-w-sm">Herr Hüseyin Konak</li>
              <li className=" mb-2 max-w-sm">Konak Facility Management</li>
              <li className=" mb-2 max-w-sm">Luckauer Str. 2</li>
              <li className=" mb-2 max-w-sm">10969 Berlin</li>
              <li>
                <a
                  className="cursor-pointe flex items-center gap-2   p-1  "
                  href="tel:01622465249"
                  rel="noopener noreferrer"
                >
                  <BsTelephoneX className="bg-[#adbdac71] hover:bg-green-700 size-10 rounded-md  p-1 " />{" "}
                  Telefon: 01622465249
                </a>
              </li>

              <li>
                <a
                  className="cursor-pointer flex items-center gap-2  p-1 "
                  href="mailto:buero@konak-fm.de"
                >
                  <MdOutlineMarkEmailUnread className="bg-[#adbdac71] hover:bg-green-700 size-10 rounded-md  text-center  p-1" />{" "}
                  Email
                </a>
              </li>
            </ul>

            <div className="flex gap-5 flex-wrap justify-center my-4">
              <Link
                to={"/leistungen"}
                className="btn rounded-md bg-[#a0a0a05e]  text-black hover:bg-green-900 hover:text-white"
              >
                Unsere Leistungen
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Kontakt;
