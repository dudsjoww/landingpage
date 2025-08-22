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
  <ul class="timeline">
    <li class="timeline-item">Event 1</li>
    <li class="timeline-item">Event 2</li>
    <li class="timeline-item">Event 3</li>
    <li class="timeline-item">Event 4</li>
  </ul>
  )
}