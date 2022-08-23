import logo_footer from "../../assets/logo_footer.png";
import "./footer.css";

/** Création du footer
 * @return {JSX.Element}
 */
function Footer() {
  return (
    <footer className="footerStyle">
      <img
        className="logoFooter"
        src={logo_footer}
        alt=" Logo de Kasa dans le pied de page"
      />
      <p className="paragraphe">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
