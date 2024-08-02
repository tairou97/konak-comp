import React from "react";

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
      className=" about"
    >
      <motion.div
        initial={{ scale: 0, y: "-80%" }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0, y: "80%" }}
        transition={transition1}
        className=" kontakt   text-green-900  "
      >
        <h1 className="h1  p-5">Impressum</h1>
        <ul className=" text-lg p-5">
          <li>
            <b>Herr Hüseyin Konak</b>
          </li>
          <li>Konak Facility Management</li>
          <li>Luckauer Str. 2</li>
          <li>10969 Berlin</li>
        </ul>

        <div className=" flex   p-5">
          <ul className="my-5">
            <li>
              <a
                className="cursor-pointer flex items-center  gap-2  p-1 "
                href="mailto:buero@konak-fm.de"
              >
                <MdOutlineMarkEmailUnread className="bg-[#adbdac71] hover:bg-green-700 size-10 rounded-md  text-center  p-1" />{" "}
                Email
              </a>
            </li>
            <li>
              <a
                className="cursor-pointe flex items-center gap-2   p-1  "
                href="tel:01622465249"
                rel="noopener noreferrer"
              >
                <BsTelephoneX className="bg-[#adbdac71] hover:bg-green-700 size-10 rounded-md  p-1 " />
                Telefon
              </a>
            </li>
          </ul>
        </div>
        {/* </motion.div>
      {/* img */}
        {/* <motion.div 
        initial={{ scale: 0, y: "-80%" }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0, y: "80%" }}
        transition={transition1}
        className="  rounded-2xl  text-green-900"
      > */}
        <h3 className="font-bold text-2xl mb-5  mx-5">
          Datenschutzerklärungen:
        </h3>
        <h4 className="font-bold text-lg mx-5">Personenbezogene Daten</h4>
        <p className="mx-5  ">
          Durch die Nutzung unserer Website erklären Sie sich mit der Erhebung,
          Verarbeitung und Nutzung von Daten gemäß der nachfolgenden
          Beschreibung einverstanden. Unsere Website kann grundsätzlich ohne
          Registrierung besucht werden. Dabei werden Daten wie beispielsweise
          aufgerufene Seiten bzw. Namen der abgerufenen Datei, Datum und Uhrzeit
          zu statistischen Zwecken auf dem Server gespeichert, ohne dass diese
          Daten unmittelbar auf Ihre Person bezogen werden. Personenbezogene
          Daten, insbesondere Name, Adresse oder E-Mail-Adresse werden soweit
          möglich auf freiwilliger Basis erhoben. Ohne Ihre Einwilligung erfolgt
          keine Weitergabe der Daten an Dritte. Quelle der Datenschutzerklärung:
          <Link
            to="https://www.anwalt.de"
            target="_blank"
            rel="noopener noreferrer"
            className=" text-green-900 underline font-bold"
          >
            {" "}
            https://www.anwalt.de
          </Link>
        </p>
        <h4 className="font-bold text-lg mt-5 mx-5">
          Datenschutzerklärung für Google Maps von Google Inc.
        </h4>
        <p className="mx-5">
          Diese Website verwendet die „Google Maps und Routenplaner“- Funktion
          der Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043,
          United States („Google“), um geographische Informationen und
          Anfahrtrouten darzustellen bzw. zu berechnen. Durch Google Maps können
          Daten über Ihre Nutzung dieser Webseite an Google übertragen, erhoben
          und von Google genutzt werden. Sie können eine solche Datenübertragung
          verhindern, wenn Sie in Ihrem Browser „Javascript“ deaktivieren. In
          dem Falle können aber keine Karten angezeigt werden. Durch die Nutzung
          dieser Webseite und die Nichtdeaktivierung von „Javascript“ erklären
          Sie Ihr Einverständnis, dass Sie mit der Bearbeitung Ihrer Daten durch
          Google zum obigen Zwecke einverstanden sind. Weitere Informationen
          darüber wie „Google Maps“ und der Routenplaner Ihre Daten verwenden
          sowie die Datenschutzerklärung von Google finden Sie unter:{" "}
          <a
            className=" text-green-900 underline font-bold"
            href=" https://www.google.com/intl/de_de/help/terms_maps.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.google.com/intl/de_de/help/terms_maps.html
          </a>{" "}
          Quelle der Datenschutzerklärung:{" "}
          <a
            className=" text-green-900 underline font-bold"
            href="https://www.juraforum.de"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.juraforum.de
          </a>
        </p>
      </motion.div>
      {/* text */}
    </motion.section>
  );
};

export default UberUns;
