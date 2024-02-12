import React from "react";
import TImg from "../img/about/boss.png";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../transition";
import { useContext } from "react";
import { CursorContext } from "../context/CursorContext";

const UberUns = () => {
  const { mouserEnter, mouseLeaverEnter } = useContext(CursorContext);

  return (
    <motion.section
      initial={{ scale: 0, y: "100%" }}
      animate={{ scale: 1, y: 0 }}
      exit={{ scale: 0, y: "100%" }}
      transition={transition1}
      className="section flex items-center justify-center  "
      id="about"
    >
      <div className="container mx-auto h-full relative ">
        {/* text & img wrapper */}
        <div
          className=" flex flex-col lg:flex-row  
        h-full items-center justify-center gap-x-24 
        text-center lg:text-left lg:pt-16 "
        >
          {/* img */}
          <div className="mt-20 absolute top-16">
            <div className="flex-1 max-h-96 lg:max-h-max order-2 lg:oder-none overflow-hidden rounded-xl ">
              <img src={TImg} alt="" />
            </div>
            <h2 className=" py-3">
              <b>Geschäftsführer:</b> Herr Hüseyin Konak
            </h2>
          </div>

          {/* text */}
          <motion.div
            initial={{ scale: 0, y: "-80%" }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0, y: "-80%" }}
            transition={transition1}
            onMouseEnter={mouserEnter}
            onMouseLeave={mouseLeaverEnter}
            className="flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start  text-green-900"
          >
            <h1 className="h1">Kontakt</h1>
            <div>
              <ul className=" text-lg">
                <li>
                  <b>Herr Hüseyin Konak</b>{" "}
                </li>
                <li>Konak Facility Management</li>
                <li>Luckauer Str. 2</li>
                <li>10969 Berlin</li>
              </ul>
            </div>
            <div className=" flex ">
              <button
                type="submit "
                className="btn  my-6 rounded-xl bg-green-900"
              >
                <Link to="tel:01622465249">Tel</Link>
              </button>

              <button
                type="submit "
                className="  bg-green-900  btn  rounded-xl m-6  "
              >
                <Link to="mailto:buero@konak-fm.de">@mail</Link>
              </button>
            </div>
            {/* <p className=" mb-12 max-w-sm">
              Konak Facility Management wurde im Jahr 2011 gegründet und agiert
              vorwiegend im Bereich Berlin-Kreuzberg. <br /> <br /> Unser
              Unternehmen bietet ein umfassendes Leistungsspektrum zur Pflege,
              Instandhaltung und Werterhaltung von Immobilien sämtlicher Art an.
              Unser vorrangiges Ziel ist es, die individuellen Anforderungen
              unserer Kunden mit höchster Qualität zu erfüllen. <br /> <br />
              Wir passen unsere Dienstleistungen selbstverständlich an die
              spezifischen Bedürfnisse unserer Kunden sowie die diversen
              Gegebenheiten der Immobilien an. Detaillierte und maßgeschneiderte
              Arbeitspläne sind ein fester Bestandteil unserer Verträge, um die
              bestmögliche Betreuung sicherzustellen.
            </p> */}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default UberUns;
