import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "../stylesheet/App.css";
import Menu from "./Menu";
import Home from "./Home";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Menu />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
