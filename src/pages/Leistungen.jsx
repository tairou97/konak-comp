import { motion } from "framer-motion";
import { transition1 } from "../transition";
import { useContext, useState, useEffect } from "react";
import { CursorContext } from "../context/CursorContext";
import { Link } from "react-router-dom";
import leistungData from "../../public/leistung.json";

const Leistungen = () => {
  const { mouserEnter, mouseLeaverEnter } = useContext(CursorContext);

  const [leistungen, setLeistungen] = useState({ short: [], detailed: [] });

  useEffect(() => {
    setLeistungen(leistungData);
  }, []);

  return (
    <motion.section
      initial={{ scale: 0, y: "100%" }}
      animate={{ scale: 1, y: 0 }}
      exit={{ scale: 0, y: "100%" }}
      transition={transition1}
      className="flex justify-center items-center"
    >
      <div className="container m-9">
        <div className="flex flex-col items-center justify-center pt-24 lg:pt-36 pb-8">
          {/* Text */}
          <motion.div
            initial={{ scale: 0, y: "-80%" }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0, y: "-80%" }}
            transition={transition1}
            className="flex flex-col text-lg justify-center items-center text-green-900"
          >
            <h1 className="h1">Unsere Leistungen</h1>
            <p className="mb-12 p-5">
              Für Ihre Immobilie bietet Konak Facility Management ein breites
              Spektrum an Dienstleistungen zur Erhaltung und Verschönerung an...
            </p>
            <Link
              to={"/kontakt"}
              className="btn mb-[30px] mx-auto lg:mx-0 rounded-xl bg-[#a0a0a05e] text-black hover:bg-green-900 hover:text-white"
            >
              Kontakt
            </Link>
          </motion.div>

          {/* Grid */}
          <div className="">
            {leistungen.detailed &&
              leistungen.detailed.map((deta) => (
                <li key={deta.id} className=" leistungBox">
                  <div className="img">
                    {" "}
                    <Link to={deta.to} className="">
                      <img src={deta.img} alt={deta.name} />
                    </Link>
                  </div>
                  <div className="text">
                    {" "}
                    <h3 className="">{deta.name}</h3>
                    <h4 className="r">{deta.title}</h4>
                    <p className="">{deta.description}</p>
                  </div>
                </li>
              ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Leistungen;
