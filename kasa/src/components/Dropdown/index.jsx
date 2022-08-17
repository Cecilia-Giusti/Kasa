import styled from "styled-components";
import colors from "../../utils/style/colors";
import arrowOpen from "../../assets/arrowOpen.png";
import arrowClosed from "../../assets/arrowClosed.png";
import { useState } from "react";

const ContentDropdown = styled.div`
  @media all {
    width: 47.18%;
    ${(props) =>
      props.$fullDropdown && `width:82.5%; margin:auto; padding-bottom:33px`};
  }

  @media (max-width: 600px) {
    width: 100%;
    ${(props) => props.$fullDropdown && `padding-bottom:20px `};
  }
`;

const ContentDropdownClose = styled.div`
  @media all {
    width: 47.18%;
    height: 300px;
    ${(props) =>
      props.$fullDropdown &&
      `width:82.5%; margin:auto; height:inherit;padding-bottom:31px `};
  }

  @media (max-width: 600px) {
    width: 100%;
    height: inherit;
    ${(props) => props.$fullDropdown && `padding-bottom:20px `};
  }
`;

const Button = styled.button`
  @media all {
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
    ${(props) => props.$fullDropdown && `font-size: 24px`};
  }
  @media (max-width: 375px) {
    font-size: 13px;
    height: 30px;
    border-radius: 5px;

    img {
      width: 19px;
      height: 19px;
    }
  }
`;

const Description = styled.div`
  @media all {
    min-height: 249px;
    border-radius: 10px;
    position: relative;
    top: -10px;
    background-color: ${colors.backgroundColorMobil};
    z-index: 40;
  }

  @media (max-width: 375px) {
    min-height: 144px;
  }
`;

const Paragraphe = styled.p`
  @media all {
    margin-top: 0;
    margin-bottom: 0;
    padding: 30px 20px;
    color: ${colors.primary};
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 142.6%;
    ${(props) => props.$fullDropdown && `font-size: 24px`};
  }

  @media (max-width: 375px) {
    font-size: 12px;
    padding: 23px 20px;
  }
`;

const Liste = styled.ul`
  @media all {
    min-height: 249px;
    border-radius: 10px;
    position: relative;
    top: -10px;
    background-color: ${colors.backgroundColorMobil};
    z-index: 40;
    list-style: none;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 142.6%;
    color: ${colors.primary};
    padding: 30px 20px;
  }

  @media (max-width: 375px) {
    font-size: 12px;
    min-height: 144px;
    padding: 23px 20px;
  }
`;

function Dropdown({ type, titre, content, page }) {
  const [isClose, setIsClose] = useState(false);
  return page === "Home" ? (
    !isClose ? (
      <ContentDropdownClose>
        <Button onClick={() => setIsClose(true)}>
          <p>{titre}</p>
          <img src={arrowOpen} alt="Ouvrir" />
        </Button>
      </ContentDropdownClose>
    ) : (
      <ContentDropdown>
        <Button onClick={() => setIsClose(false)}>
          <p>{titre}</p>
          <img src={arrowClosed} alt="Ouvrir" />
        </Button>
        {type === "Paragraphe" ? (
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
    )
  ) : !isClose ? (
    <ContentDropdownClose $fullDropdown>
      <Button $fullDropdown onClick={() => setIsClose(true)}>
        <p>{titre}</p>
        <img src={arrowOpen} alt="Ouvrir" />
      </Button>
    </ContentDropdownClose>
  ) : (
    <ContentDropdown $fullDropdown>
      <Button $fullDropdown onClick={() => setIsClose(false)}>
        <p>{titre}</p>
        <img src={arrowClosed} alt="Ouvrir" />
      </Button>

      <Description>
        <Paragraphe $fullDropdown>{content}</Paragraphe>
      </Description>
    </ContentDropdown>
  );
}

export default Dropdown;
