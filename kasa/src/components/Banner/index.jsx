import "./banner.css";

/** Banniere avec une image
 * @param {string} type - Le type de page, Home ou Apropos
 * @return {JSX.Element}
 */
function Banner({ image, type }) {
  return type === "Home" ? (
    <section className="sectionHome">
      <img className="imageHome" src={image} alt="Montages" />
      <p className="slogan">Chez vous, partout et ailleurs</p>
    </section>
  ) : (
    <section className="sectionApropos">
      <img className="imageApropos" src={image} alt="Montages" />
    </section>
  );
}

export default Banner;
