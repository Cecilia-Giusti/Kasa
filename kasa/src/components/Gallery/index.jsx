import Thumbnail from "../Thumbnail";
import styled from "styled-components";
import colors from "../../utils/style/colors";

const Section = styled.section`
  @media all {
    display: flex;
    justify-content: center;
    gap: 60px 50px;
    width: 100%;
    margin: auto;
    margin-top: 40px;
    background-color: ${colors.backgroundBody};
    border-radius: 25px;
    box-sizing: border-box;
    padding: 50px;
    flex-wrap: wrap;
  }

  @media (max-width: 1420px) {
    gap: 40px 30px;
  }

  @media (max-width: 1056px) {
    gap: 20px 20px;
    padding: 30px;
  }

  @media (max-width: 987px) {
    padding: 20px;
  }

  @media (max-width: 603px) {
    background-color: inherit;
    padding: inherit;
    gap: inherit;
    row-gap: 20px;
    width: 89.33%;
  }
`;
/** Création de la galerie de la page d'accueil
 * @param {array} accomodationData - Tableau des biens
 * @return {JSX.Element}
 */
function Gallery({ accomodationData }) {
  return (
    <Section>
      {accomodationData.map(({ id, title, cover }) => (
        <Thumbnail key={`${id}`} id={id} title={title} cover={cover} />
      ))}
    </Section>
  );
}

export default Gallery;
