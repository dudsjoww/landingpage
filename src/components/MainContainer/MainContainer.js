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
      <div className="timeline">

      </div>
    </section>
  );
}
