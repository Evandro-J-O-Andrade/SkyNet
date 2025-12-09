import React, { useRef, useState, useEffect } from "react";
import "./Top10.css";

// Funções de importação de imagem (mantidas)
const images = import.meta.glob("/src/img/*", { eager: true });
function getImage(fileName) {
  if (!fileName) return images["/src/img/admin.jpg"]?.default;
  const path = `/src/img/${fileName}`;
  return images[path]?.default || images["/src/img/admin.jpg"].default;
}

export default function Top10() {
  const lista = [
    { title: "", img: "Lucifer.webp" },
    { title: "Round 6", img: "round6.jpeg" },
    { title: "", img: "Moana2.jpg" },
    { title: "", img: "TheSevenDeadlySins.webp" },
    { title: "THE WITCHER", img: "witch.jpg" },
    { title: "", img: "onepiece.webp" },
    { title: "", img: "naruto.jpg" },
    { title: "", img: "onepunchman.webp" },
    { title: "", img: "cobracai.jpg" },
    { title: "SÉRIE 10", img: "mundo-bita.png" }
  ];

  const wrapperRef = useRef(null);
  const [showNav, setShowNav] = useState(false);
  
  // Ajuste de rolagem para o tamanho de 5 itens
  // Isso rola 5 "cards" por vez, proporcionando um salto limpo.
  const SCROLL_AMOUNT = 1200; 

  const scrollCarousel = (direction) => {
    if (wrapperRef.current) {
      const scrollValue = direction === 'left' ? -SCROLL_AMOUNT : SCROLL_AMOUNT;
      wrapperRef.current.scrollBy({
        left: scrollValue,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const checkScrollability = () => {
      if (wrapperRef.current) {
        const isScrollable = wrapperRef.current.scrollWidth > wrapperRef.current.clientWidth;
        setShowNav(isScrollable);
      }
    };
    checkScrollability();
    window.addEventListener('resize', checkScrollability);
    return () => window.removeEventListener('resize', checkScrollability);
  }, [lista]);

  return (
    <section className="top10-section">
      <h2 className="top10-title">TOP 10</h2>

      <div className="top10-content-container"> 
        
        {/* Botões de navegação */}
        {showNav && (
          <>
            <button 
              className="nav left" 
              onClick={() => scrollCarousel('left')}
              aria-label="Rolar para a esquerda"
            >
              {"<"}
            </button>
            <button 
              className="nav right" 
              onClick={() => scrollCarousel('right')}
              aria-label="Rolar para a direita"
            >
              {">"}
            </button>
          </>
        )}

        {/* 2. Scroll lateral e sem scrollbars */}
        <div className="top10-wrapper" ref={wrapperRef}>
          {lista.map((item, index) => {
            const bg = getImage(item.img);
            const rankNumber = index + 1;
            
            return (
              <div key={index} className="top10-card">
                
                <div
                  className="card-img"
                  style={{ backgroundImage: `url(${bg})` }}
                >
                    <span className="netflix-logo">N</span>
                    
                    {/* 1. Rank menor, sobre a foto, no canto inferior esquerdo */}
                    <span 
                        className={`rank-number ${rankNumber <= 3 ? 'rank-top' : ''}`}
                    >
                        {rankNumber}
                    </span>
                    
                    {/* Título (opcional, pode ser removido se o design não o incluir) */}
                    <p className="card-title">{item.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}