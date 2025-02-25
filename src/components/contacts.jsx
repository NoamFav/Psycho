import room from "../assets/room.jpg";
import avatar from "../assets/avatar.jpg";

function Contacts() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-purple-800 mb-4">Contacts</h1>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center mb-8">
        <p className="mb-2 text-lg">Pour un premier échange téléphonique :</p>
        <a
          href="https://calendly.com/psychopedagogue/reunion?month=2024-11"
          className="inline-block px-6 py-3 bg-purple-600 text-white font-medium rounded-lg transform transition-transform duration-300 hover:scale-105 hover:bg-purple-700"
        >
          Cliquez ici
        </a>
      </div>

      <div className="text-center mb-8">
        <div className="transform transition-transform duration-500 hover:scale-105 mb-4">
          <img
            src={room}
            alt="salle de classe"
            className="rounded-xl shadow-lg mx-auto"
          />
        </div>
        <p className="text-lg font-medium">16 rue Tilly</p>
        <p className="text-lg font-medium">92700 Colombes</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg text-center mb-8">
        <p className="text-lg">Carte Google Map (à intégrer)</p>
      </div>

      <div className="text-center mb-8">
        <div className="transform transition-transform duration-500 hover:scale-105 mb-4">
          <img
            src={avatar}
            alt="avatar"
            className="rounded-full shadow-lg mx-auto w-40 h-40 object-cover"
          />
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl shadow-lg text-center">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center justify-center p-3 bg-white rounded-lg transform transition-transform duration-300 hover:scale-105">
            <span className="text-2xl mr-3">📘</span> Facebook
          </div>
          <div className="flex items-center justify-center p-3 bg-white rounded-lg transform transition-transform duration-300 hover:scale-105">
            <span className="text-2xl mr-3">📸</span> Instagram
          </div>
          <div className="flex items-center justify-center p-3 bg-white rounded-lg transform transition-transform duration-300 hover:scale-105">
            <span className="text-2xl mr-3">🔗</span> Linkedin
          </div>
          <div className="flex items-center justify-center p-3 bg-white rounded-lg transform transition-transform duration-300 hover:scale-105">
            <span className="text-2xl mr-3">💬</span> WhatsApp
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
