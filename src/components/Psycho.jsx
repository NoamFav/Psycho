import "../stylesheet/index.css";
import help from "../assets/help.png";

function Psycho() {
  return (
    <div className="main container">
      <div className="title text-center">
        <h1>🤝 La psychopédagogie ?</h1>
      </div>
      <div className="image text-center">
        <img src={help} alt="enfant avec une main tendu" className="rounded" />
      </div>
      <div className="section">
        <p className="mb-2">
          Un soutien pour les enfants en difficulté scolaire :
        </p>
        <ul>
          <li>🚧 Blocages,</li>
          <li>📉 Retards sur les attendus scolaires,</li>
          <li>🏫 Phobies scolaires ...</li>
        </ul>
        <p className="mb-2">
          Elle intervient également pour renforcer{" "}
          <strong>l’estime de soi</strong>, la <strong>confiance</strong>, pour
          améliorer la <strong>mémoire</strong>, l’organisation et l’autonomie
          dans le travail. En français, en mathématiques, en compréhension ...
          ou face à des troubles des apprentissages, chaque enfant est unique.
        </p>
        <p>
          L’approche psychopédagogique prend en compte tous les aspects du
          développement - intellectuel, émotionnel, social et cognitif - pour
          favoriser l’épanouissement à l&apos;école et dans la vie quotidienne.
        </p>
      </div>
    </div>
  );
}

export default Psycho;
