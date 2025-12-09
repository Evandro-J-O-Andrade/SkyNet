import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contato.css";

const images = import.meta.glob("/src/img/*", { eager: true });

function getImage(fileName) {
  const path = `/src/img/${fileName}`;
  return images[path]?.default || images["/src/img/admin.jpg"].default;
}

export default function Contato() {
  const contatoImg = getImage("logosemfundo.png");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const data = {
      nome: form.nome.value,
      email: form.email.value,
      telefone: form.telefone.value,
      plano: form.plano.value,
      mensagem: form.mensagem.value,
    };

    try {
      // 1️⃣ Enviar para Google Sheets
      const response = await fetch(
        "SUA_URL_DO_WEB_APP_DO_APPS_SCRIPT", // substitua aqui
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();

      if (result.status === "sucesso") {
        // 2️⃣ Enviar e-mail via EmailJS
        await emailjs.send(
          "service_uep63dk",
          "SEU_TEMPLATE_ID", // coloque o template que você criou
          data,
          "SEU_PUBLIC_KEY"   // sua public key do EmailJS
        );

        // 3️⃣ Mensagem de sucesso
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus(""), 5000);
      } else {
        throw new Error("Erro no envio para Sheets");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setTimeout(() => setStatus(""), 5000);
    }
  };

  return (
    <section id="contato" className="contato">
      <div className="contato-container">
        <div className="contato-left">
          <img src={contatoImg} alt="Contato Skynet" className="contato-img" />
          <h2>Fale Conosco</h2>
          <p>Entre em contato pelo WhatsApp ou envie uma mensagem pelo formulário.</p>
          <a
            className="btn"
            href="https://wa.me/5511987063917?text=Olá,+gostaria+de+falar+com+a+Skynet+Streaming"
            target="_blank"
            rel="noopener noreferrer"
          >
            Abrir WhatsApp
          </a>
        </div>

        <div className="contato-right">
          <h3>Envie uma mensagem</h3>
          <form className="contato-form" onSubmit={handleSubmit}>
            <input type="text" name="nome" placeholder="Seu nome" required />
            <input type="email" name="email" placeholder="Seu e-mail" required />
            <input type="text" name="telefone" placeholder="Telefone (opcional)" />
            <select name="plano">
              <option value="">Selecione um plano (opcional)</option>
              <option value="Quero um Plano">Quero um Plano</option>
              <option value="Plano Mensal">Plano Mensal</option>
              <option value="Plano Trimestral">Plano Trimestral</option>
              <option value="Plano Anual">Plano Anual</option>
              <option value="Outros">Outros</option>
            </select>
            <textarea name="mensagem" placeholder="Sua mensagem" rows="4" required></textarea>
            <button type="submit" className="btn form-btn">Enviar</button>

            {status === "success" && <p className="msg success">Mensagem enviada com sucesso.</p>}
            {status === "error" && <p className="msg error">Erro ao enviar. Tente novamente.</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
