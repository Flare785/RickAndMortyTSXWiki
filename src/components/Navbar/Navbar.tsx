import "../../App.css";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/Rick&MortyLogo.png";

const Navbar = () => {
  return (
    <nav>
      <div className="conjunto">
        <div className="conjuntoLogoTitulo">
          <img src={logo} alt="Rick & Morty Logo" className="logo" />
          <h1 className="titulo">
            Rick & Morty <span className="wikiText">Wiki</span>
          </h1>
        </div>

        <div className="wrapBotones">
          <NavLink to="/Home" style={{ textDecoration: "none" }}>
            <h1 className="boton">Home</h1>
          </NavLink>
          <NavLink to="/characters" style={{ textDecoration: "none" }}>
            <h1 className="boton">Characters</h1>
          </NavLink>
          <NavLink to="/episodes" style={{ textDecoration: "none" }}>
            <h1 className="boton">Episodes</h1>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
