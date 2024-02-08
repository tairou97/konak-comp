import { Link } from "react-router-dom";
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

const Leistungen = () => {
  const { mouserEnter, mouseLeaverEnter } = useContext(CursorContext);

  return (
    <motion.section
      initial={{ scale: 0, y: "100%" }}
      animate={{ scale: 1, y: 0 }}
      exit={{ scale: 0, y: "100%" }}
      transition={transition1}
      className="section "
    >
      <div className="container  mx-auto h-full relative">
        <div
          className="flex flex-col lg:flex-row h-full 
          items-center justify-start gap-x-24 text-center lg:text-left
          pt-24 lg:pt-36 pb-8"
        >
          {/* text */}
          <motion.div
            initial={{ scale: 0, y: "-80%" }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0, y: "-80%" }}
            transition={transition1}
            onMouseEnter={mouserEnter}
            onMouseLeave={mouseLeaverEnter}
            className="flex flex-col lg:items-start text-lg"
          >
            <h1 className="h1"> Unsere Leistungen</h1>
            <p className=" mb-12 max-w-sm">
              Für Ihre Immobilie bietet Konak Facility Management ein breites
              Spektrum an Dienstleistungen zur Erhaltung und Verschönerung an.
              Unser erfahrenes Team, ausgestattet mit professionellem Equipment,
              kümmert sich das ganze Jahr über um sämtliche Aufgaben rund um
              Ihre Immobilie, sei es groß oder klein. Wir legen großen Wert
              darauf, eng mit unseren Kunden zusammenzuarbeiten, um ihren
              individuellen Anforderungen und Wünschen gerecht zu werden, und
              stehen Ihnen in allen Dienstleistungsbereichen zur Seite.
            </p>
            <Link to={"/kontakt"} className="btn mb-[30px] mx-auto lg:mx-0 ">
              Kontakt
            </Link>
          </motion.div>
          {/* img  grid*/}
          <div
            onMouseEnter={mouserEnter}
            onMouseLeave={mouseLeaverEnter}
            className="grid grid-cols-2 lg:gap-2"
          >
            {/* img  */}
            <div
              className="max-w-[250px] lg:max-w-[320px] 
            h-[187px] lg:h-[220px] bg-accent overflow-hidden
            "
            >
              <img src={img} alt="" />
            </div>

            <div
              className="max-w-[250px] lg:max-w-[320px] 
            h-[187px] lg:h-[220px] bg-accent overflow-hidden
            "
            >
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 
                transition-all duration-500 "
                src={Img0}
                alt=""
              />
            </div>

            <div
              className="max-w-[250px] lg:max-w-[320px] 
            h-[187px] lg:h-[220px] bg-accent overflow-hidden
            "
            >
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 
                transition-all duration-500 "
                src={Img1}
                alt=""
              />
            </div>

            <div
              className="max-w-[250px] lg:max-w-[320px] 
            h-[187px] lg:h-[220px] bg-accent overflow-hidden
            "
            >
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 
                transition-all duration-500 "
                src={Img2}
                alt=""
              />
            </div>

            <div
              className="max-w-[250px] lg:max-w-[320px] 
            h-[187px] lg:h-[220px] bg-accent overflow-hidden
            "
            >
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 
                transition-all duration-500 "
                src={Img3}
                alt=""
              />
            </div>

            <div
              className="max-w-[250px] lg:max-w-[320px] 
            h-[187px] lg:h-[220px] bg-accent overflow-hidden
            "
            >
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 
                transition-all duration-500 "
                src={Img4}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Leistungen;

{
  /* <div className="container  mx-auto h-full relative">
        {projects.map((project) => (
          <div
            className="flex flex-col lg:flex-row h-full 
          items-center justify-start gap-x-24 text-center lg:text-left
          pt-24 lg:pt-36 pb-8

          "
            key={project.id}
          >
            <h1>{project.name}</h1>
            <p>{project.description}</p>
            <img src={project.img} alt={project.name} />
          </div>
        ))}
      </div> */
}
