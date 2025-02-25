import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Menu from "./Menu";
import Home from "./Home";
import Psycho from "./Psycho";
import Approch from "./Approch";
import School from "./School";
import Learn from "./Learn";
import Brevet from "./Brevet";
import Pre from "./Pre";
import Who from "./Who";
import Contacts from "./Contacts";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-light to-purple-50 font-rounded text-dark">
        <div className="container mx-auto px-4 py-2 flex flex-col md:flex-row">
          <Menu />
          <main className="flex-grow p-4 transition-all duration-300 ease-in-out">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/psycho" element={<Psycho />} />
              <Route path="/approch" element={<Approch />} />
              <Route path="/school" element={<School />} />
              <Route path="/learn" element={<Learn />} />
              <Route path="/brevet" element={<Brevet />} />
              <Route path="/pre" element={<Pre />} />
              <Route path="/who" element={<Who />} />
              <Route path="/contacts" element={<Contacts />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
