import postit from "../assets/postit.png";

function Learn() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-purple-800 mb-4">
          Apprendre à apprendre
        </h1>
        <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
          <p className="mb-4">
            Acquérir les bonnes méthodologies de travail, adaptées à chacun en
            s'appuyant sur :
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-center p-3 bg-purple-50 rounded-lg transform transition-transform duration-300 hover:scale-105">
              <span className="text-2xl mr-3 animate-pulse">💡</span> les
              intelligences multiples (Howard Gardner) ;
            </li>
            <li className="flex items-center p-3 bg-purple-50 rounded-lg transform transition-transform duration-300 hover:scale-105">
              <span className="text-2xl mr-3 animate-pulse">🤝</span> un
              entretien avec l'élève et ses parents.
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 mb-8">
        <h1 className="text-3xl font-bold text-purple-800 text-center mb-4">
          À chacun sa façon de travailler !
        </h1>
        <p className="text-lg mb-6 text-center">
          Ensuite, nous travaillons sur :
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-purple-50 p-4 rounded-lg shadow transform transition-transform duration-300 hover:scale-105">
            <p className="font-medium mb-2">
              L&apos;identification des méthodes de travail :
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-xl mr-2">📝</span> prise de notes,
              </li>
              <li className="flex items-center">
                <span className="text-xl mr-2">📄</span> fiches structurées et
                hiérarchisées,
              </li>
              <li className="flex items-center">
                <span className="text-xl mr-2">🗺️</span> mind map,
              </li>
              <li className="flex items-center">
                <span className="text-xl mr-2">✨</span> flash cards...
              </li>
            </ul>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg shadow transform transition-transform duration-300 hover:scale-105 flex items-center justify-center">
            <p className="font-medium text-center">
              La mise en œuvre de manière autonome
            </p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg shadow transform transition-transform duration-300 hover:scale-105 flex items-center justify-center">
            <p className="font-medium text-center">
              L&apos;organisation quotidienne
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mb-8">
        <div className="transform transition-transform duration-500 hover:scale-105 mb-6">
          <img
            src={postit}
            alt="adolescent avec des postit sur le visage"
            className="rounded-xl shadow-lg mx-auto"
          />
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg text-center mb-8">
        <p className="text-lg mb-4">
          <span className="text-2xl mr-2">➡️</span> Apprendre à travailler de
          manière plus efficace.
        </p>
        <p className="text-lg mb-4">Pour qui ? collégien(ne)s, lycéen(ne)s.</p>
        <p className="text-lg mb-4">
          Périodes : dernière semaine d&apos;août + petites vacances scolaires.
        </p>
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-lg">
          <p className="font-bold text-xl text-purple-800">
            Tarif pour 5 séances : 450€
          </p>
        </div>
      </div>
    </div>
  );
}

export default Learn;
