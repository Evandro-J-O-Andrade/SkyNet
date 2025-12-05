import React, { useState, useRef, useEffect } from "react";


// Importa todas as imagens da pasta
const images = import.meta.glob("/src/img/*", { eager: true });

// Função inteligente para buscar imagem com fallback
function getImage(fileName) {
  if (!fileName) return images["/src/img/admin.jpg"]?.default;

  const path = `/src/img/${fileName}`;
  return images[path]?.default || images["/src/img/admin.jpg"]?.default;
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const burgerRef = useRef(null);

  const logoImage = getImage("LogoSkynet.webp");

  // Fechar o menu se clicar fora
  useEffect(() => {
    function handleClick(e) {
      if (!open) return;

      const clickedMenu = menuRef.current?.contains(e.target);
      const clickedBurger = burgerRef.current?.contains(e.target);

      if (!clickedMenu && !clickedBurger) {
        setOpen(false);
      }
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [open]);

  // Fecha o menu ao clicar em um link
  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="header">
      <div className="header-left">
        <img
          src={logoImage}
          alt="LogoSkynet"
          className="logo-img"
        />
        <span className="logo-text">SkyNet IPTV</span>
      </div>

      <nav
        ref={menuRef}
        className={open ? "menu active" : "menu"}
      >
        <a href="#" onClick={closeMenu}>Home</a>
        <a href="#planos" onClick={closeMenu}>Planos</a>
        <a href="#teste" onClick={closeMenu}>Teste Grátis</a>
        <a href="#sobre" onClick={closeMenu}>Sobre</a>
        <a href="#contato" onClick={closeMenu}>Contato</a>
      </nav>

      <div
        className="hamburger"
        ref={burgerRef}
        onClick={() => setOpen(!open)}
      >
        ☰
      </div>
    </header>
  );
}
