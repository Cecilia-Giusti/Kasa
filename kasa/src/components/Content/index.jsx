import Tag from "../Tag";
import Rate from "../Rate";
import Dropdown from "../Dropdown";
import styled from "styled-components";

const TagsAndRating = styled.div`
  display: flex;
  justify-content: space-between;
  marin-top: 20px;
  margin-bottom: 20px;
`;

const Tags = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-start;
`;

const DropdownFlex = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

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
      <TagsAndRating>
        <Tags>
          {tagsArray.map((tagName) => (
            <Tag key={`${tagName}-${id}`} tag={tagName} />
          ))}
        </Tags>
        <Rate rating={rateNumber} />
      </TagsAndRating>
      <DropdownFlex>
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
      </DropdownFlex>
    </section>
  );
}

export default Content;
