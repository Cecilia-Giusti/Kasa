import arrowOpen from "../../assets/arrowOpen.png";
import arrowClosed from "../../assets/arrowClosed.png";
import { useState } from "react";
import "./dropdown.css";

/** Création du Dropdown
 * @param {string} type - Choix entre paragraphe ou liste dans le dropdown
 * @param {string} titre - Titre du dropdown
 * @param {string} content - Contenu du dropdown
 * @param {string} page - Page où le dropdown sera, Home ou A propos
 * @return {JSX.Element}
 */
function Dropdown({ type, titre, content, page }) {
  const [isClose, setIsClose] = useState(false);
  return page === "Home" ? (
    !isClose ? (
      <div className="contentDropdownClose">
        <button className="button" onClick={() => setIsClose(true)}>
          <p>{titre}</p>
          <img src={arrowOpen} alt="Ouvrir" />
        </button>
      </div>
    ) : (
      <div className="contentDropdown">
        <button className="button" onClick={() => setIsClose(false)}>
          <p>{titre}</p>
          <img src={arrowClosed} alt="Ouvrir" />
        </button>
        {type === "Paragraphe" ? (
          <div className="description">
            <p className="paragraphe">{content}</p>
          </div>
        ) : (
          <ul className="liste">
            {content.map((element) => (
              <li key={`${element}-${element.id}`}>{element}</li>
            ))}
          </ul>
        )}
      </div>
    )
  ) : !isClose ? (
    <div className="contentDropdownCloseFullDropdown">
      <button className="buttonFullDropdown" onClick={() => setIsClose(true)}>
        <p>{titre}</p>
        <img src={arrowOpen} alt="Ouvrir" />
      </button>
    </div>
  ) : (
    <div className="contentDropdownFullDropdown" $fullDropdown>
      <button className="buttonFullDropdown" onClick={() => setIsClose(false)}>
        <p>{titre}</p>
        <img src={arrowClosed} alt="Ouvrir" />
      </button>

      <div className="description">
        <p className="paragrapheFullDropdown">{content}</p>
      </div>
    </div>
  );
}

export default Dropdown;
