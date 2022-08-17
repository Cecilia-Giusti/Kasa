import arrowRight from "../../assets/arrowRight.png";
import arrowLeft from "../../assets/arrowLeft.png";
import styled from "styled-components";
import { useState, useEffect } from "react";

const CarrousselBackground = styled.div`
  @media all {
    height: 800px;
    width: 100%;
    margin: auto;

    border-radius: 25px;
    position: relative;
    overflow: hidden;
    margin-bottom: 30px;
  }

  @media (max-width: 1440px) {
    height: 415px;
  }

  @media (max-width: 375px) {
    width: 100%;
    height: 255px;
    margin-bottom: 15px;
    margin-top: 27px;
    border-radius: 10px;
  }
`;

const Picture = styled.img`
  @media all {
    width: 100%;
    height: 800px;
    border-radius: 25px;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
  }

  @media (max-width: 1440px) {
    height: 415px;
  }

  @media (max-width: 375px) {
    width: 100%;
    height: 255px;
    border-radius: 10px;
  }
`;

const Number = styled.p`
  @media all {
    color: white;
    z-index: 50;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 142.6%;
    position: absolute;
    left: 48.95%;
    right: 49.11%;
    top: 90%;
    bottom: 6.01%;
  }
  @media (max-width: 1440px) {
    left: 48.95%;
    right: 49.11%;
    top: 86.19%;
    bottom: 6.01%;
  }
  @media (max-width: 600px) {
    display: none;
  }
`;

const ArrowRight = styled.img`
  @media all {
    position: absolute;
    left: 92.26%;
    right: 0%;
    top: 45%;
    bottom: 37.24%;
    cursor: pointer;
  }

  @media (max-width: 1440px) {
    top: 33.93%;
  }

  @media (max-width: 1120px) {
    left: 90%;
  }

  @media (max-width: 875px) {
    left: 86%;
  }

  @media (max-width: 650px) {
    top: 40%;
    width: 60px;
  }

  @media (max-width: 500px) {
    top: 45%;
    width: 40px;
    left: 88%;
  }

  @media (max-width: 375px) {
    top: 45%;
    width: 24px;
    left: 92%;
  }
`;

const ArrowLeft = styled.img`
  @media all {
    position: absolute;
    left: 0%;
    right: 92.26%;
    top: 45%;
    bottom: 35.44%;
    z-index: 50;
    cursor: pointer;
  }

  @media (max-width: 1440px) {
    top: 33.93%;
  }

  @media (max-width: 650px) {
    top: 40%;
    width: 60px;
  }

  @media (max-width: 500px) {
    top: 45%;
    width: 40px;
  }

  @media (max-width: 375px) {
    top: 45%;
    width: 24px;
  }
`;

/** Banniere avec une image
 * @param {array} pictures - Tableau d'image à afficher dans le carroussel
 * @return {JSX.Element}
 */
function Carroussel({ pictures }) {
  const [idPicture, updateId] = useState(0);

  useEffect(() => {
    document.Picture = pictures[idPicture];
  });

  if (pictures.length > 1) {
    return (
      <CarrousselBackground>
        <button
          onClick={() =>
            idPicture === 0
              ? updateId(pictures.length - 1)
              : updateId(idPicture - 1)
          }
        >
          <ArrowLeft src={arrowLeft} alt="Précedent" />
        </button>
        <Picture src={pictures[idPicture]} alt="Images" />
        <button
          onClick={() =>
            idPicture === pictures.length - 1
              ? updateId(0)
              : updateId(idPicture + 1)
          }
        >
          <Number>
            {idPicture + 1}/{pictures.length}
          </Number>
          <ArrowRight src={arrowRight} alt="Suivant" />
        </button>
      </CarrousselBackground>
    );
  } else {
    return (
      <CarrousselBackground>
        <Picture src={pictures[idPicture]} alt="coucou" />
        <Number>1/1</Number>
      </CarrousselBackground>
    );
  }
}

export default Carroussel;
