import "./title.css";

/** Création des titres de la page d'un bien
 * @param {string} titleAccomodation - Titre du bien
 * @param {string} location - Localisation du bien
 * @return {JSX.Element}
 */
function Title({ titleAccomodation, location }) {
  return (
    <div>
      <h1 className="presentation__title">{titleAccomodation}</h1>
      <h2 className="presentation__subtitle">{location}</h2>
    </div>
  );
}

export default Title;
