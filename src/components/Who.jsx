import "../stylesheet/Who.css";
import side from "../assets/side.png";

function Who() {
  return (
    <div className="who">
      <div>
        <h1>Qui suis-je ?</h1>
        <p>
          Après une décennie dans les ressources humaines, ma passion pour la
          psychologie et l’école m&apos;a menée à l&apos;enseignement.
        </p>
        <p>
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
      <div className="image">
        <img src={side} alt="femme de coté" />
      </div>
      <div className="comp">
        <ul>
          <li>
            Master 1 MEEF - pratique & ingénierie de la formation Métiers de la
            scolarisation inclusive
          </li>
          <li>
            Concours Professeurs des écoles préparation aux métiers de
            l’enseignement
          </li>
          <li>Psychologue Praticienne</li>
          <li>Master 2 en Management des Ressources Humaines</li>
          <li>Master 1 en Sociologie du travail et du développement</li>
        </ul>
      </div>
    </div>
  );
}

export default Who;
