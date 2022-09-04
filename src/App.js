import "./styles/main.scss";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <header className="header">
        <span className="header__title">Sacha</span>
        <nav className="header__navbar">
          <Link to="/">A propos</Link>
          <Link to="#">Projets</Link>
          <Link to="#">Me contacter</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
