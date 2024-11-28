import "../stylesheet/School.css";
import handTree from "../assets/hand_tree.png";

function School() {
  return (
    <div className="school">
      <div className="title">
        <h1>Un suivi scolaire personnalisé</h1>
      </div>
      <div className="bilan">
        <h2>Le bilan</h2>
        <h2>4 séances d&apos;1h</h2>
        <p>
          <ul>
            <li>
              Rencontre avec l&apos;enfant et sa famille dans un climat de
              confiance et de sécurité.
            </li>
            <li>
              Evaluation des acquis scolaires et du comportement de l’enfant
              face aux tâches scolaires, afin de mettre en lumière la nature ses
              difficultés + entretien individuel (2 séances).
            </li>
            <li>
              Compte-rendu du bilan : restitution en présence des parents et de
              l&apos;élève + conseil et mise en place d’un suivi, si nécessaire.
            </li>
          </ul>
        </p>
      </div>
      <div className="image">
        <img src={handTree} alt="Tree made of hands" />
        <div className="legend">
          <h2>Tarifs</h2>
          <ul>
            <li>Bilan: 300€</li>
            <li>Suivi: 50€/h</li>
          </ul>
        </div>
      </div>
      <div className="suivi">
        <h2>Le suivi</h2>
        <h2>
          Séance 1h/1h30 selon les besoins / niveau scolaire - rythme à adapter
        </h2>
        <p>Séances individuelles</p>
        <p>
          Suite au bilan , j&apos;oriente l’élève vers la médiation appropriée :
          <ul>
            <li>ateliers de lecture,</li>
            <li>soutien scolaire approfondi et adapté,</li>
            <li>méthode alternative pour donner du sens et (re)motiver,</li>
            <li>techniques d’organisation,</li>
            <li>“apprendre à apprendre”,</li>
            <li>jeux ...</li>
          </ul>
        </p>
      </div>
    </div>
  );
}

export default School;
