import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você faria a validação/autenticação
    if (email === "teste@teste.com" && senha === "1234") {
      navigate("/dashboard"); // redireciona
    } else {
      alert("Credenciais inválidas");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className=".login-form">
        <h2 className=".login-title">Login</h2>
        <input
          type="email"
          placeholder="Email"
          className=".login-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          className=".login-input"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <button type="submit" className=".login-button">
          Entrar
        </button>
      </form>
    </div>
  );
}
