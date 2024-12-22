import "../stylesheet/index.css";
import side from "../assets/side.png";

function Who() {
  return (
    <div className="main container">
      <div className="section">
        <h1 className="text-center">👩‍🏫 Qui suis-je ?</h1>
        <p className="mb-2">
          Après une décennie dans les ressources humaines, ma passion pour la
          psychologie et l’école m&apos;a menée à l&apos;enseignement.
        </p>
        <p className="mb-2">
          J’ai enseigné avec enthousiasme en zone prioritaire pendant près de 10
          ans. J&apos;ai trop souvent été confrontée aux défis des enfants à
          besoins éducatifs particuliers. Pour mieux y répondre, j&apos;ai suivi
          une formation spécifique au sein de l’Éducation Nationale. Maman de
          deux enfants, j&apos;ai également expérimenté les complexités de
          l&apos;inclusion.
        </p>
        <p>
          Aujourd&apos;hui, je souhaite mettre mon expertise au service des
          enfants et des parents, en leur dédiant un espace personnalisé pour
          favoriser l’épanouissement scolaire et personnel de tous.
        </p>
      </div>
      <div className="image text-center">
        <img src={side} alt="femme de coté" className="rounded" />
      </div>
      <div className="card text-center">
        <ul>
          <li>🎓 Master 1 MEEF - pratique & ingénierie de la formation</li>
          <li>📚 Concours Professeurs des écoles</li>
          <li>🧠 Psychologue Praticienne</li>
          <li>👩‍💼 Master 2 en Management des Ressources Humaines</li>
          <li>📊 Master 1 en Sociologie du travail et du développement</li>
        </ul>
      </div>
    </div>
  );
}

export default Who;
