import "../stylesheet/Pre.css";
import kidBackpack from "../assets/kid_backpack.png";

function Pre() {
  return (
    <div className="pre">
      <div className="title">
        <h1>horizontal decorative line Pour une rentrée réussie !</h1>
      </div>
      <div>
        <p>
          Une semaine de révision, pour aborder la rentrée de façon plus sereine
          ...
        </p>
        <p>
          Je vous propose d’accueillir vos enfants fin août afin de réviser
          ensemble, de manière ludique et bienveillante, les notions de l’année
          précédente.
        </p>
        <p>
          Nous reviendrons ensemble sur les compétences non acquises ou
          fragiles, travaillerons sur des méthodes de travail pour gagner en
          efficacité et en autonomie.
        </p>
        <h2>Pour qui ?</h2>
        <p>
          Tous les élèves de primaire, les collégiens et les nouveaux lycéens.
        </p>
        <h2>Période : du 26 au 30 août (horaires à définir ensemble)</h2>
      </div>
      <div className="image">
        <img src={kidBackpack} alt="enfant regarde dans son sac" />
      </div>
      <div>
        <h2>5 séances de 1h à 1h30, selon le niveau scolaire et les besoins</h2>{" "}
      </div>
      <div className="card">
        <p>
          Tarifs
          <ul>
            <li>50 €/h</li>
            <li>En groupe : sur devis</li>
          </ul>
        </p>
      </div>
    </div>
  );
}

export default Pre;
