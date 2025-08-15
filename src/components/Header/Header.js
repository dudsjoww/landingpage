import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <h1>Meu Site</h1>
      <nav>
        <ul>
          <li><a href="#landing">Início</a></li>
          <li><a href="#timeline">Timeline</a></li>
          <li><a href="#footer">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}
