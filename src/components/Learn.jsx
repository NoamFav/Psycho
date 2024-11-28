import "../stylesheet/Learn.css";
import postit from "../assets/postit.png";

function Learn() {
  return (
    <div className="learn">
      <h1>Apprendre à apprendre</h1>
      <p>
        Acquérir les bonnes méthodologies de travail, adaptées à chacun en
        s’appuyant sur :
        <ul>
          <li>les intelligences multiples (Howard Gardner) ;</li>
          <li>un entretien avec l’élève et ses parents.</li>
        </ul>
      </p>
      <h1>A chacun sa façon de travailler !</h1>
      <div>
        <p>Ensuite, nous travaillons sur :</p>
        <div className="learn_card">
          <p>
            L’identification des méthodes de travail :
            <ul>
              <li>prise de notes,</li>
              <li>fiches structurées et hiérarchisées,</li>
              <li>mind map,</li>
              <li>flash card ....</li>
            </ul>
          </p>
        </div>
        <div className="learn_card">
          <p>La mise en oeuvre de manière autonome</p>
        </div>
        <div className="learn_card">
          <p>L’organisation quotidienne</p>
        </div>
      </div>
      <div className="img">
        <img src={postit} alt="adolescent avec des postit sur le visage" />
      </div>
      <div>
        <p>=={">"} Apprendre à travailler de manière plus efficace.</p>
        <p>Pour qui ? collégien(ne)s, lycéen(ne)s.</p>
        <p>Périodes : dernière semaine d’août + petites vacances scolaires.</p>
        <div>
          <p>Tarif pour 5 séances 450€</p>
        </div>
      </div>
    </div>
  );
}

export default Learn;
