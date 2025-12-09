import React, { useRef, useState, useEffect } from "react";
import "./Top10.css";

// Importação automática das imagens
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

  // Quantos cards aparecem por vez?
  function getVisibleCount() {
    if (window.innerWidth < 600) return 1;     // Mobile
    if (window.innerWidth < 900) return 3;     // Tablet
    return 5;                                  // Desktop
  }

  // Scroll dinâmico baseado no tamanho real do card
  function scrollCarousel(direction) {
    if (!wrapperRef.current) return;

    const card = wrapperRef.current.querySelector(".top10-card");
    if (!card) return;

    const visible = getVisibleCount();
    const scrollValue = card.clientWidth * visible;

    wrapperRef.current.scrollBy({
      left: direction === "left" ? -scrollValue : scrollValue,
      behavior: "smooth",
    });
  }

  // Verifica se precisa mostrar os botões
  useEffect(() => {
    const checkScrollability = () => {
      if (!wrapperRef.current) return;

      const isScrollable =
        wrapperRef.current.scrollWidth > wrapperRef.current.clientWidth;

      setShowNav(isScrollable);
    };

    checkScrollability();
    window.addEventListener("resize", checkScrollability);

    return () => window.removeEventListener("resize", checkScrollability);
  }, [lista]);

  return (
    <section className="top10-section">
      <h2 className="top10-title">TOP 10</h2>

      <div className="top10-content-container">
        {showNav && (
          <>
            <button
              className="nav left"
              onClick={() => scrollCarousel("left")}
            >
              {"<"}
            </button>

            <button
              className="nav right"
              onClick={() => scrollCarousel("right")}
            >
              {">"}
            </button>
          </>
        )}

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
                  {/* Logo N restaurado */}
                  <span className="netflix-logo">N</span>

                  {/* Rank restaurado + 1, 2 e 3 vermelhos */}
                  <span
                    className={`rank-number ${
                      rankNumber <= 3 ? "rank-top" : ""
                    }`}
                  >
                    {rankNumber}
                  </span>

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
