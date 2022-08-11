import styled from "styled-components";
import colors from "../../utils/style/colors";

const TagStyle = styled.p`
  height: 25px;
  border-radius: 10px;
  background-color: ${colors.primary};
  color: white;
  font-family: "Montserrat", "Arial", "Sans-serif";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 142.6%;
  text-align: center;
  vertical-align: center;
  padding: 5px 25px 1px 25px;
`;

function Tag({ id, tag }) {
  return <TagStyle key={`${tag}-${id}`}>{tag}</TagStyle>;
}

export default Tag;
