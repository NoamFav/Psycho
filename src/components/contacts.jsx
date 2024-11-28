import "../stylesheet/Contacts.css";
import room from "../assets/room.jpg";
import avatar from "../assets/avatar.jpg";

function Contacts() {
  return (
    <div className="contacts">
      <div className="title">
        <h1>Contacts</h1>
      </div>
      <div>
        <p>Pour un premier échange téléphonique :</p>
        <p>
          <a href="https://calendly.com/psychopedagogue/reunion?month=2024-11">
            Clickez ici
          </a>
        </p>
      </div>
      <div className="image">
        <img src={room} alt="salle de classe" />
        <p>16 rue tilly</p>
        <p>92700 Colombes</p>
      </div>
      <div className="map"></div>
      <div className="contact">
        <img src={avatar} alt="avatar" />
      </div>
      <div className="social">
        <p>Facebook</p>
        <p>Instagram</p>
        <p>Linkedin</p>
        <p>WhatsApp</p>
      </div>
    </div>
  );
}

export default Contacts;
