import teenGroup from "../assets/teen_group.png";

function Brevet() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-purple-800 mb-4">
          En route pour le brevet !
        </h1>
      </div>

      <div className="text-center mb-8">
        <div className="transform transition-transform duration-500 hover:scale-105 mb-6">
          <img
            src={teenGroup}
            alt="groupe d'ado"
            className="rounded-xl shadow-lg mx-auto"
          />
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 mb-8">
        <p className="mb-4">
          Dès les vacances de la Toussaint, j&apos;accompagne vos enfants dans
          leurs révisions, leur organisation, et la préparation aux différentes
          épreuves.
        </p>
        <h2 className="text-2xl font-bold text-purple-700 mb-4">
          Périodes : vacances de février / printemps + avant l&apos;examen
        </h2>
        <p className="mb-2">Min 2 élèves / max 4 élèves</p>
        <p className="mb-4">&gt; 10h de cours (2h/jour pendant 5 jours)</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="bg-purple-50 p-4 rounded-lg shadow transform transition-transform duration-300 hover:scale-105 flex items-center justify-center">
          <p className="font-medium text-center">
            Organisation et optimisation de travail
          </p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg shadow transform transition-transform duration-300 hover:scale-105 flex items-center justify-center">
          <p className="font-medium text-center">
            Révision dans toutes les matières
          </p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg shadow transform transition-transform duration-300 hover:scale-105 flex items-center justify-center">
          <p className="font-medium text-center">Méthodologies de travail</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg shadow transform transition-transform duration-300 hover:scale-105 flex items-center justify-center">
          <p className="font-medium text-center">
            Approfondissement des notions
          </p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg shadow transform transition-transform duration-300 hover:scale-105 flex items-center justify-center">
          <p className="font-medium text-center">
            Exercices, mises en situation, quiz et challenges
          </p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg shadow transform transition-transform duration-300 hover:scale-105 flex items-center justify-center">
          <p className="font-medium text-center">Gestion du stress</p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl shadow-lg text-center">
        <h3 className="text-xl font-bold text-purple-800 mb-4">Tarifs</h3>
        <ul className="space-y-3">
          <li className="flex items-center justify-center p-3 bg-white rounded-lg transform transition-transform duration-300 hover:scale-105">
            <span className="text-2xl mr-3 animate-pulse">🎓</span> 300€ /
            semaine
          </li>
          <li className="flex items-center justify-center p-3 bg-white rounded-lg transform transition-transform duration-300 hover:scale-105">
            <span className="text-2xl mr-3 animate-pulse">📝</span> 4 sessions
            annuelles :
          </li>
          <li className="flex items-center justify-center p-3 bg-white rounded-lg transform transition-transform duration-300 hover:scale-105">
            <span className="text-2xl mr-3 animate-pulse">💰</span> 250 € /
            semaine
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Brevet;
