import { Link } from "react-router-dom";
import styled from "styled-components";

const Article = styled.article`
  @media all {
    width: 340px;
    height: 340px;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    transition-duration: 200ms;

    &::before {
      content: "";
      width: 100%;
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(0, 0, 0, 0.5) 100%
      );
      border-radius: 10px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 50;
      }

    &:hover {
      box-shadow: 1px 1px 12px #777;
      transition-duration: 200ms;
    }
    }
  }
  @media (max-width: 1371px) {
    width: 300px;
    height: 300px;
  }

  @media (max-width: 1230px) {
    width: 280px;
    height: 280px;
  }

  @media (max-width: 1161px) {
    width: 250px;
    height: 250px;
  }

  @media (max-width: 963px) {
    width: 220px;
    height: 220px;
  }

  @media (max-width: 900px) {
    width: 330px;
    height: 330px;
  }

  @media (max-width: 836px) {
    width: 300px;
    height: 300px;
  }

  @media (max-width: 766px) {
    width: 270px;
    height: 270px;
  }

  @media (max-width: 696px) {
    width: 250px;
    height: 250px;
  }

  @media (max-width: 650px) {
    width: 230px;
    height: 230px;
  }

  @media (max-width: 603px) {
    width: 500px;
    height: 400px;
  }

  @media (max-width: 550px) {
    width: 450px;
    height: 350px;
  }

  @media (max-width: 470px) {
    width: 400px;
    height: 300px;
  }

  @media (max-width: 425px) {
    width: 350px;
    height: 300px;
  }

  @media (max-width: 390px) {
    width: 335px;
    height: 255px;
  }
`;

const Cover = styled.img`
  @media all {
    width: 340px;
    height: 340px;
    border-radius: 10px;
    object-fit: cover;
  }

  @media (max-width: 1371px) {
    width: 300px;
    height: 300px;
  }

  @media (max-width: 1230px) {
    width: 280px;
    height: 280px;
  }

  @media (max-width: 1161px) {
    width: 250px;
    height: 250px;
  }

  @media (max-width: 963px) {
    width: 220px;
    height: 220px;
  }

  @media (max-width: 900px) {
    width: 330px;
    height: 330px;
  }

  @media (max-width: 836px) {
    width: 300px;
    height: 300px;
  }

  @media (max-width: 766px) {
    width: 270px;
    height: 270px;
  }

  @media (max-width: 696px) {
    width: 250px;
    height: 250px;
  }

  @media (max-width: 650px) {
    width: 230px;
    height: 230px;
  }

  @media (max-width: 603px) {
    width: 500px;
    height: 400px;
  }

  @media (max-width: 550px) {
    width: 450px;
    height: 350px;
  }

  @media (max-width: 470px) {
    width: 400px;
    height: 300px;
  }

  @media (max-width: 425px) {
    width: 350px;
    height: 300px;
  }

  @media (max-width: 390px) {
    width: 335px;
    height: 255px;
  }
`;

const Title = styled.h2`
  @media all {
    color: white;
    position: absolute;
    left: 5.88%;
    right: 5.88%;
    top: 78.82%;
    bottom: 5.88%;
    z-index: 51;
  }

  @media (max-width: 1371px) {
    top: 72%;
  }

  @media (max-width: 1161px) {
    top: 70%;
    font-size: 16px;
  }

  @media (max-width: 963px) {
    top: 70%;
    font-size: 14px;
  }

  @media (max-width: 900px) {
    top: 75%;
    font-size: 18px;
  }

  @media (max-width: 766px) {
    top: 72%;
  }

  @media (max-width: 696px) {
    font-size: 16px;
    top: 70%;
  }

  @media (max-width: 650px) {
    font-size: 14px;
  }

  @media (max-width: 603px) {
    font-size: 18px;
    top: 75%;
  }

  @media (max-width: 375px) {
    font-size: 18px;
    top: 73.73%;
  }
`;

/** Création d'une miniature pour la galerie
 * @param {string} id - id du bien
 * @param {string} title - Titre du bien
 * @param {string} cover - url de la photo de couverture du bien
 * @return {JSX.Element}
 */
function Thumbnail({ id, title, cover }) {
  return (
    <Link to={`/P11---Kasa/logement/${id}`}>
      <Article>
        <Cover src={cover} alt={title} />
        <Title>{title}</Title>
      </Article>
    </Link>
  );
}

export default Thumbnail;
