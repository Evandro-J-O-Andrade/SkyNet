import React from "react";
import PlanoCard from "./PlanoCard";

export default function Planos() {
  return (
    <section id="planos" className="planos">
      <h2 className="titulo">Planos Disponíveis</h2>

      <PlanoCard
        reverse={false}
        price="R$ 29,90"
        title="Plano Básico"
        desc="Acesso total + qualidade 4K + atualizações constantes"
        img="planobasico.png"
      />

      <PlanoCard
        reverse={true}
        price="R$ 79,90"
        title="Plano Intermediário"
        desc="Economize e receba suporte premium prioritário"
        img="planointermediario.png"
      />

      <PlanoCard
        reverse={false}
        price="R$ 199,90"
        title="Plano Premium"
        desc="Melhor custo-benefício com estabilidade máxima"
        img="planopremium.png"
      />
    </section>
  );
}
