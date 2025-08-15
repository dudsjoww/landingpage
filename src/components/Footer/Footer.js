import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer id="footer" className="footer">
      <p>&copy; {new Date().getFullYear()} - Meu Site</p>
    </footer>
  );
}
