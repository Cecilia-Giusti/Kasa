import styled from "styled-components";
import colors from "../../utils/style/colors";

const TagStyle = styled.p`
  @media all {
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
  }

  @media (max-width: 375px) {
    font-size: 10px;
    height: 18px;
    padding: 3px 25px 0.8px 25px;
  }
`;
/** Création d'un tag
 * @param {string} tag - Tag
 * @return {JSX.Element}
 */
function Tag({ tag }) {
  return <TagStyle>{tag}</TagStyle>;
}

export default Tag;
