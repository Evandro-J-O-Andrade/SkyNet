import React from "react";

const images = import.meta.glob("/src/img/*", { eager: true });

function getImage(fileName) {
  const path = `/src/img/${fileName}`;
  return images[path]?.default || images["/src/img/admin.jpg"].default;
}

export default function TesteGratis() {
  const bg = getImage("teste2.png"); // imagem de fundo da seção

  return (
    <section
      id="teste"
      className="teste"
      
      style={{ 
        height: "410px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        
        backgroundImage: `url(${bg})` }}
    >
      <br />
      
      <h2>Teste Grátis</h2>
      <p>Peça 30 minutos grátis agora mesmo.</p>
      <a
        className="btn"
        href="https://go.aftvnews.com/1204843"
      >
        Pedir Teste Grátis
      </a>
     
    </section>  
  );
}
