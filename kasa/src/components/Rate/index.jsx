import star_empty from "../../assets/star_empty.svg";
import star_full from "../../assets/star_full.svg";
import "./rate.css";

/** Création de la partie note du bien
 * @param {string} rating - Note du bien
 * @return {JSX.Element}
 */
function Rate({ rating }) {
  const ratingMax = 5;
  const starFull = <img src={star_full} alt="Etoile complete" />;
  const starEmpty = <img src={star_empty} alt="Etoile vide" />;

  const starsArray = [];
  for (let i = 0; i < ratingMax; i++) {
    i < rating ? starsArray.push(starFull) : starsArray.push(starEmpty);
  }

  return (
    <ul className="rate__copy">
      {starsArray.map((star, index) => (
        <li key={index}>{star}</li>
      ))}
    </ul>
  );
}

export default Rate;
