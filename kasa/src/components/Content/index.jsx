import Tag from "../Tag";
import Rate from "../Rate";
import Dropdown from "../Dropdown";
import "./content.css";

/** Contenu de la page d'une location, tags, note, description et equipements
 * @param {string} id - id du bien
 * @param {array} tagsArray - Tableau des tags du bien
 * @param {string} rateNumber - note du bien
 * @param {string} description - Description du bien
 * @param {array} equipment - Tableau des équipements du bien
 * @return {JSX.Element}
 */
function Content({ id, tagsArray, rateNumber, description, equipment }) {
  return (
    <section>
      <div className="tagsAndRating">
        <div className="tags">
          {tagsArray.map((tagName) => (
            <Tag key={`${tagName}-${id}`} tag={tagName} />
          ))}
        </div>
        <Rate rating={rateNumber} />
      </div>
      <div className="dropdownFlex">
        <Dropdown
          type="Paragraphe"
          titre="Description"
          page="Home"
          content={description}
        />
        <Dropdown
          type="Liste"
          titre="Équipements"
          page="Home"
          content={equipment}
        />
      </div>
    </section>
  );
}

export default Content;
