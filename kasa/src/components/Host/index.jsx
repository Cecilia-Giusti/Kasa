import styled from "styled-components";
import colors from "../../utils/style/colors";

const HostSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Name = styled.h3`
  @media all {
    font-family: "Montserrat", "Arial", "Sans-serif";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 142.6%;
    width: 93px;
    height: 52px;
    color: ${colors.primary};
    text-align: end;
  }

  @media (max-width: 375px) {
    font-size: 12px;
    width: 50px;
    max-height: 33px;
  }
`;

const Picture = styled.img`
  @media all {
    width: 64px;
    height: 64px;
    border-radius: 50px;
  }

  @media (max-width: 375px) {
    width: 32px;
    height: 32px;
  }
`;

/** Création de la partie hôte de la page du bien
 * @param {string} nameHost - Nom et prénom de l'hote
 * @param {string} pictureHost - Url de la photo de profil de l'hote
 * @return {JSX.Element}
 */
function Host({ nameHost, pictureHost }) {
  return (
    <HostSection>
      <Name>{nameHost}</Name>
      <Picture src={pictureHost} alt={`profil de ${nameHost} `} />
    </HostSection>
  );
}

export default Host;
