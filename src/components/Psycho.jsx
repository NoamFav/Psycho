import "../stylesheet/Psycho.css";
import help from "../assets/help.png";

function Psycho() {
  return (
    <div className="psycho">
      <div className="title">
        <h1>La psychopédagogie ?</h1>
      </div>
      <div className="image">
        <img src={help} alt="enfant avec une main tendu" />
      </div>
      <div className="Why">
        <p>Un soutien pour les enfants en difficulté scolaire :</p>
        <ul>
          <li>Blocages,</li>
          <li>Retards sur les attendus scolaires,</li>
          <li>Phobies scolaires ...</li>
        </ul>
        <p>
          Elle intervient également pour renforcer l’estime de soi, la
          confiance, pour améliorer la mémoire, l’organisation et l’autonomie
          dans le travail. En français, en mathématiques, en compréhension ...
          ou face à des troubles des apprentissages, chaque enfant est unique.
          L’approche psychopédagogique prend en compte tous les aspects du
          développement - intellectuel, émotionnel, social et cognitif - pour
          favoriser l’épanouissement à l&apos;école et dans la vie quotidienne.
        </p>
      </div>
    </div>
  );
}

export default Psycho;
