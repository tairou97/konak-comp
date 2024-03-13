import React from "react";

import PageNotFound from "../pages/PageNotFound";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Start from "../pages/Start";
import UberUns from "../pages/UberUns";
import Impressum from "../pages/Impressum";
import DatenSchutz from "../pages/DatenSchutz";
import Leistungen from "../pages/Leistungen";
import Kontakt from "../pages/Kontakt";

const AnimRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence initial={true} mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Start />} />
        <Route path="/über-uns" element={<UberUns />} />
        <Route path="/leistungen" element={<Leistungen />} />

        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<DatenSchutz />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimRoutes;
