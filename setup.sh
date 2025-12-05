#!/bin/bash

echo "=== Criando projeto React ==="
npm create vite@latest SKYNET --template react --yes

cd SKYNET || exit
npm install

echo "=== Limpando arquivos padrão ==="
rm -f src/App.css
rm -f src/index.css
rm -f src/App.jsx
rm -rf src/assets

echo "=== Criando estrutura de pastas ==="
mkdir -p src/components
mkdir -p src/pages

echo "=== Criando main.jsx ==="
cat > src/main.jsx << 'EOF'
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
EOF

echo "=== Criando App.jsx ==="
cat > src/App.jsx << 'EOF'
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Planos from "./components/Planos";
import Novidades from "./components/Novidades";
import Footer from "./components/Footer";
import Contato from "./pages/Contato";
import TesteGratis from "./pages/TesteGratis";
import Sobre from "./pages/Sobre";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Planos />
      <Novidades />
      <TesteGratis />
      <Sobre />
      <Contato />
      <Footer />
    </>
  );
}
EOF

echo "=== Criando Header.jsx ==="
cat > src/components/Header.jsx << 'EOF'
import React, { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">LogoSkynet</div>
      <div className="site-name">Skynet Streaming</div>

      <nav className={open ? "menu active" : "menu"}>
        <a href="#">Home</a>
        <a href="#planos">Planos</a>
        <a href="#teste">Teste Grátis</a>
        <a href="#sobre">Sobre</a>
        <a href="#contato">Contato</a>
      </nav>

      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>
    </header>
  );
}
EOF

echo "=== Criando Hero.jsx ==="
cat > src/components/Hero.jsx << 'EOF'
import React from "react";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Streaming Premium IPTV Skynet</h1>
        <p>Mais de 10.000 canais, filmes, séries e esportes. Zero travamentos.</p>
        <a className="btn" href="https://wa.me/5599999999999?text=Quero+assinar+o+Skynet+Streaming">Assinar Agora via WhatsApp</a>
      </div>
    </section>
  );
}
EOF

echo "=== Criando Planos.jsx ==="
cat > src/components/Planos.jsx << 'EOF'
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
        desc="Full HD + 4K, atualizações semanais e acesso total ao catálogo."
      />

      <PlanoCard
        reverse={true}
        price="R$ 79,90"
        title="Plano Trimestral"
        desc="Economize e tenha mais estabilidade e suporte prioritário."
      />

      <PlanoCard
        reverse={false}
        price="R$ 199,90"
        title="Plano Anual"
        desc="Melhor custo-benefício. Bônus exclusivos e garantia máxima."
      />
    </section>
  );
}
EOF

echo "=== Criando PlanoCard.jsx ==="
cat > src/components/PlanoCard.jsx << 'EOF'
import React from "react";

export default function PlanoCard({ reverse, title, desc, price }) {
  return (
    <div className={reverse ? "plano reverse" : "plano"}>
      <div className="plano-img"></div>

      <div className="desc">
        <h2>{title}</h2>
        <h3 className="price">{price}</h3>
        <p>{desc}</p>
        <a
          href="https://wa.me/5599999999999?text=Quero+assinar+o+plano+Skynet"
          className="btn"
        >
          Assinar via WhatsApp
        </a>
      </div>
    </div>
  );
}
EOF

echo "=== Criando Novidades.jsx ==="
cat > src/components/Novidades.jsx << 'EOF'
import React from "react";

export default function Novidades() {
  return (
    <section className="novidades">
      <h2>Novidades e Lançamentos</h2>
      <p>Novos canais adicionados semanalmente, melhorias de estabilidade e atualizações constantes.</p>
    </section>
  );
}
EOF

echo "=== Criando TesteGratis.jsx ==="
cat > src/pages/TesteGratis.jsx << 'EOF'
import React from "react";

export default function TesteGratis() {
  return (
    <section id="teste" className="teste">
      <h2>Teste Grátis</h2>
      <p>Solicite 30 minutos grátis para testar nossa plataforma.</p>
      <a className="btn" href="https://wa.me/5599999999999?text=Quero+o+teste+gratis+Skynet">Pedir Teste Grátis</a>
    </section>
  );
}
EOF

echo "=== Criando Sobre.jsx ==="
cat > src/pages/Sobre.jsx << 'EOF'
import React from "react";

export default function Sobre() {
  return (
    <section id="sobre" className="sobre">
      <h2>Sobre Nós</h2>
      <p>A Skynet Streaming oferece IPTV de alta qualidade, estabilidade premium e suporte dedicado.</p>
    </section>
  );
}
EOF

echo "=== Criando Contato.jsx ==="
cat > src/pages/Contato.jsx << 'EOF'
import React from "react";

export default function Contato() {
  return (
    <section id="contato" className="contato">
      <h2>Contato</h2>
      <p>Fale conosco diretamente pelo WhatsApp.</p>
      <a className="btn" href="https://wa.me/5599999999999">Abrir WhatsApp</a>
    </section>
  );
}
EOF

echo "=== Criando Footer.jsx ==="
cat > src/components/Footer.jsx << 'EOF'
import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© 2025 Skynet Streaming. Todos os direitos reservados.</p>
    </footer>
  );
}
EOF

echo "=== Criando styles.css ==="
cat > src/styles.css << 'EOF'
/* coloque aqui seu CSS completo — se quiser, eu posso completar com visual premium */
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #0d0d0d;
  color: #fff;
}
EOF

echo "=== PROJETO FINALIZADO! ==="
echo "Execute agora:"
echo "cd skynet-streaming"
echo "npm run dev"
