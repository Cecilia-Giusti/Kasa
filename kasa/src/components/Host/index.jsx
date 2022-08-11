import styled from "styled-components";
import colors from "../../utils/style/colors";

const Name = styled.h3`
  font-family: "Montserrat", "Arial", "Sans-serif";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 142.6%;
  width: 93px;
  height: 52px;
  color: ${colors.primary};
  text-align: end;
`;

const Picture = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50px;
`;

const HostSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

function Host({ nameHost, pictureHost }) {
  return (
    <HostSection>
      <Name>{nameHost}</Name>
      <Picture src={pictureHost} alt={`profil de ${nameHost} `} />
    </HostSection>
  );
}

export default Host;
