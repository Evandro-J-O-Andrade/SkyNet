import React from "react";

// Import automático de todas as imagens da pasta img
const images = import.meta.glob("/src/img/*", { eager: true });

// Função inteligente com fallback
function getImage(fileName) {
  if (!fileName) return images["/src/img/admin.jpg"]?.default;

  const path = `/src/img/${fileName}`;
  return images[path]?.default || images["/src/img/admin.jpg"].default;
}

export default function Hero() {
  // Imagem do fundo do Hero (deve existir em src/img)
  const heroBg = getImage("banner.jpg");

  return (
    <section
      className="hero"
      style={{
        height: "900px",
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="hero-text">
        <br />
        <h1>Streaming Premium IPTV Skynet</h1>
        <p>Mais de 10.000 canais, filmes, séries e esportes.</p>

        <a
          className="btn"
          href="https://wa.me/5511987063917?text=Quero+assinar+Skynet"
        >
          Assinar Agora
        </a>
      </div>
    </section>
  );
}
