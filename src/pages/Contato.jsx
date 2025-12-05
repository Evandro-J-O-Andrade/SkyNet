import React from "react";

const images = import.meta.glob("/src/img/*", { eager: true });

function getImage(fileName) {
  const path = `/src/img/${fileName}`;
  return images[path]?.default || images["/src/img/admin.jpg"].default;
}

export default function Contato() {
  const contatoImg = getImage("contato.jpg"); // imagem opcional para ilustrar a seção

  return (
    <section id="contato" className="contato">
      <div className="contato-content">

        <img 
          src={contatoImg} 
          alt="Contato Skynet" 
          className="contato-img"
        />

        <h2>Contato</h2>

        <p>Fale conosco diretamente pelo WhatsApp para suporte ou assinatura.</p>

        <a 
          className="btn"
          href="https://wa.me/5599999999999?text=Olá,+gostaria+de+falar+com+a+Skynet+Streaming"
          target="_blank"
          rel="noopener noreferrer"
        >
          Abrir WhatsApp
        </a>

      </div>
    </section>
  );
}
