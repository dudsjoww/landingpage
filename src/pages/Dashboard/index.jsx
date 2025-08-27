import { useState } from "react";
import "./styled.css";


export default function Curriculum() {
  const [infoCard, setInfoCard] = useState([
    {
      id: "1",
      title: "Curriculo 1",
      timestampCreation: "20/04/2001",
      info: ["Quem eu sou", "SoftSkills", "Hardskills"]
    },
    {
      id: "2",
      title: "Curriculo 2",
      timestampCreation: "10/02/2020",
      info: ["Experiência", "Educação", "Projetos"]
    },
    {
      id: "3",
      title: "Curriculo 3",
      timestampCreation: "15/08/2023",
      info: ["Resumo", "Habilidades", "Certificações"]
    }
  ]);

  // remover card
  const removeCard = (id) => {
    setInfoCard(infoCard.filter((c) => c.id !== id));
  };

  // criar card (mock)
  const addCard = () => {
    const newId = infoCard.length + 1;
    setInfoCard([
      ...infoCard,
      {
        id: String(newId),
        title: `Curriculo ${newId}`,
        timestampCreation: new Date().toLocaleDateString("pt-BR"),
        info: ["Novo campo", "Personalizar depois"]
      }
    ]);
  };

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Teus curriculos</h2>

      <button onClick={addCard} className="create-button">
        Criar <span className="plus">+</span>
      </button>

      <div className="cards-grid">
        {infoCard.map((element, index) => (
          <div key={element.id} className="card">
            <div className="card-header">
              <h3>{element.title}</h3>
              <button
                className="delete-btn"
                onClick={() => removeCard(element.id)}
              >
                X
              </button>
            </div>
            <p className="card-date">{element.timestampCreation}</p>
            <ul className="card-info">
              {element.info.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
