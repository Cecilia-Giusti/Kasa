import styled from "styled-components";
import colors from "../../utils/style/colors";
import arrowOpen from "../../assets/arrowOpen.png";
import arrowClosed from "../../assets/arrowClosed.png";
import { useState } from "react";

const ContentDropdown = styled.div`
  width: 47.18%;
`;

const ContentDropdownClose = styled.div`
  width: 47.18%;
  height: 300px;
`;

const Button = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  background-color: ${colors.primary};
  color: white;
  height: 52px;
  border-radius: 10px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 142.6%;
  z-index: 50;
  position: relative;
`;

const Description = styled.div`
  height: 249px;
  border-radius: 10px;
  position: relative;
  top: -10px;
  background-color: ${colors.backgroundBody};
  z-index: 40;
`;

const Paragraphe = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  padding: 30px 20px;
  color: ${colors.primary};
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 142.6%;
`;

const Liste = styled.ul`
  height: 249px;
  border-radius: 10px;
  position: relative;
  top: -10px;
  background-color: ${colors.backgroundBody};
  z-index: 40;
  list-style: none;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 142.6%;
  color: ${colors.primary};
  padding: 30px 20px;
`;

function Dropdown({ type, content }) {
  const [isClose, setIsClose] = useState(false);
  return !isClose ? (
    <ContentDropdownClose>
      <Button onClick={() => setIsClose(true)}>
        <p>{type}</p>
        <img src={arrowOpen} alt="Ouvrir" />
      </Button>
    </ContentDropdownClose>
  ) : (
    <ContentDropdown>
      <Button onClick={() => setIsClose(false)}>
        <p>{type}</p>
        <img src={arrowClosed} alt="Ouvrir" />
      </Button>
      {type === "Description" ? (
        <Description>
          <Paragraphe>{content}</Paragraphe>
        </Description>
      ) : (
        <Liste>
          {content.map((element) => (
            <li key={`${element}-${element.id}`}>{element}</li>
          ))}
        </Liste>
      )}
    </ContentDropdown>
  );
}

export default Dropdown;
