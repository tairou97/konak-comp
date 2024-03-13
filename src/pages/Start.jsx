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
      className="section "
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
            <h1 className="h1 bg-[#ffffff78] rounded-md p-5 text-green-900 ">
              Konak
              <br /> Facility Management
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
                className="btn mb-[30px] rounded-md  text-green-700"
              >
                Zur Kontakte
              </Link>
              <Link
                to="mailto:konakcornelia.ck@gmail.com"
                className="btn mb-[30px] rounded-md text-green-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mail Sie uns
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
              className=" relative lg:-right-40 overflow-hidden    "
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
