import { Link } from "react-router-dom";
import "./error.css";

/** Création de l'erreur 404
 * @return {JSX.Element}
 */
function Error() {
  return (
    <section className='error__section'>
      <h1 className='error__title'>404</h1>
      <p className='error__content'>
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to='/Kasa'>
        <p className='error__link'>Retourner sur la page d’accueil</p>
      </Link>
    </section>
  );
}

export default Error;
