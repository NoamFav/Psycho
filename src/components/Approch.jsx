import "../stylesheet/index.css";
import comp from "../assets/comp.png";

function Approch() {
  return (
    <div className="main container">
      <div className="title text-center">
        <h1>Mon approche</h1>
      </div>
      <div className="image text-center">
        <img src={comp} alt="enfant avec une main tendu" className="rounded" />
        <h2 className="card">
          Comprendre l&apos;individu dans toute sa complexité & adapter
          l&apos;apprentissage à ses besoins spécifiques.
        </h2>
      </div>
      <div className="section">
        <p className="mb-2">
          Ma méthode pédagogique allie les outils modernes et des approches
          traditionnelles, conformes aux programmes nationaux.
        </p>
        <div className="card">
          <h2>Objectif :</h2>
          <ul>
            <li>🎯 M’adapter à chacun</li>
            <li>🌟 Renforcer la confiance et l’estime de soi</li>
            <li>📚 Soutenir lors des évaluations</li>
            <li>💡 Susciter la curiosité et le désir d’apprendre</li>
            <li>✨ Développer l’autonomie et le plaisir d’apprendre</li>
            <li>🤝 Collaborer avec les parents / acteurs éducatifs</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Approch;
