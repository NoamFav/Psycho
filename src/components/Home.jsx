import kidApple from "../assets/kid_apple.png";
import kidDoodle from "../assets/kid_doodle.png";
import kidBook from "../assets/kid_book.png";

function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary font-comic mb-2 animate-float">
          Séverine Favier
        </h1>
        <h2 className="text-2xl md:text-3xl text-secondary font-comic">
          Psychopédagogue
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="transform transition-transform duration-500 hover:scale-105 hover:rotate-2">
          <img
            src={kidApple}
            alt="enfant a lunette avec une pomme sur la tete"
            className="rounded-2xl shadow-lg mx-auto hover:shadow-xl transition-shadow duration-300"
          />
        </div>
        <div className="transform transition-transform duration-500 hover:scale-105 hover:-rotate-2 mt-8 md:mt-0">
          <img
            src={kidDoodle}
            alt="enfant avec un chapeaux universitaire dessiner"
            className="rounded-2xl shadow-lg mx-auto hover:shadow-xl transition-shadow duration-300"
          />
        </div>
        <div className="transform transition-transform duration-500 hover:scale-105 hover:rotate-2 mt-8 md:mt-0">
          <img
            src={kidBook}
            alt="enfant avec un livre sur la tete"
            className="rounded-2xl shadow-lg mx-auto hover:shadow-xl transition-shadow duration-300"
          />
        </div>
      </div>

      <div className="mb-12 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
        <h2 className="text-2xl font-bold text-primary mb-4 flex items-center">
          <span className="mr-2 text-3xl">❓</span> Pourquoi ?
        </h2>
        <p className="text-lg">
          Pour comprendre et améliorer le processus d&apos;apprentissage de
          chaque élève en alliant pédagogie & psychologie.
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
        <h2 className="text-2xl font-bold text-primary mb-4 flex items-center">
          <span className="mr-2 text-3xl">🤔</span> Comment ?
        </h2>
        <p className="text-lg">
          Mon approche repose sur la bienveillance, l&apos;écoute et
          l&apos;adaptation pour libérer le potentiel de chacun.
        </p>
      </div>
    </div>
  );
}

export default Home;
