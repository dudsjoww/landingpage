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
  <div className="Container" id="timeline">
    <ul class="timeline">
      {items.map((element,index) =>(
        <li key={index} className="timeline-item">
          <h1>{element.title}</h1>
          <p>{element.text}</p>
        </li>
      ))}
    </ul>
  </div>
  )
}