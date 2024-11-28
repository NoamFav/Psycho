import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "../stylesheet/App.css";
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
      <div className="app-container">
        <Menu />
        <main className="content">
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
    </Router>
  );
}

export default App;
