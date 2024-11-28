import "../stylesheet/Brevet.css";
import teenGroup from "../assets/teen_group.png";

function Brevet() {
  return (
    <div className="brevet">
      <div className="title">
        <h1>En route pour le brevet !</h1>
      </div>
      <div>
        <img src={teenGroup} alt="groupe d'ado" />
      </div>
      <div>
        <p>
          Dès les vacances de la Toussaint, j’accompagne vos enfants dans leurs
          révisions, leur organisation, et la préparation aux différentes
          épreuves.
        </p>
        <h2>Périodes : vacances de février / printemps + avant l’examen</h2>
        <p>Min 2 élèves / max 4 élèves</p>
        <p>=={">"} 10h de cours (2h/jour pendant 5 jours)</p>
      </div>
      <div className="card">
        <p>Organisation et optimisation de travail</p>
      </div>
      <div className="card">
        <p>Révision dans toutes les matières</p>
      </div>
      <div className="card">
        <p>Méthodologies de travail</p>
      </div>
      <div className="card">
        <p>Approfondissement des notions</p>
      </div>
      <div className="card">
        <p>Exercices, mises en situation, quiz et challenges</p>
      </div>
      <div className="card">
        <p>Gestion du stress</p>
      </div>
      <div className="money">
        <p>
          Tarifs
          <ul>
            <li>300€ / semaine</li>
            <li>4 sessions annuelles :</li>
            <li>250 € / semaine</li>
          </ul>
        </p>
      </div>
    </div>
  );
}

export default Brevet;
