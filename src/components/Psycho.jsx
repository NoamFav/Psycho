import help from "../assets/help.png";

function Psycho() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-primary font-comic mb-2 animate-float flex justify-center items-center">
          <span className="mr-3 text-4xl animate-bounce-slow">🤝</span>
          La psychopédagogie ?
        </h1>
      </div>

      <div className="mb-10 flex justify-center">
        <div className="relative transform transition-transform duration-500 hover:scale-105">
          <img
            src={help}
            alt="enfant avec une main tendu"
            className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          />
          <div className="absolute -top-4 -right-4 bg-secondary text-white p-3 rounded-full shadow-lg animate-pulse">
            <span className="text-xl">❤️</span>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
        <p className="text-lg mb-4">
          Un soutien pour les enfants en difficulté scolaire :
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <li className="flex items-center p-3 bg-red-100 rounded-lg transform transition-transform duration-300 hover:scale-105">
            <span className="text-2xl mr-3 animate-pulse">🚧</span> Blocages
          </li>
          <li className="flex items-center p-3 bg-yellow-100 rounded-lg transform transition-transform duration-300 hover:scale-105">
            <span className="text-2xl mr-3 animate-pulse">📉</span> Retards sur
            les attendus scolaires
          </li>
          <li className="flex items-center p-3 bg-blue-100 rounded-lg transform transition-transform duration-300 hover:scale-105">
            <span className="text-2xl mr-3 animate-pulse">🏫</span> Phobies
            scolaires
          </li>
        </ul>

        <p className="text-lg mb-4">
          Elle intervient également pour renforcer{" "}
          <span className="font-bold text-primary">l&apos;estime de soi</span>,
          la <span className="font-bold text-primary">confiance</span>, pour
          améliorer la <span className="font-bold text-primary">mémoire</span>,
          l&apos;organisation et l&apos;autonomie dans le travail. En français,
          en mathématiques, en compréhension ... ou face à des troubles des
          apprentissages, chaque enfant est unique.
        </p>

        <p className="text-lg bg-purple-50 p-4 rounded-lg italic">
          L&apos;approche psychopédagogique prend en compte tous les aspects du
          développement - intellectuel, émotionnel, social et cognitif - pour
          favoriser l&apos;épanouissement à l&apos;école et dans la vie
          quotidienne.
        </p>
      </div>
    </div>
  );
}

export default Psycho;
