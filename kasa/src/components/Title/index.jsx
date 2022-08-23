import "./title.css";

/** Création des titres de la page d'un bien
 * @param {string} titleAccomodation - Titre du bien
 * @param {string} location - Localisation du bien
 * @return {JSX.Element}
 */
function Title({ titleAccomodation, location }) {
  return (
    <div>
      <h1 className="titleAccomodation">{titleAccomodation}</h1>
      <h2 className="Location">{location}</h2>
    </div>
  );
}

export default Title;
