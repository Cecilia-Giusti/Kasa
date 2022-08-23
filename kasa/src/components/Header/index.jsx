import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import "./header.css";

/** Création du header
 * @return {JSX.Element}
 */
function Header() {
  return (
    <header>
      <img className="header__img" src={logo} alt=" Logo de Kasa" />
      <nav>
        <ul className="header__list">
          <Link to="/P11---Kasa">
            <li className="header__item">Accueil</li>
          </Link>
          <Link to="/P11---Kasa/a_propos">
            <li className="header__item">A propos</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
