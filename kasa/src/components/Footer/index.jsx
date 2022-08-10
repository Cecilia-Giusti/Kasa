import logo_footer from "../../assets/logo_footer.png";
import styled from "styled-components";

function Footer() {
  const Footer = styled.footer`
    @media all {
      background-color: black;
      width: 100%;
      height: 209px;
      color: white;
      font-size: 24px;
      line-height: 142.6%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: 20px;
    }
  `;

  const LogoFooter = styled.img`
    @media all {
      width: 122px;
      height: 39.44px;
    }
  `;

  const Paragraphe = styled.p`
    @media all {
      font-family: "Montserrat", Arial, "Sans-serif";
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 142.6%;
    }

    @media (max-width: 600px) {
      font-size: 16px;
    }

    @media (max-width: 375px) {
      font-size: 12px;
      margin-top: 20px;
    }
  `;

  return (
    <Footer>
      <LogoFooter src={logo_footer} alt=" Logo de Kasa dans le pied de page" />
      <Paragraphe>© 2020 Kasa. All rights reserved</Paragraphe>
    </Footer>
  );
}

export default Footer;
