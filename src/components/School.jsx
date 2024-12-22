import "../stylesheet/index.css";
import handTree from "../assets/hand_tree.png";

function School() {
  return (
    <div className="main container">
      <div className="title text-center">
        <h1>🌱 Un suivi scolaire personnalisé</h1>
      </div>
      <div className="section">
        <h2 className="text-center">Le bilan</h2>
        <h2 className="text-center">4 séances d&apos;1h</h2>
        <p className="mb-2">
          <ul>
            <li>
              🤝 Rencontre avec l&apos;enfant et sa famille dans un climat de
              confiance et de sécurité.
            </li>
            <li>
              📊 Évaluation des acquis scolaires et du comportement de l’enfant
              face aux tâches scolaires, afin de mettre en lumière la nature de
              ses difficultés + entretien individuel (2 séances).
            </li>
            <li>
              📋 Compte-rendu du bilan : restitution en présence des parents et
              de l&apos;élève + conseil et mise en place d’un suivi, si
              nécessaire.
            </li>
          </ul>
        </p>
      </div>
      <div className="image text-center">
        <img src={handTree} alt="Tree made of hands" className="rounded" />
        <div className="card text-center">
          <h2>Tarifs</h2>
          <ul>
            <li>💰 Bilan: 300€</li>
            <li>💸 Suivi: 50€/h</li>
          </ul>
        </div>
      </div>
      <div className="section">
        <h2 className="text-center">Le suivi</h2>
        <h2 className="text-center">
          Séance 1h/1h30 selon les besoins / niveau scolaire - rythme à adapter
        </h2>
        <p className="mb-2 text-center">🧑‍🏫 Séances individuelles</p>
        <p className="mb-2">
          Suite au bilan, j&apos;oriente l’élève vers la médiation appropriée :
          <ul>
            <li>📖 ateliers de lecture,</li>
            <li>📚 soutien scolaire approfondi et adapté,</li>
            <li>🎨 méthode alternative pour donner du sens et (re)motiver,</li>
            <li>🗂️ techniques d’organisation,</li>
            <li>📝 “apprendre à apprendre”,</li>
            <li>🎲 jeux ...</li>
          </ul>
        </p>
      </div>
    </div>
  );
}

export default School;
