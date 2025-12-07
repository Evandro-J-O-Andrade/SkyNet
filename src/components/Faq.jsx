import React, { useState } from "react";
import "./Faq.css";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "Como funciona a assinatura da Skynet?",
      answer:
        "Você escolhe um plano, realiza o pagamento e recebe acesso imediato ao nosso serviço com suporte completo."
    },
    {
      question: "Posso assistir em vários dispositivos?",
      answer:
        "Sim. Todos os planos permitem que você acesse em mais de um dispositivo, dependendo do plano contratado."
    },
    {
      question: "Há período de teste grátis?",
      answer:
        "Sim. Oferecemos teste grátis mediante solicitação. Entre em contato pelo WhatsApp."
    },
    {
      question: "O serviço possui fidelidade?",
      answer:
        "Não. Você pode cancelar quando quiser sem qualquer multa ou taxa adicional."
    },
    {
      question: "Como recebo o suporte técnico?",
      answer:
        "Nosso suporte é 24h via WhatsApp com prioridade para planos intermediário e premium."
    }
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <h2>Perguntas Frequentes</h2>

      <div className="faq-container">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <button className="faq-question" onClick={() => toggle(index)}>
              <span>{item.question}</span>
              <span className={`icon ${openIndex === index ? "open" : ""}`}>
                +
              </span>
            </button>

            <div
              className={`faq-answer ${
                openIndex === index ? "show" : ""
              }`}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
