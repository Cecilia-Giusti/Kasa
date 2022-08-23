import arrowRight from "../../assets/arrowRight.png";
import arrowLeft from "../../assets/arrowLeft.png";
import { useState, useEffect } from "react";
import "./carroussel.css";

/** Banniere avec une image
 * @param {array} pictures - Tableau d'image à afficher dans le carroussel
 * @return {JSX.Element}
 */
function Carroussel({ pictures }) {
  const [idPicture, updateId] = useState(0);

  useEffect(() => {
    document.Picture = pictures[idPicture];
  });

  if (pictures.length > 1) {
    return (
      <div className="carrousel">
        <button
          onClick={() =>
            idPicture === 0
              ? updateId(pictures.length - 1)
              : updateId(idPicture - 1)
          }
        >
          <img
            className="carrousel__icon--left"
            src={arrowLeft}
            alt="Précedent"
          />
        </button>
        <img
          className="carrousel__img"
          src={pictures[idPicture]}
          alt="Images"
        />
        <button
          onClick={() =>
            idPicture === pictures.length - 1
              ? updateId(0)
              : updateId(idPicture + 1)
          }
        >
          <p className="carrousel__copy">
            {idPicture + 1}/{pictures.length}
          </p>
          <img
            className="carrousel__icon--right"
            src={arrowRight}
            alt="Suivant"
          />
        </button>
      </div>
    );
  } else {
    return (
      <div className="carrousel">
        <img
          className="carrousel__img"
          src={pictures[idPicture]}
          alt="coucou"
        />
        <p className="carrousel__copy">1/1</p>
      </div>
    );
  }
}

export default Carroussel;
