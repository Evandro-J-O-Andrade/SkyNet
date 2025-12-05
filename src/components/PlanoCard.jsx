import React from "react";

// Importação automática de todas as imagens
const images = import.meta.glob("/src/img/*", { eager: true });

// Função inteligente com fallback
function getImage(fileName) {
  if (!fileName) return images["/src/img/admin.jpg"]?.default;

  const path = `/src/img/${fileName}`;
  return images[path]?.default || images["/src/img/admin.jpg"].default;
}

export default function PlanoCard({ reverse, title, desc, price, img }) {
  const bg = getImage(img); // imagem específica do plano

  return (
    <div className={reverse ? "plano reverse" : "plano"}>
      <div
        className="plano-img"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="desc">
        <h2>{title}</h2>
        <h3 className="price">{price}</h3>
        <p>{desc}</p>

        <a
          href="https://wa.me/5599999999999?text=Quero+assinar+Skynet"
          className="btn"
        >
          Assinar
        </a>
      </div>
    </div>
  );
}
