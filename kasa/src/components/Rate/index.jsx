import star_empty from "../../assets/star_empty.svg";
import star_full from "../../assets/star_full.svg";

function Rate({ rating }) {
  const ratingMax = 5;
  const starFull = <img src={star_full} alt="Etoile complete" />;
  const starEmpty = <img src={star_empty} alt="Etoile vide" />;

  const starsArray = [];
  for (let i = 0; i < ratingMax; i++) {
    i < rating ? starsArray.push(starFull) : starsArray.push(starEmpty);
  }

  return <div>{starsArray}</div>;
}

export default Rate;
