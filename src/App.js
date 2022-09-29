import "./styles/main.scss";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
// import { HashLink } from "react-router-hash-link";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import { AiOutlineCopyright } from "react-icons/ai";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <header className="header">
        <span className="header__title">Sacha</span>
        <nav className="header__navbar">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            A propos
          </NavLink>
          <NavLink
            to="projects"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            Projets
          </NavLink>
          <a
            href="#contact"
            // className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            Me contacter
          </a>
        </nav>
      </header>
      <Routes>
        <Route path="portfolio" element={<Home />}>
          {/* <Route path="contact" element={<Contact />} /> */}
        </Route>
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <a id="contact" />
      <Contact />
      <footer className="footer">
        <AiOutlineCopyright className="footer__logo" />
        <span className="footer__title">Souquet 2022</span>
      </footer>
      {/* </ScrollToTop> */}
    </Router>
  );
}

export default App;
