import React from "react";

const images = import.meta.glob("/src/img/*", { eager: true });

function getImage(fileName) {
  const path = `/src/img/${fileName}`;
  return images[path]?.default || images["/src/img/admin.jpg"].default;
}

export default function TesteGratis() {
  const bg = getImage("combo2.jpg"); // imagem de fundo da seção

  return (
    <section
      id="teste"
      className="teste"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <h2>Teste Grátis</h2>
      <p>Peça 30 minutos grátis agora mesmo.</p>
      <a
        className="btn"
        href="https://wa.me/5599999999999?text=Quero+teste+gratis+Skynet"
      >
        Pedir Teste Grátis
      </a>
    </section>
  );
}
