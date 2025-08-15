import React from "react";
import "./MainContainer.css";

export default function MainContainer() {
  const items = [
    { title: "Foco em", text: "Soluções Tecnológicas\nIntegrações\nDesenvolvimento Web", side: "left" },
    { title: "Hardskill", text: "Powershell\nHTML/CSS/JS\nJava", side: "right" },
    { title: "Softskill", text: "Comunicativo\nProativo", side: "left" },
    { title: "Língua", text: "Inglês B1\nPortuguês nativo", side: "right" }
  ];

  return (
    <section id="timeline" className="timeline-section">
      <div className="timeline-container">
        <div className="timeline-line">

            
        </div>
        {items.map((item, index) => (
          <div className={`timeline-item ${item.side}`} key={index}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
