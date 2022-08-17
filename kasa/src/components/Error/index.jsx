import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../../utils/style/colors";

const Number = styled.p`
  @media all {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 288px;
    line-height: 142.6%;
    text-align: center;
    color: ${colors.primary};
    margin-bottom: 66px;
  }

  @media (max-width: 1024px) {
    font-size: 200px;
    margin-bottom: 50px;
  }

  @media (max-width: 768px) {
    font-size: 150px;
    margin-top: 50px;
  }

  @media (max-width: 425px) {
    font-size: 96px;
    margin-bottom: 11px;
  }
`;

const Paragraphe = styled.p`
  @media all {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 142.6%;
    text-align: center;
    color: ${colors.primary};
    margin-bottom: 182px;
  }

  @media (max-width: 1024px) {
    font-size: 30px;
  }

  @media (max-width: 768px) {
    font-size: 26px;
    margin-bottom: 100px;
  }

  @media (max-width: 425px) {
    font-size: 18px;
    margin-bottom: 133px;
  }
`;

const Home = styled.p`
  @media all {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 142.6%;
    color: ${colors.primary};
    text-align: center;
    margin-bottom: 159px;
    text-decoration: underline;
  }

  @media (max-width: 425px) {
    font-size: 14px;
    margin-bottom: 235px;
  }
`;

/** Création de l'erreur 404
 * @return {JSX.Element}
 */
function Error() {
  return (
    <section>
      <Number>404</Number>
      <Paragraphe>Oups! La page que vous demandez n'existe pas.</Paragraphe>
      <Link to="/P11---Kasa">
        <Home>Retourner sur la page d’accueil</Home>
      </Link>
    </section>
  );
}

export default Error;
