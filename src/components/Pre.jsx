import kidBackpack from "../assets/kid_backpack.png";

function Pre() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-purple-800 mb-4 flex items-center justify-center">
          <span className="text-3xl mr-2 animate-bounce-slow">🎒</span> Pour une
          rentrée réussie !
        </h1>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 mb-8">
        <p className="mb-4">
          Une semaine de révision, pour aborder la rentrée de façon plus
          sereine...
        </p>
        <p className="mb-4">
          Je vous propose d&apos;accueillir vos enfants fin août afin de réviser
          ensemble, de manière ludique et bienveillante, les notions de
          l&apos;année précédente.
        </p>
        <p className="mb-4">
          Nous reviendrons ensemble sur les compétences non acquises ou
          fragiles, travaillerons sur des méthodes de travail pour gagner en
          efficacité et en autonomie.
        </p>
        <h2 className="text-2xl font-bold text-purple-700 text-center mb-4">
          Pour qui ?
        </h2>
        <p className="mb-4 text-center text-lg">
          Tous les élèves de primaire, les collégiens et les nouveaux lycéens.
        </p>
        <h2 className="text-2xl font-bold text-purple-700 text-center mb-4">
          Période : du 26 au 30 août (horaires à définir ensemble)
        </h2>
      </div>

      <div className="text-center mb-8">
        <div className="transform transition-transform duration-500 hover:scale-105 mb-6">
          <img
            src={kidBackpack}
            alt="enfant regarde dans son sac"
            className="rounded-xl shadow-lg mx-auto"
          />
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg text-center mb-8">
        <h2 className="text-2xl font-bold text-purple-700 mb-4 flex items-center justify-center">
          <span className="text-2xl mr-2">🕒</span> 5 séances de 1h à 1h30,
          selon le niveau scolaire et les besoins
        </h2>
      </div>

      <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl shadow-lg text-center">
        <h3 className="text-xl font-bold text-purple-800 mb-4">Tarifs</h3>
        <ul className="space-y-3">
          <li className="flex items-center justify-center p-3 bg-white rounded-lg transform transition-transform duration-300 hover:scale-105">
            <span className="text-2xl mr-3 animate-pulse">💰</span> 50 €/h
          </li>
          <li className="flex items-center justify-center p-3 bg-white rounded-lg transform transition-transform duration-300 hover:scale-105">
            <span className="text-2xl mr-3 animate-pulse">👥</span> En groupe :
            sur devis
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Pre;
