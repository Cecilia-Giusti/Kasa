import arrowRight from "../../assets/arrowRight.png";
import arrowLeft from "../../assets/arrowLeft.png";
import styled from "styled-components";
import { useState, useEffect } from "react";

const CarrousselBackground = styled.div`
  width: 100%;
  marging: auto;
  height: 415px;
  border-radius: 25px;
  position: relative;
  overflow: hidden;
  margin-bottom: 30px;
`;

const Picture = styled.img`
  width: 100%;
  height: 415px;
  border-radius: 25px;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;

const Number = styled.p`
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
  top: 86.19%;
  bottom: 6.01%;
`;

const ArrowRight = styled.img`
  position: absolute;
  left: 92.26%;
  right: 0%;
  top: 33.93%;
  bottom: 37.24%;
  cursor: pointer;
`;

const ArrowLeft = styled.img`
  position: absolute;
  left: 0%;
  right: 92.26%;
  top: 35.74%;
  bottom: 35.44%;
  z-index: 50;
  cursor: pointer;
`;

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
