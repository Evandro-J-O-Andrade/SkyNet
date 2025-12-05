import React from "react";
import PlanoCard from "./PlanoCard";

export default function Planos() {
  return (
    <section id="planos" className="planos">
      <h2 className="titulo">Planos Disponíveis</h2>

      <PlanoCard
        reverse={false}
        price="R$ 29,90"
        title="Plano Mensal"
        desc="Acesso total + qualidade 4K + atualizações constantes"
        img="plano1.jpg"
      />

      <PlanoCard
        reverse={true}
        price="R$ 79,90"
        title="Plano Trimestral"
        desc="Economize e receba suporte premium prioritário"
        img="plano2.jpg"
      />

      <PlanoCard
        reverse={false}
        price="R$ 199,90"
        title="Plano Anual"
        desc="Melhor custo-benefício com estabilidade máxima"
        img="plano3.jpg"
      />
    </section>
  );
}
