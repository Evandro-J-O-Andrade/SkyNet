import React from "react";
import "./PlanoCard.css";
// Importação automática de todas as imagens
const images = import.meta.glob("/src/img/*", { eager: true });

// Função inteligente com fallback
function getImage(fileName) {
  if (!fileName) return images["/src/img/admin.jpg"]?.default;

  const path = `/src/img/${fileName}`;
  return images[path]?.default || images["/src/img/admin.jpg"].default;
}

export default function PlanoCard({ index, title, desc, price, img }) {
  const bg = getImage(img);

  // alternância automática: par = esquerda | ímpar = direita
  const isRight = index % 2 !== 0;

  return (
    <div className={`plano ${isRight ? "align-right" : "align-left"}`}>
      <div
        className="plano-img"
        style={{
          height: "350px",
          width: "400px",
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
