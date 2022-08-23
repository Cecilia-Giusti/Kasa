import "./tag.css";

/** Création d'un tag
 * @param {string} tag - Tag
 * @return {JSX.Element}
 */
function Tag({ tag }) {
  return <p className="tagStyle">{tag}</p>;
}

export default Tag;
