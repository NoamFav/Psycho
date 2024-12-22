import "../stylesheet/index.css";
import kidApple from "../assets/kid_apple.png";
import kidDoodle from "../assets/kid_doodle.png";
import kidBook from "../assets/kid_book.png";

function Home() {
  return (
    <div className="main container">
      <div className="title text-center">
        <h1>Séverine Favier</h1>
        <h2>Psychopédagogue</h2>
      </div>
      <div className="images">
        <img src={kidApple} alt="enfant a lunette avec une pomme sur la tete" />
        <img
          src={kidDoodle}
          alt="enfant avec un chapeaux universitaire dessiner"
        />
        <img src={kidBook} alt="enfant avec un livre sur la tete" />
      </div>
      <div className="section">
        <h2>Pourquoi ?</h2>
        <p className="mb-2">
          Pour comprendre et améliorer le processus d’apprentissage de chaque
          élève en alliant pédagogie & psychologie.
        </p>
      </div>
      <div className="section">
        <h2>Comment ?</h2>
        <p className="mb-2">
          Mon approche repose sur la bienveillance, l’écoute et l’adaptation
          pour libérer le potentiel de chacun.
        </p>
      </div>
    </div>
  );
}

export default Home;
