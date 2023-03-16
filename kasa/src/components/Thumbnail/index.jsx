import { Link } from "react-router-dom";
import "./thumbnail.css";

/** Création d'une miniature pour la galerie
 * @param {string} id - id du bien
 * @param {string} title - Titre du bien
 * @param {string} cover - url de la photo de couverture du bien
 * @return {JSX.Element}
 */
function Thumbnail({ id, title, cover }) {
  return (
    <Link to={`/Kasa/logement/${id}`}>
      <article className='card'>
        <img className='card__img' src={cover} alt={title} />
        <h2 className='card__title'>{title}</h2>
      </article>
    </Link>
  );
}

export default Thumbnail;
