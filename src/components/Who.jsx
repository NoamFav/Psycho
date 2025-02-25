import side from "../assets/side.png";

function Who() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 mb-8">
        <h1 className="text-4xl font-bold text-purple-800 text-center mb-6 flex items-center justify-center">
          <span className="text-3xl mr-2">👩‍🏫</span> Qui suis-je ?
        </h1>
        <p className="mb-4">
          Après une décennie dans les ressources humaines, ma passion pour la
          psychologie et l&apos;école m&apos;a menée à l&apos;enseignement.
        </p>
        <p className="mb-4">
          J&apos;ai enseigné avec enthousiasme en zone prioritaire pendant près
          de 10 ans. J&apos;ai trop souvent été confrontée aux défis des enfants
          à besoins éducatifs particuliers. Pour mieux y répondre, j&apos;ai
          suivi une formation spécifique au sein de l&apos;Éducation Nationale.
          Maman de deux enfants, j&apos;ai également expérimenté les complexités
          de l&apos;inclusion.
        </p>
        <p className="mb-4">
          Aujourd&apos;hui, je souhaite mettre mon expertise au service des
          enfants et des parents, en leur dédiant un espace personnalisé pour
          favoriser l&apos;épanouissement scolaire et personnel de tous.
        </p>
      </div>

      <div className="text-center mb-8">
        <div className="transform transition-transform duration-500 hover:scale-105 mb-6">
          <img
            src={side}
            alt="femme de coté"
            className="rounded-xl shadow-lg mx-auto"
          />
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl shadow-lg text-center">
        <ul className="space-y-3">
          <li className="flex items-center justify-center p-3 bg-white rounded-lg transform transition-transform duration-300 hover:scale-105">
            <span className="text-2xl mr-3 animate-pulse">🎓</span> Master 1
            MEEF - pratique & ingénierie de la formation
          </li>
          <li className="flex items-center justify-center p-3 bg-white rounded-lg transform transition-transform duration-300 hover:scale-105">
            <span className="text-2xl mr-3 animate-pulse">📚</span> Concours
            Professeurs des écoles
          </li>
          <li className="flex items-center justify-center p-3 bg-white rounded-lg transform transition-transform duration-300 hover:scale-105">
            <span className="text-2xl mr-3 animate-pulse">🧠</span> Psychologue
            Praticienne
          </li>
          <li className="flex items-center justify-center p-3 bg-white rounded-lg transform transition-transform duration-300 hover:scale-105">
            <span className="text-2xl mr-3 animate-pulse">👩‍💼</span> Master 2 en
            Management des Ressources Humaines
          </li>
          <li className="flex items-center justify-center p-3 bg-white rounded-lg transform transition-transform duration-300 hover:scale-105">
            <span className="text-2xl mr-3 animate-pulse">📊</span> Master 1 en
            Sociologie du travail et du développement
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Who;
