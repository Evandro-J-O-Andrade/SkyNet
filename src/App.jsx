import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Planos from "./components/Planos";
import Novidades from "./components/Novidades";
import Footer from "./components/Footer";
import Faq from "./components/Faq";
import TesteGratis from "./pages/TesteGratis";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Top10 from "./components/Top10";
export default function App() {
  return (
    <>
      <Header /> 
     
      <Hero />
      <Top10 />
      <Planos /> 
      <Faq />
      <Novidades />
      <TesteGratis />
      
      <Sobre />
      <Contato />
     
      <Footer />
    </>
  );
}
