import img from "../img/projects/b1.png";
import Img0 from "../img/projects/b2.png";
import Img1 from "../img/projects/b3.png";
import Img2 from "../img/projects/b4.png";
import Img3 from "../img/projects/b5.png";
import Img4 from "../img/projects/b6.png";
import { motion } from "framer-motion";
import { transition1 } from "../transition";
import { useContext } from "react";
import { CursorContext } from "../context/CursorContext";
import { Routes, Route, Link } from "react-router-dom";

// import Winter from "./uberuns/Winter";
// import Garten from "./uberuns/Garten";
// import Reinigung from "./uberuns/Reinigung";

const Leistungen = () => {
  const { mouserEnter, mouseLeaverEnter } = useContext(CursorContext);

  const leistungenNav = [
    { id: 1, name: "Winterdienst", to: "/winterdienst" },
    { id: 2, name: "Gartenpflege", to: "/gartenpflege" },
    { id: 3, name: "Reinigungsarbeiten", to: "/reinigungsarbeiten" },
    { id: 4, name: "Transporte & Entsorgung", to: "/transporte-entsorgung" },
    { id: 5, name: "Hausmeisterservice", to: "/hausmeisterservice" },
    { id: 6, name: "Abbrucharbeiten", to: "/abbrucharbeiten" },
    {
      id: 7,
      name: "Putz und Spachtelarbeiten",
      to: "/putz-und-spachtelarbeiten",
    },
    { id: 8, name: "Kleinreparaturen ", to: "/kleinreparaturen" },
  ];
  const uns = [
    {
      id: 1,
      name: "Winterdienst",
      to: "/winterdienst",
      description:
        "Unser erfahrenes Team, ausgestattet mit professionellem Equipment, kümmert sich das ganze Jahr über um sämtliche Aufgaben rund um Ihre Immobilie, sei es groß oder klein.",
      img: Img0,
    },

    {
      id: 2,
      name: "Gartenpflege",
      to: "/gartenpflege",
      description:
        "Unser erfahrenes Team, ausgestattet mit professionellem Equipment, kümmert sich das ganze Jahr über um sämtliche Aufgaben rund um Ihre Immobilie, sei es groß oder klein.",
      img: Img1,
    },

    {
      id: 3,
      name: "Reinigungsarbeiten",
      to: "/reinigungsarbeiten",
      description:
        "Unser erfahrenes Team, ausgestattet mit professionellem Equipment, kümmert sich das ganze Jahr über um sämtliche Aufgaben rund um Ihre Immobilie, sei es groß oder klein.",
      img: Img2,
    },

    {
      id: 4,
      name: "Transporte & Entsorgung",
      to: "/transporte-entsorgung",

      description:
        "Unser erfahrenes Team, ausgestattet mit professionellem Equipment, kümmert sich das ganze Jahr über um sämtliche Aufgaben rund um Ihre Immobilie, sei es groß oder klein.",
      img: Img3,
    },

    {
      id: 5,
      name: "Hausmeisterservice",
      to: "/hausmeisterservice",

      description:
        "Unser erfahrenes Team, ausgestattet mit professionellem Equipment, kümmert sich das ganze Jahr über um sämtliche Aufgaben rund um Ihre Immobilie, sei es groß oder klein.",
      img: Img4,
    },

    {
      id: 6,
      name: "Abbrucharbeiten",
      to: "/abbrucharbeiten",
      description:
        "Unser erfahrenes Team, ausgestattet mit professionellem Equipment, kümmert sich das ganze Jahr über um sämtliche Aufgaben rund um Ihre Immobilie, sei es groß oder klein.",
      img: img,
    },

    {
      id: 7,
      name: "Putz und Spachtelarbeiten",
      to: "/putz-und-spachtelarbeiten",
      description:
        "Unser erfahrenes Team, ausgestattet mit professionellem Equipment, kümmert sich das ganze Jahr über um sämtliche Aufgaben rund um Ihre Immobilie, sei es groß oder klein.",
      img: img,
    },

    {
      id: 8,
      name: "Kleinreparaturen ",
      to: "/kleinreparaturen",
      description:
        "Unser erfahrenes Team, ausgestattet mit professionellem Equipment, kümmert sich das ganze Jahr über um sämtliche Aufgaben rund um Ihre Immobilie, sei es groß oder klein.",
      img: img,
    },
  ];

  return (
    <motion.section
      initial={{ scale: 0, y: "100%" }}
      animate={{ scale: 1, y: 0 }}
      exit={{ scale: 0, y: "100%" }}
      transition={transition1}
      className="    flex justify-center items-center"
    >
      <div className="container m-9">
        <div
          className="flex flex-col 
          items-center justify-center lg:justify-center 
          pt-24 lg:pt-36 pb-8"
        >
          {/* text */}
          <motion.div
            initial={{ scale: 0, y: "-80%" }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0, y: "-80%" }}
            transition={transition1}
            className="flex flex-col  text-lg justify-center items-center  text-green-900"
          >
            <h1 className="h1"> Unsere Leistungen</h1>
            <p className=" mb-12  p-5">
              Für Ihre Immobilie bietet Konak Facility Management ein breites
              Spektrum an Dienstleistungen zur Erhaltung und Verschönerung an.
              Unser erfahrenes Team, ausgestattet mit professionellem Equipment,
              kümmert sich das ganze Jahr über um sämtliche Aufgaben rund um
              Ihre Immobilie, sei es groß oder klein. Wir legen großen Wert
              darauf, eng mit unseren Kunden zusammenzuarbeiten, um ihren
              individuellen Anforderungen und Wünschen gerecht zu werden, und
              stehen Ihnen in allen Dienstleistungsbereichen zur Seite.
            </p>
            <Link
              to={"/kontakt"}
              className="btn mb-[30px] mx-auto lg:mx-0 rounded-xl  text-green-700"
            >
              Kontakt
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-2 justify-center items-center  gap-2">
            {/* img  grid*/}

            {uns &&
              uns.map((un) => (
                <li key={un.id} className="grid lg:gap-4  gap-5 m-5">
                  <img src={un.img} alt={un.name} />
                  <Link
                    to={un.to}
                    className="text-green-900 text-2xl font-bold"
                  >
                    <h3 className="flex justify-center items-center text-green-900 text-3xl font-bold">
                      {un.name}
                    </h3>
                  </Link>
                  <p className=" text-green-700 text-center  ">
                    {un.description}
                  </p>
                </li>
              ))}

            {/* <Routes>
              <Route path="/winterdienst" element={<Winter />} /> */}
            {/* <Route path="/gartenpflege" element={<Garten />} /> */}
            {/* <Route path="/reinigungsarbeiten" element={<Reinigung />} />
            </Routes> */}

            {/* img  */}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Leistungen;
