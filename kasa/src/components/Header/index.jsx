import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../../utils/style/colors";

const HeaderContent = styled.header`
  @media all {
    width: 86.11%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    padding-top: 40px;
    align-items: center;
    padding-bottom: 4%;
  }

  @media (max-width: 600px) {
    width: 89.33%;
    padding-top: 20px;
    padding-bottom: 2%;
  }
`;

const Logo = styled.img`
  @media all {
    width: 210.32px;
    height: 68px;
  }

  @media (max-width: 600px) {
    width: 170px;
    height: 55px;
  }

  @media (max-width: 375px) {
    width: 145px;
    height: 47px;
  }
`;

const Nav = styled.nav``;

const Ul = styled.ul`
  @media all {
    display: flex;
    gap: 57px;
  }

  @media (max-width: 600px) {
    gap: 20px;
  }

  @media (max-width: 375px) {
    gap: 10px;
  }
`;

const Li = styled.li`
  @media all {
    font-family: "Montserrat", "Arial", "Sans-serif";
    color: ${colors.primary};
    font-size: 24px;
    line-height: 142.6%;
    list-style: none;
    &:hover {
      text-decoration-line: underline;
    }
  }

  @media (max-width: 600px) {
    font-size: 16px;
    text-transform: uppercase;
  }

  @media (max-width: 450px) {
    font-size: 14px;
  }

  @media (max-width: 375px) {
    font-size: 12px;
  }
`;

function Header() {
  return (
    <HeaderContent>
      <Logo src={logo} alt=" Logo de Kasa" />
      <Nav>
        <Ul>
          <Link to="/">
            <Li>Accueil</Li>
          </Link>
          <Link to="/a_propos">
            <Li>A propos</Li>
          </Link>
        </Ul>
      </Nav>
    </HeaderContent>
  );
}

export default Header;
