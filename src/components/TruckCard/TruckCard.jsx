import Button from "../Button/Button";
import css from "./TruckCard.module.css";

export default function TruckCard({ truck }) {
  const getTrueProperties = (truck) => {
    return Object.entries(truck)
      .filter(([, value]) => value === true)
      .map(([key]) => key);
  };

  const trueProperties = getTrueProperties(truck);

  return (
    <div className={css.truckCard}>
      <div className={css.imageWrapper}>
        <img
          src={truck.gallery[0].original}
          alt={truck.name}
          className={css.truckImage}
          width={290}
          height={320}
        />
      </div>
      <div className={css.cardBox}>
        <div className={css.titleAndPrice}>
          <h2 className={css.truckName}>{truck.name}</h2>
          <span className={css.truckPrice}>€{truck.price.toFixed(2)}</span>
        </div>
        <div className={css.ratingAndLocation}>
          <span className={css.truckRating}>
            ★{truck.rating} ({truck.reviews.length} Reviews)
          </span>
          <span className={css.truckLocation}>{truck.location}</span>
        </div>
        <p className={css.truckDescription}>
          {truck.description.substring(0, 70)}...
        </p>
        <div className={css.features}>
          {trueProperties.map((prop) => (
            <div key={prop} className={css.feature}>
              {prop}
            </div>
          ))}
        </div>
        <Button to={`/campers/${truck.id}`}>Show more</Button>
      </div>
    </div>
  );
}

{
  /* name={truck.name}
        price={truck.price}
        location={truck.location}
        description={truck.description}
        photo={truck.gallery[0].original}
        id={truck.id}
        rating={truck.rating}
        review_qty={truck.reviews.length} */
}
