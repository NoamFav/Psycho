import "../stylesheet/index.css";
import postit from "../assets/postit.png";

function Learn() {
  return (
    <div className="main container">
      <div className="title text-center">
        <h1>Apprendre à apprendre</h1>
        <p className="section mb-2">
          Acquérir les bonnes méthodologies de travail, adaptées à chacun en
          s’appuyant sur :
          <ul>
            <li>💡 les intelligences multiples (Howard Gardner) ;</li>
            <li>🤝 un entretien avec l’élève et ses parents.</li>
          </ul>
        </p>
      </div>
      <div className="section">
        <h1 className="text-center">À chacun sa façon de travailler !</h1>
        <p className="mb-2 text-center">Ensuite, nous travaillons sur :</p>
        <div className="cards">
          <div className="card">
            <p>
              L’identification des méthodes de travail :
              <ul>
                <li>📝 prise de notes,</li>
                <li>📄 fiches structurées et hiérarchisées,</li>
                <li>🗺️ mind map,</li>
                <li>✨ flash cards...</li>
              </ul>
            </p>
          </div>
          <div className="card">La mise en œuvre de manière autonome</div>
          <div className="card">L’organisation quotidienne</div>
        </div>
      </div>
      <div className="image text-center">
        <img
          src={postit}
          alt="adolescent avec des postit sur le visage"
          className="rounded"
        />
      </div>
      <div className="section text-center">
        <p className="mb-2">
          ➡️ Apprendre à travailler de manière plus efficace.
        </p>
        <p className="mb-2">Pour qui ? collégien(ne)s, lycéen(ne)s.</p>
        <p className="mb-2">
          Périodes : dernière semaine d’août + petites vacances scolaires.
        </p>
        <div>
          <p className="font-weight-bold">Tarif pour 5 séances : 450€</p>
        </div>
      </div>
    </div>
  );
}

export default Learn;
