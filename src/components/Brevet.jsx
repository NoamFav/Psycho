import "../stylesheet/index.css";
import teenGroup from "../assets/teen_group.png";

function Brevet() {
  return (
    <div className="main container">
      <div className="title text-center">
        <h1>En route pour le brevet !</h1>
      </div>
      <div className="image text-center">
        <img src={teenGroup} alt="groupe d'ado" className="rounded" />
      </div>
      <div className="section">
        <p className="mb-2">
          Dès les vacances de la Toussaint, j’accompagne vos enfants dans leurs
          révisions, leur organisation, et la préparation aux différentes
          épreuves.
        </p>
        <h2>Périodes : vacances de février / printemps + avant l’examen</h2>
        <p>Min 2 élèves / max 4 élèves</p>
        <p>&gt; 10h de cours (2h/jour pendant 5 jours)</p>
      </div>
      <div className="cards">
        <div className="card">Organisation et optimisation de travail</div>
        <div className="card">Révision dans toutes les matières</div>
        <div className="card">Méthodologies de travail</div>
        <div className="card">Approfondissement des notions</div>
        <div className="card">
          Exercices, mises en situation, quiz et challenges
        </div>
        <div className="card">Gestion du stress</div>
        <div className="card">
          <p>
            Tarifs
            <ul>
              <li>🎓 300€ / semaine</li>
              <li>📝 4 sessions annuelles :</li>
              <li>💰 250 € / semaine</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Brevet;
