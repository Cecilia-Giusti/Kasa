import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import "./header.css";

/** Création du header
 * @return {JSX.Element}
 */
function Header() {
  return (
    <header>
      <Link to='/Kasa'>
      <img className='header__img' src={logo} alt=' Logo de Kasa' />
      </Link>
      <nav>
        <ul className='header__list'>
          <Link to='/Kasa'>
            <li className='header__item'>Accueil</li>
          </Link>
          <Link to='/Kasa/a_propos'>
            <li className='header__item'>A propos</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
