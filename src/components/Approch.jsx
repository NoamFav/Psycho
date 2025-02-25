import comp from "../assets/comp.png";

function Approch() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-primary font-comic mb-2 animate-float">
          Mon approche
        </h1>
      </div>

      <div className="mb-10 relative">
        <div className="text-center transform transition-transform duration-500 hover:scale-105">
          <img
            src={comp}
            alt="enfant avec une main tendu"
            className="rounded-2xl shadow-lg mx-auto hover:shadow-xl transition-shadow duration-300"
          />
        </div>
        <div className="mt-6 max-w-3xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-primary p-6 bg-white rounded-xl shadow-md transform hover:-translate-y-1 transition-transform duration-300">
            Comprendre l&apos;individu dans toute sa complexité & adapter
            l&apos;apprentissage à ses besoins spécifiques.
          </h2>
        </div>
      </div>

      <div className="mb-10">
        <p className="text-lg mb-6 bg-white p-5 rounded-xl shadow-md">
          Ma méthode pédagogique allie les outils modernes et des approches
          traditionnelles, conformes aux programmes nationaux.
        </p>

        <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-primary mb-4 flex items-center">
            <span className="mr-2 text-3xl animate-bounce-slow">🎯</span>
            Objectif :
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex items-center p-4 bg-white rounded-lg transform transition-transform duration-300 hover:scale-105 hover:bg-purple-50">
              <span className="text-2xl mr-3 animate-pulse">🎯</span>{" "}
              M&apos;adapter à chacun
            </li>
            <li className="flex items-center p-4 bg-white rounded-lg transform transition-transform duration-300 hover:scale-105 hover:bg-purple-50">
              <span className="text-2xl mr-3 animate-pulse">🌟</span> Renforcer
              la confiance et l&apos;estime de soi
            </li>
            <li className="flex items-center p-4 bg-white rounded-lg transform transition-transform duration-300 hover:scale-105 hover:bg-purple-50">
              <span className="text-2xl mr-3 animate-pulse">📚</span> Soutenir
              lors des évaluations
            </li>
            <li className="flex items-center p-4 bg-white rounded-lg transform transition-transform duration-300 hover:scale-105 hover:bg-purple-50">
              <span className="text-2xl mr-3 animate-pulse">💡</span> Susciter
              la curiosité et le désir d&apos;apprendre
            </li>
            <li className="flex items-center p-4 bg-white rounded-lg transform transition-transform duration-300 hover:scale-105 hover:bg-purple-50">
              <span className="text-2xl mr-3 animate-pulse">✨</span> Développer
              l&apos;autonomie et le plaisir d&apos;apprendre
            </li>
            <li className="flex items-center p-4 bg-white rounded-lg transform transition-transform duration-300 hover:scale-105 hover:bg-purple-50">
              <span className="text-2xl mr-3 animate-pulse">🤝</span> Collaborer
              avec les parents / acteurs éducatifs
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Approch;
