import "./host.css";

/** Création de la partie hôte de la page du bien
 * @param {string} nameHost - Nom et prénom de l'hote
 * @param {string} pictureHost - Url de la photo de profil de l'hote
 * @return {JSX.Element}
 */
function Host({ nameHost, pictureHost }) {
  return (
    <section className="hostSection">
      <h3 className="name">{nameHost}</h3>
      <img
        className="cicture"
        src={pictureHost}
        alt={`profil de ${nameHost} `}
      />
    </section>
  );
}

export default Host;
