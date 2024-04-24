import Img from "../img/leistungen/winter.png";
import Img0 from "../img/leistungen/garten.png";
import Img1 from "../img/leistungen/reiningung.png";
import Img2 from "../img/leistungen/transport.png";
import Img3 from "../img/leistungen/hausmeister.png";
import Img4 from "../img/leistungen/abbruch.png";
import Img5 from "../img/leistungen/spachtel.png";
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
      title:
        "Von der Schnee- und Eisbeseitigung über das Streuen bis zum Schneeabtransport",
      to: "/winterdienst",
      description:
        "Das Leistungsspektrum des Winterdienstes umfasst üblicherweise die Schnee- und Eisbeseitigung sowie den Streudienst auf Gehwegen und Verkehrsflächen, für die unsere Kunden gesetzlich zum Winterdienst verpflichtet sind. Das schließt gegebenenfalls den Schneeabtransport ein. Bei der Planung und Durchführung des Winterdienstes stützen wir uns nicht nur auf die lokalen Prognosen der Wetterdienste sondern prüfen bei Bedarf auch direkt vor Ort. Auf dieser Grundlage unterstützen wir unsere Kunden bei der Einhaltung aller in Berlin gültigen Vorschriften zum Winterdienst",
      img: Img,
    },
    {
      id: 2,
      name: "Gartenarbeiten",
      title: "Gestaltung & Pflege von Grünanlagen",
      to: "/gartenpflege",
      description:
        "Wir kümmern uns um den Aufbau und die Pflege von Grünanlagen an öffentlichen und privaten Gebäuden. Damit tragen wir zu einem jederzeit gepflegten äußeren Erscheinungsbild Ihrer Immobilien bei. Wir übernehmen unter anderem: - die Neuanpflanzungen und die Pflege von Vegetationsflächen der unterschiedlichsten Art - die Gestaltung von Außenflächen - Baumarbeiten - die Wartung und Pflege von Spielplätzen sowie Terrassen und Wegen",
      img: Img0,
    },
    {
      id: 3,
      name: "Reinigungsarbeiten",
      title: "Innen- & Außenreinigung",
      to: "/reinigungsarbeiten",
      description:
        "Zu unserem Angebotsspektrum bei der Gebäudereinigung gehören alle Formen der klassischen Unterhaltsreinigung, die nach einem mit dem Kunden abgestimmten Plan erfolgt, der je nach Bedarf feste und variable Reinigungen beinhaltet. Bei der Innenreinigung übernehmen wir die Reinigung (einschließlich Grundreinigung) von: - Büros - Hausaufgängen und Fluren - Veranstaltungsräumen - Wohnungen - Treppenhäusern sowie die Bauzwischen- und Bauendreinigung. Für den Außenbereich bieten wir die Reinigung von Verkehrs- und Freiflächen wie z.B. Höfen, Wegen, Parkanlagen sowie Parkplätzen an.",
      img: Img1,
    },

    {
      id: 4,
      name: "Transportleistungen & Sperrmüllentsorgung",
      to: "/transporte-entsorgung",
      description:
        "Wir bieten Transportleistungen an, einschließlich des Aufladens und Abtransports von Haushaltsgegenständen sowie deren Entsorgung auf geeigneten Deponien oder Verwertung auf Recyclinghöfen. Umzüge sind jedoch nicht in unserem Leistungsspektrum enthalten.\n\nDarüber hinaus bieten wir Sperrmüllentsorgung an, einschließlich Entrümpelung von Kellern und Dachböden sowie Beseitigung von Unrat bei Haushaltsauflösungen. Wir übernehmen das Aufladen und den Abtransport von Sperrmüll zur Entsorgung auf geeigneten Deponien.",
      img: Img2,
    },
    {
      id: 5,
      name: "Hausmeisterarbeiten & Kleinreparaturen",

      to: "/hausmeisterservice",
      description:
        "Zum vollständigen Facility-Management gehört auch die Hauswartung, die verschiedene Aufgaben umfasst: Überwachung der haustechnischen Anlagen und des Gesamtzustandes der Immobilie. Ausführung notwendiger technischer Wartungsarbeiten. Kontrolle der Dachflächen, Fassaden und Kellerräume auf Gefahrenstellen und Schäden. Schlüsseldienst. Durchführung von Kleinreparaturen jeglicher Art zur Werterhaltung Ihrer Immobilie.",
      img: Img3,
    },

    {
      id: 6,
      name: "Abbrucharbeiten",

      to: "/abbrucharbeiten",
      description:
        "Zu unserem Leistungsspektrum gehören auch Abbrucharbeiten innerhalb und außerhalb von Gebäuden. Hierzu übernehmen wir selbstverständlich auch die Gestellung und Leerung notwendiger Container, einschließlich der Einholung von Genehmigungen und dem Absperren der Stellplätze.",
      img: Img4,
    },
    {
      id: 7,
      name: "Putz und Spachtelarbeiten",
      to: "/putz-und-spachtelarbeiten",
      description:
        "Zu unserem Leistungsspektrum gehören auch Putz- und Spachtelarbeiten an Wänden und Decken innerhalb von Gebäuden sowie Putzarbeiten an Fassaden.",
      img: Img5,
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
              className="btn mb-[30px] mx-auto lg:mx-0 rounded-xl  bg-[#a0a0a05e]  text-black hover:bg-green-900 hover:text-white"
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
                    <h4 className="text-center">{un.title}</h4>
                  </Link>
                  <p className=" text-green-900 text-center  ">
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
