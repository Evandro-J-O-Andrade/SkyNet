import React from "react";

const images = import.meta.glob("/src/img/*", { eager: true });

function getImage(fileName) {
  const path = `/src/img/${fileName}`;
  return images[path]?.default || images["/src/img/admin.jpg"].default;
}

export default function Sobre() {
  const sobreImg = getImage("bannerplano.png"); // imagem opcional da seção Sobre

  return (
    <section id="sobre" className="sobre">
      <div className="sobre-content">

        <img 
          src={sobreImg} 
          alt="Sobre Skynet" 
          className="sobre-img"
        />

        <div className="sobre-text">
          <h2>Sobre Nós</h2>

          <p>
            A Skynet Streaming oferece uma experiência IPTV premium com estabilidade,
            alta qualidade de imagem, atualizações constantes e suporte totalmente dedicado.
          </p>

          <p>
            Nosso compromisso é entregar uma plataforma moderna, rápida e acessível,
            garantindo que você tenha acesso aos melhores canais, filmes, séries e eventos ao vivo.
          </p>
        </div>

      </div>
    </section>
  );
}
