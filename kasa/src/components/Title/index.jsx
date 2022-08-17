import styled from "styled-components";
import colors from "../../utils/style/colors";

const TitleAccomodation = styled.h1`
  @media all {
    font-size: 36px;
    line-height: 142.6%;
    color: ${colors.primary};
  }

  @media (max-width: 450px) {
    font-size: 24px;
  }

  @media (max-width: 375px) {
    font-size: 18px;
  }
`;

const Location = styled.h2`
  @media all {
    font-size: 18px;
    line-height: 142.6%;
    color: ${colors.primary};
  }

  @media (max-width: 450px) {
    font-size: 16px;
  }

  @media (max-width: 375px) {
    font-size: 14px;
  }
`;

/** Création des titres de la page d'un bien
 * @param {string} titleAccomodation - Titre du bien
 * @param {string} location - Localisation du bien
 * @return {JSX.Element}
 */
function Title({ titleAccomodation, location }) {
  return (
    <div>
      <TitleAccomodation>{titleAccomodation}</TitleAccomodation>
      <Location>{location}</Location>
    </div>
  );
}

export default Title;
