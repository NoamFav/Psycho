import "../stylesheet/Approch.css";
import comp from "../assets/comp.png";

function Approch() {
  return (
    <div className="approch">
      <div className="title">
        <h1>Mon approche</h1>
      </div>
      <div className="image">
        <img src={comp} alt="enfant avec une main tendu" />
        <h2 className="legend">
          <p>
            Comprendre l&apos;individu dans toute sa complexité & adapter
            l&apos;apprentissage à ses besoins spécifiques.
          </p>
        </h2>
      </div>
      <div className="how">
        <p>
          Ma méthode pédagogique allie les outils modernes et des approches
          traditionnelles, conformes aux programmes nationaux.
        </p>
        <div className="objectif">
          <h2>Objectif :</h2>
          <ul>
            <li>M’adapter à chacun</li>
            <li>Renforcer la confiance et l’estime de soi</li>
            <li>Soutenir lors des évaluations</li>
            <li>Susciter la curiosité et le désir d’apprendre</li>
            <li>Développer l’autonomie et le plaisir d’apprendre</li>
            <li>Collaborer avec les parents / acteurs éducatifs</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Approch;
