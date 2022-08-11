import styled from "styled-components";
import colors from "../../utils/style/colors";

const TitleAccomodation = styled.h1`
  font-size: 36px;
  line-height: 142.6%;
  color: ${colors.primary};
`;

const Location = styled.h2`
  font-size: 18px;
  line-height: 142.6%;
  color: ${colors.primary};
`;

function Title({ titleAccomodation, location }) {
  return (
    <div>
      <TitleAccomodation>{titleAccomodation}</TitleAccomodation>
      <Location>{location}</Location>
    </div>
  );
}

export default Title;
