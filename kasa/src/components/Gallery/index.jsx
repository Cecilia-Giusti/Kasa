import Thumbnail from "../Thumbnail";
import "./gallery.css";

/** Création de la galerie de la page d'accueil
 * @param {array} accomodationData - Tableau des biens
 * @return {JSX.Element}
 */
function Gallery({ accomodationData }) {
  return (
    <div className="gallery">
      {accomodationData.map(({ id, title, cover }) => (
        <Thumbnail key={`${id}`} id={id} title={title} cover={cover} />
      ))}
    </div>
  );
}

export default Gallery;
