import { Link } from "react-router-dom";
import "./error.css";

/** Création de l'erreur 404
 * @return {JSX.Element}
 */
function Error() {
  return (
    <section>
      <p className="number">404</p>
      <p className="paragraphe">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/P11---Kasa">
        <p className="Home">Retourner sur la page d’accueil</p>
      </Link>
    </section>
  );
}

export default Error;
