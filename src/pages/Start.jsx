import React, { useContext } from "react";
import TImg from "../img/contact/hand.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../transition";

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
      <div className=" container mx-auto h-96 relative ">
        {/* text & img wrapper */}
        <div className="  flex flex-col justify-center  items-center">
          {/* text */}
          <motion.div
            initial={{ scale: 0, y: "-50%" }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0, y: "-50%" }}
            transition={transition1}
            className="w-full pt-36 pb-14 lg:pt-0 lg:pb-0
          lg:w-auto  z-10 lg:absolute flex flex-col justify-center text-green-700 items-center lg:items-start "
          >
            <h1 className=" text-4xl   text-center bg-[#ffffff78] rounded-md p-5 text-green-900 ">
              <span className="text-black">
                Herzlich willkommen auf der offiziellen Webseite von
                <span className="text-4xl  font-bold text-green-900">
                  {" "}
                  Konak Facility Management.
                </span>
              </span>
            </h1>
            <p
              className="text-[26px] lg:text-[36px] 
            font-primary mb-4 lg:mb-12 text-black "
            >
              Berlin, Kreuzberg
            </p>
            <div className="flex gap-5  m-3">
              <Link
                to={"/kontakt"}
                className="btn text-lg mb-[30px] rounded-md bg-[#a0a0a05e]  text-black hover:bg-green-900 hover:text-white "
              >
                Zur Kontakte
              </Link>
              <Link
                to="mailto:konakcornelia.ck@gmail.com"
                className="btn text-lg mb-[30px] rounded-md text-black bg-[#a0a0a05e]   hover:bg-green-900 hover:text-white"
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
              className=" relative lg:-right-40     "
            >
              <motion.img
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
