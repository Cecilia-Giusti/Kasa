import "./banner.css";

/** Banniere avec une image
 * @param {string} type - Le type de page, Home ou Apropos
 * @return {JSX.Element}
 */
function Banner({ image, type }) {
  return type === "Home" ? (
    <div className="banner--home">
      <img className="banner__img--home" src={image} alt="Montages" />
      <p className="banner__copy--home">Chez vous, partout et ailleurs</p>
    </div>
  ) : (
    <div className="banner--about">
      <img className="banner__img--about" src={image} alt="Montages" />
    </div>
  );
}

export default Banner;
