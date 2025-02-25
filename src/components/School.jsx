import handTree from "../assets/hand_tree.png";

function School() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-primary font-comic mb-2 animate-float flex justify-center items-center">
          <span className="mr-3 text-4xl animate-bounce-slow">🌱</span>
          Un suivi scolaire personnalisé
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-primary mb-2 text-center">
            Le bilan
          </h2>
          <h3 className="text-xl text-secondary mb-4 text-center">
            4 séances d&apos;1h
          </h3>

          <ul className="space-y-4">
            <li className="flex p-4 bg-purple-50 rounded-lg transform transition-transform duration-300 hover:scale-105">
              <span className="text-2xl mr-3 flex-shrink-0 animate-pulse">
                🤝
              </span>
              <span>
                Rencontre avec l&apos;enfant et sa famille dans un climat de
                confiance et de sécurité.
              </span>
            </li>
            <li className="flex p-4 bg-purple-50 rounded-lg transform transition-transform duration-300 hover:scale-105">
              <span className="text-2xl mr-3 flex-shrink-0 animate-pulse">
                📊
              </span>
              <span>
                Évaluation des acquis scolaires et du comportement de
                l&apos;enfant face aux tâches scolaires, afin de mettre en
                lumière la nature de ses difficultés + entretien individuel (2
                séances).
              </span>
            </li>
            <li className="flex p-4 bg-purple-50 rounded-lg transform transition-transform duration-300 hover:scale-105">
              <span className="text-2xl mr-3 flex-shrink-0 animate-pulse">
                📋
              </span>
              <span>
                Compte-rendu du bilan : restitution en présence des parents et
                de l&apos;élève + conseil et mise en place d&apos;un suivi, si
                nécessaire.
              </span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col justify-between">
          <div className="transform transition-transform duration-500 hover:scale-105 mb-6">
            <img
              src={handTree}
              alt="Tree made of hands"
              className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          </div>

          <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl shadow-lg text-center">
            <h2 className="text-2xl font-bold text-primary mb-4">Tarifs</h2>
            <ul className="space-y-3">
              <li className="flex items-center justify-center p-3 bg-white rounded-lg transform transition-transform duration-300 hover:scale-105">
                <span className="text-2xl mr-3 animate-pulse">💰</span> Bilan:
                300€
              </li>
              <li className="flex items-center justify-center p-3 bg-white rounded-lg transform transition-transform duration-300 hover:scale-105">
                <span className="text-2xl mr-3 animate-pulse">💸</span> Suivi:
                50€/h
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 mb-10">
        <h2 className="text-2xl font-bold text-primary mb-2 text-center">
          Le suivi
        </h2>
        <h3 className="text-xl text-secondary mb-4 text-center">
          Séance 1h/1h30 selon les besoins / niveau scolaire - rythme à adapter
        </h3>
        <p className="text-lg mb-4 text-center font-bold">
          <span className="text-2xl animate-pulse inline-block mr-2">🧑‍🏫</span>{" "}
          Séances individuelles
        </p>

        <p className="text-lg mb-4">
          Suite au bilan, j&apos;oriente l&apos;élève vers la médiation
          appropriée :
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <li className="flex items-center p-3 bg-purple-50 rounded-lg transform transition-transform duration-300 hover:scale-105">
            <span className="text-2xl mr-3 animate-pulse">📖</span> ateliers de
            lecture
          </li>
          <li className="flex items-center p-3 bg-purple-50 rounded-lg transform transition-transform duration-300 hover:scale-105">
            <span className="text-2xl mr-3 animate-pulse">📚</span> soutien
            scolaire approfondi
          </li>
          <li className="flex items-center p-3 bg-purple-50 rounded-lg transform transition-transform duration-300 hover:scale-105">
            <span className="text-2xl mr-3 animate-pulse">🎨</span> méthode
            alternative
          </li>
          <li className="flex items-center p-3 bg-purple-50 rounded-lg transform transition-transform duration-300 hover:scale-105">
            <span className="text-2xl mr-3 animate-pulse">🗂️</span> techniques
            d&apos;organisation
          </li>
          <li className="flex items-center p-3 bg-purple-50 rounded-lg transform transition-transform duration-300 hover:scale-105">
            <span className="text-2xl mr-3 animate-pulse">📝</span>{" "}
            &quot;apprendre à apprendre&quot;
          </li>
          <li className="flex items-center p-3 bg-purple-50 rounded-lg transform transition-transform duration-300 hover:scale-105">
            <span className="text-2xl mr-3 animate-pulse">🎲</span> jeux
            pédagogiques
          </li>
        </ul>
      </div>
    </div>
  );
}

export default School;
