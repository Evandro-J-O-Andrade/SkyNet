import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Planos from "./components/Planos";
import Novidades from "./components/Novidades";
import Footer from "./components/Footer";

import TesteGratis from "./pages/TesteGratis";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Planos />
      <Novidades />
      <TesteGratis />
      <Sobre />
      <Contato />
      <Footer />
    </>
  );
}
