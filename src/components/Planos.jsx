import React from "react";
import PlanoCard from "./PlanoCard";
import "./Planos.css";
import comboVideo from "../img/combo.mp4";

export default function Planos() {
  const planos = [
    {
      price: "R$ 29,90",
      title: "Plano Básico",
      desc: "Acesso total + qualidade 4K + atualizações constantes",
      img: "planobasico.png",
    },
    {
      price: "R$ 79,90",
      title: "Plano Intermediário",
      desc: "Economize e receba suporte premium prioritário",
      img: "planointermediario.png",
    },
    {
      price: "R$ 199,90",
      title: "Plano Premium",
      desc: "Melhor custo-benefício com estabilidade máxima",
      img: "planopremium.png",
    },
  ];

  return (
    <section id="planos" className="planos">
      <video className="planos-bg" autoPlay loop muted playsInline>
        <source src={comboVideo} type="video/mp4" />
      </video>

      <div className="planos-content">
        <h2 className="titulo">Planos Disponíveis</h2>

        {planos.map((plano, index) => (
          <PlanoCard
            key={index}
            index={index}
            title={plano.title}
            desc={plano.desc}
            price={plano.price}
            img={plano.img}
          />
        ))}
      </div>
    </section>
  );
}
