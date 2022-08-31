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
  const [isOpen, setIsOpen] = useState(false);
  return page === "Home" ? (
    !isOpen ? (
      <div className="dropdown--close">
        <button className="dropdown__button" onClick={() => setIsOpen(true)}>
          <p>{titre}</p>
          <img src={arrowOpen} alt="Ouvrir" />
        </button>
      </div>
    ) : (
      <div className="dropdown">
        <button className="dropdown__button" onClick={() => setIsOpen(false)}>
          <p>{titre}</p>
          <img src={arrowClosed} alt="Fermer" />
        </button>
        {type === "Paragraphe" ? (
          <div className="dropdown__body">
            <p className="dropdown__copy">{content}</p>
          </div>
        ) : (
          <ul className="dropdown__list">
            {content.map((element) => (
              <li key={`${element}-${element.id}`}>{element}</li>
            ))}
          </ul>
        )}
      </div>
    )
  ) : !isOpen ? (
    <div className="dropdown--close--fullDropdown">
      <button
        className="dropdown__button--fullDropdown"
        onClick={() => setIsOpen(true)}
      >
        <p>{titre}</p>
        <img src={arrowOpen} alt="Ouvrir" />
      </button>
    </div>
  ) : (
    <div className="dropdown--fullDropdown">
      <button
        className="dropdown__button--fullDropdown"
        onClick={() => setIsOpen(false)}
      >
        <p>{titre}</p>
        <img src={arrowClosed} alt="Fermer" />
      </button>

      <div className="dropdown__body">
        <p className="dropdown__copy--fullDropdown">{content}</p>
      </div>
    </div>
  );
}

export default Dropdown;
