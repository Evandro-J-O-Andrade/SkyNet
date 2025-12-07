import React from "react";

// Import automático de todas as imagens da pasta img
const images = import.meta.glob("/src/img/*", { eager: true });

// Função inteligente com fallback
function getImage(fileName) {
  if (!fileName) return images["/src/img/admin.jpg"]?.default;

  const path = `/src/img/${fileName}`;
  return images[path]?.default || images["/src/img/admin.jpg"].default;
}

export default function Novidades() {
  // Imagem de fundo da seção Novidades
  const bg = getImage("LogoSkynet.png");

  return (
    <section
      className="novidades"
      style={{
        height: "300px",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    > 
    <br /><br /><br /><br /><br /><br /><br /><br /><br />
    <style></style>
      <h2>Novidades</h2>
      <p>Atualizações semanais e novos canais adicionados.</p>
    </section>
  );
}
