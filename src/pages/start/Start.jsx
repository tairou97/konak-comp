import React, { useContext } from "react";
import TImg from "../../../public/img/header/haupt3.jpeg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../../transition";
// import "../App.css";
import "./Start.scss";

import { useState, useEffect } from "react";

import { CursorContext } from "../../context/CursorContext";

const Start = () => {
  const { mouserEnter, mouseLeaverEnter } = useContext(CursorContext);
  const [leistungen, setLeistungen] = useState({ short: [], detailed: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/leistung.json");

        const jsonData = await response.json();
        setLeistungen(jsonData);
      } catch (error) {
        console.error("Fehler beim Laden der JSON:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      transition={transition1}
      className="startContainer  "
    >
      {/* Box Container */}
      <div className="startBoxContainer">
        <div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={transition1}
          className="   StartImg   "
        >
          <img
            whileHover={{ scale: 1.1 }}
            transition={transition1}
            src={TImg}
            alt=""
          />
        </div>

        <div className="textStart">
          <h1>Konak Facility Management</h1>
        </div>

        <div className="  ">
          {/* text */}
          <div
            initial={{ scale: 0, y: "-50%" }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0, y: "-50%" }}
            transition={transition1}
            className=" "
          >
            <h1 className="">
              Herzlich willkommen auf der offiziellen Webseite von
              <span className=""> Konak Facility Management.</span>
            </h1>
            <p className="">Berlin, Kreuzberg</p>
            <div className=" ">
              <Link to={"/kontakt"} className="btnStart ">
                Zur Kontakte
              </Link>
              <Link
                to="mailto:buero@konak-fm.de"
                className="btnStart"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mailen Sie uns.
              </Link>
            </div>
          </div>
        </div>
        <div className="leistungContainer">
          <h1>Leistungen</h1>{" "}
          <div className="leistung">
            {leistungen.short &&
              leistungen.short.map((leistung) => (
                <div key={leistung.id} className="offer">
                  <Link to={leistung.to} className="btnStart">
                    <img
                      src={leistung.img} // Dynamisches Laden des Bildes
                      alt={leistung.name}
                      className="offerImage"
                    />{" "}
                  </Link>
                  <h1>{leistung.name}</h1>
                </div>
              ))}
          </div>
        </div>
      </div>{" "}
    </section>
  );
};

export default Start;
