import logo_footer from "../../assets/logo_footer.png";
import styled from "styled-components";

function Footer() {
  const Footer = styled.footer`
    background-color: black;
    width: 100%;
    height: 209px;
    color: white;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 142.6%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;

  const LogoFooter = styled.img`
    width: 122px;
    height: 39.44px;
  `;

  return (
    <Footer>
      <LogoFooter src={logo_footer} alt=" Logo de Kasa dans le pied de page" />
      <p>© 2020 Kasa. All rights reserved</p>
    </Footer>
  );
}

export default Footer;
