import "../stylesheet/index.css";
import kidBackpack from "../assets/kid_backpack.png";

function Pre() {
  return (
    <div className="main container">
      <div className="title text-center">
        <h1>🎒 Pour une rentrée réussie !</h1>
      </div>
      <div className="section">
        <p className="mb-2">
          Une semaine de révision, pour aborder la rentrée de façon plus
          sereine...
        </p>
        <p className="mb-2">
          Je vous propose d’accueillir vos enfants fin août afin de réviser
          ensemble, de manière ludique et bienveillante, les notions de l’année
          précédente.
        </p>
        <p className="mb-2">
          Nous reviendrons ensemble sur les compétences non acquises ou
          fragiles, travaillerons sur des méthodes de travail pour gagner en
          efficacité et en autonomie.
        </p>
        <h2 className="text-center">Pour qui ?</h2>
        <p className="mb-2 text-center">
          Tous les élèves de primaire, les collégiens et les nouveaux lycéens.
        </p>
        <h2 className="text-center">
          Période : du 26 au 30 août (horaires à définir ensemble)
        </h2>
      </div>
      <div className="image text-center">
        <img
          src={kidBackpack}
          alt="enfant regarde dans son sac"
          className="rounded"
        />
      </div>
      <div className="section text-center">
        <h2 className="mb-2">
          🕒 5 séances de 1h à 1h30, selon le niveau scolaire et les besoins
        </h2>
      </div>
      <div className="card text-center">
        <p>
          Tarifs
          <ul>
            <li>💰 50 €/h</li>
            <li>👥 En groupe : sur devis</li>
          </ul>
        </p>
      </div>
    </div>
  );
}

export default Pre;
