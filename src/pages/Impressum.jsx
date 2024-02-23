import React from "react";
import TImg from "../img/about/boss.png";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../transition";
import { useContext } from "react";
import { CursorContext } from "../context/CursorContext";

const Impressum = () => {
  const { mouserEnter, mouseLeaverEnter } = useContext(CursorContext);

  return (
    <motion.section
      initial={{ scale: 0, y: "100%" }}
      animate={{ scale: 1, y: 0 }}
      exit={{ scale: 0, y: "100%" }}
      transition={transition1}
      className="section   "
      id="about"
    >
      <div className="container mx-auto h-full  ">
        {/* text & img wrapper */}
        <div
          className=" flex flex-col lg:flex-row  
        h-full items-center justify-center gap-x-24 
        text-center lg:text-left lg:pt-16 "
        >
          {/* text */}
          <motion.div
            initial={{ scale: 0, y: "-80%" }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0, y: "-80%" }}
            transition={transition1}
            onMouseEnter={mouserEnter}
            onMouseLeave={mouseLeaverEnter}
            className="flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start  text-green-900 absolute top-0 "
          >
            <h1 className="h1">Impressum</h1>
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
            <div className="">
              <h3 className="font-bold text-2xl mb-5">
                {" "}
                Datenschutzerklärungen:
              </h3>
              <h4 className="font-bold ">Personenbezogene Daten</h4>
              <p className="">
                Durch die Nutzung unserer Website erklären Sie sich mit der
                Erhebung, Verarbeitung und Nutzung von Daten gemäß der
                nachfolgenden Beschreibung einverstanden. Unsere Website kann
                grundsätzlich ohne Registrierung besucht werden. Dabei werden
                Daten wie beispielsweise aufgerufene Seiten bzw. Namen der
                abgerufenen Datei, Datum und Uhrzeit zu statistischen Zwecken
                auf dem Server gespeichert, ohne dass diese Daten unmittelbar
                auf Ihre Person bezogen werden. Personenbezogene Daten,
                insbesondere Name, Adresse oder E-Mail-Adresse werden soweit
                möglich auf freiwilliger Basis erhoben. Ohne Ihre Einwilligung
                erfolgt keine Weitergabe der Daten an Dritte. Quelle der
                Datenschutzerklärung: https://www.anwalt.de
              </p>
              <h4 className="font-bold  mt-5">
                Datenschutzerklärung für Google Maps von Google Inc.
              </h4>
              <p>
                Diese Website verwendet die „Google Maps und Routenplaner“-
                Funktion der Google Inc., 1600 Amphitheatre Parkway, Mountain
                View, CA 94043, United States („Google“), um geographische
                Informationen und Anfahrtrouten darzustellen bzw. zu berechnen.
                Durch Google Maps können Daten über Ihre Nutzung dieser Webseite
                an Google übertragen, erhoben und von Google genutzt werden. Sie
                können eine solche Datenübertragung verhindern, wenn Sie in
                Ihrem Browser „Javascript“ deaktivieren. In dem Falle können
                aber keine Karten angezeigt werden. Durch die Nutzung dieser
                Webseite und die Nichtdeaktivierung von „Javascript“ erklären
                Sie Ihr Einverständnis, dass Sie mit der Bearbeitung Ihrer Daten
                durch Google zum obigen Zwecke einverstanden sind. Weitere
                Informationen darüber wie „Google Maps“ und der Routenplaner
                Ihre Daten verwenden sowie die Datenschutzerklärung von Google
                finden Sie unter:
                https://www.google.com/intl/de_de/help/terms_maps.html Quelle
                der Datenschutzerklärung: https://www.juraforum.de
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Impressum;
