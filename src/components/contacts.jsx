import "../stylesheet/index.css";
import room from "../assets/room.jpg";
import avatar from "../assets/avatar.jpg";

function Contacts() {
  return (
    <div className="main container">
      <div className="title text-center">
        <h1>Contacts</h1>
      </div>
      <div className="section text-center">
        <p>Pour un premier échange téléphonique :</p>
        <p>
          <a
            href="https://calendly.com/psychopedagogue/reunion?month=2024-11"
            className="link"
          >
            Cliquez ici
          </a>
        </p>
      </div>
      <div className="image text-center">
        <img
          src={room}
          alt="salle de classe"
          className="rounded"
          style={{ marginBottom: "1rem" }}
        />
        <p>16 rue Tilly</p>
        <p>92700 Colombes</p>
      </div>
      <div className="map text-center">
        <p>Carte Google Map (à intégrer)</p>
      </div>
      <div className="image text-center">
        <img
          src={avatar}
          alt="avatar"
          className="rounded"
          style={{ marginTop: "1rem" }}
        />
      </div>
      <div className="card text-center">
        <p>📘 Facebook</p>
        <p>📸 Instagram</p>
        <p>🔗 Linkedin</p>
        <p>💬 WhatsApp</p>
      </div>
    </div>
  );
}

export default Contacts;
