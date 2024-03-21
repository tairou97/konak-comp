import React, { useContext } from "react";
import TImg from "../img/header/rasen.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../transition";
import "../App.css";

import { CursorContext } from "../context/CursorContext";

const Start = () => {
  const { mouserEnter, mouseLeaverEnter } = useContext(CursorContext);

  return (
    <motion.section
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      transition={transition1}
      className="section  "
    >
      <div className="  mx-auto h-96 relative ">
        {/* text & img wrapper */}
        <div className="  flex flex-col justify-center  items-center">
          {/* text */}
          <motion.div
            initial={{ scale: 0, y: "-50%" }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0, y: "-50%" }}
            transition={transition1}
            className="w-full pt-36 pb-14 lg:pt-0 lg:pb-0
          lg:w-auto  z-10 lg:absolute right-96 flex flex-col justify-center text-green-700 items-center lg:items-start  "
          >
            <h1 className="konak-w text-4xl   text-center bg-[#42424278] rounded-md p-5  text-white">
              Herzlich willkommen auf der offiziellen Webseite von
              <span className="text-4xl  font-bold text-green-950 shadow-white start">
                {" "}
                Konak Facility Management.
              </span>
            </h1>
            <p
              className="text-[26px] lg:text-[36px] 
            font-primary mb-4 lg:mb-12 ml-4   text-green-950 shadow-xl  bg-[#42424278] mt-2 rounded-md  p-1"
            >
              Berlin, Kreuzberg
            </p>
            <div className="flex gap-5  m-3 ">
              <Link
                to={"/kontakt"}
                className="btn text-lg mb-[30px] rounded-md px-5 text-white bg-[#000000b8]  hover:bg-green-900 hover:text-white "
              >
                Zur Kontakte
              </Link>
              <Link
                to="mailto:buero@konak-fm.de"
                className="btn text-lg mb-[30px] rounded-md px-5 text-white bg-[#000000b8]   hover:bg-green-900 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mailen Sie uns.
              </Link>
            </div>
          </motion.div>
          {/* img */}
          <div className="flex justify-end  max-h-96 lg:max-h-max">
            {/* <div className="flex justify-end "> */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={transition1}
              className="  lg:-right-40    "
            >
              <motion.img
                className="h-screen img-start"
                whileHover={{ scale: 1.1 }}
                transition={transition1}
                src={TImg}
                alt=""
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Start;
