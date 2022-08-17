import styled from "styled-components";

const SectionHome = styled.section`
  @media all {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: auto;
    align-items: center;
    height: 500px;
    overflow: hidden;
    border-radius: 25px;
    position: relative;

    &::before {
      content: "";
      width: 100%;
      background-color: black;
      border-radius: 25px;
      mix-blend-mode: darken;
      opacity: 0.3;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 50;
    }
  }

  @media (max-width: 1440px) {
    height: 223px;
  }

  @media (max-width: 600px) {
    height: 111px;
    border-radius: 10px;
    margin-top: 20px;

    &::before {
      border-radius: 10px;
    }
  }
`;

const SectionApropos = styled.section`
  @media all {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: auto;
    align-items: center;
    height: 500px;
    overflow: hidden;
    border-radius: 25px;
    position: relative;

    &::before {
      content: "";
      width: 100%;
      background-color: black;
      border-radius: 25px;
      mix-blend-mode: darken;
      opacity: 0.3;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 50;
    }
  }

  @media (max-width: 1440px) {
    height: 223px;
  }

  @media (max-width: 600px) {
    border-radius: 10px;
    margin-top: 20px;

    &::before {
      border-radius: 10px;
    }

    @media (max-width: 400px) {
      width: 336px;
      height: 223px;
    }
  }
`;

const ImageHome = styled.img`
  @media all {
    position: absolute;
    width: 100%;
    left: 0;
    top: -700px;
    object-fit: contain;
  }

  @media (max-width: 900px) {
    top: -500px;
  }

  @media (max-width: 800px) {
    top: -300px;
  }

  @media (max-width: 600px) {
    top: -200px;
  }
`;

const ImageApropos = styled.img`
  @media all {
    position: absolute;
    width: 100%;
    left: 0;
    top: -250px;
    object-fit: contain;
  }

  @media (max-width: 900px) {
    top: -150px;
  }

  @media (max-width: 800px) {
    top: -100px;
  }

  @media (max-width: 600px) {
    top: 0;
  }

  @media (max-width: 400px) {
    width: 336px;
    height: 223px;
  }
`;

const Slogan = styled.h1`
  @media all {
    font-size: 48px;
    line-height: 142.6%;
    color: white;
    position: absolute;
    top: 35%;
    left: 25%;
    z-index: 60;
  }
  @media (max-width: 1300px) {
    left: 20%;
  }

  @media (max-width: 1200px) {
    left: 15%;
  }

  @media (max-width: 1100px) {
    left: 20%;
    font-size: 40px;
  }

  @media (max-width: 1000px) {
    left: 15%;
  }

  @media (max-width: 900px) {
    left: 15%;
    font-size: 36px;
  }

  @media (max-width: 800px) {
    top: 37%;
    left: 20%;
    font-size: 30px;
  }

  @media (max-width: 700px) {
    left: 10%;
  }

  @media (max-width: 600px) {
    left: 10%;
    font-size: 26px;
  }

  @media (max-width: 500px) {
    font-size: 24px;
    line-height: 100%;
    top: 30%;
    left: 8%;
    padding-right: 20px;
  }
`;

/** Banniere avec une image
 * @param {string} type - Le type de page, Home ou Apropos
 * @return {JSX.Element}
 */
function Banner({ image, type }) {
  return type === "Home" ? (
    <SectionHome>
      <ImageHome src={image} alt="Montages" />
      <Slogan>Chez vous, partout et ailleurs</Slogan>
    </SectionHome>
  ) : (
    <SectionApropos>
      <ImageApropos src={image} alt="Montages" />
    </SectionApropos>
  );
}

export default Banner;
