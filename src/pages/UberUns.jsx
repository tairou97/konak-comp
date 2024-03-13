import React from "react";
import TImg1 from "../img/about/firma.png";
import { BsTelephoneX } from "react-icons/bs";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../transition";
import { useContext } from "react";
import { CursorContext } from "../context/CursorContext";
import "../App.css";

const UberUns = () => {
  const { mouserEnter, mouseLeaverEnter } = useContext(CursorContext);

  return (
    <motion.section
      initial={{ scale: 0, y: "100%" }}
      animate={{ scale: 1, y: 0 }}
      exit={{ scale: 0, y: "100%" }}
      transition={transition1}
      className="section flex justify-center items-center "
      id="about"
    >
      <div className="container mx-auto h-full ">
        {/* text & img wrapper */}
        <div
          className=" flex flex-col lg:flex-row  
        h-full items-center justify-center gap-x-24 
        text-center lg:text-left lg:pt-16  "
        >
          {/* img */}
          <div className="flex-1 max-h-96 lg:max-h-max order-2 lg:oder-none  rounded-2xl">
            <img src={TImg1} alt="" className="rounded-2xl" />
          </div>
          {/* text */}
          <motion.div
            initial={{ scale: 0, y: "-80%" }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0, y: "-80%" }}
            transition={transition1}
            className=" kontakt  pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start  text-green-900  "
          >
            <h1 className="text-6xl font-bold my-6">Über Uns</h1>
            <p className=" mb-12 max-w-sm">
              <span className="font-bold">Konak Facility Management </span>{" "}
              wurde im Jahr 2011 gegründet und agiert vorwiegend im Bereich
              Berlin-Kreuzberg. <br /> <br /> Unser Unternehmen bietet ein
              umfassendes Leistungsspektrum zur Pflege, Instandhaltung und
              Werterhaltung von Immobilien sämtlicher Art an. Unser vorrangiges
              Ziel ist es, die individuellen Anforderungen unserer Kunden mit
              höchster Qualität zu erfüllen. <br /> <br />
              Wir passen unsere Dienstleistungen selbstverständlich an die
              spezifischen Bedürfnisse unserer Kunden sowie die diversen
              Gegebenheiten der Immobilien an. Detaillierte und maßgeschneiderte
              Arbeitspläne sind ein fester Bestandteil unserer Verträge, um die
              bestmögliche Betreuung sicherzustellen.
            </p>

            <div className="flex gap-5 flex-wrap justify-center">
              <Link
                to={"/leistungen"}
                className="btn rounded-2xl text-green-700"
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

export default UberUns;
