import css from "./TruckDetailCard.module.css";

import { NavLink, Outlet } from "react-router-dom";

const TruckDetailCard = ({ truck }) => {
  if (!truck) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div>
        <h2 className={css.truckName}>{truck.name}</h2>
        <div>
          <span className={css.truckRating}>
            ★{truck.rating} ({truck.reviews.length} Reviews)
          </span>
          <span className={css.truckLocation}>{truck.location}</span>
        </div>
        <p className={css.truckPrice}>€{truck.price.toFixed(2)}</p>
      </div>
      <div className={css.truckGallery}>
        {truck.gallery.map((image) => (
          <img
            className={css.truckImage}
            key={image.original}
            src={image.thumb}
            alt={truck.name}
            width={290}
            height={312}
          />
        ))}
      </div>
      <div>
        <p className={css.truckDescription}>{truck.description}</p>
      </div>

      <div>
        <ul className={css.truckAddInfo}>
          <NavLink to="features">
            <li>Features</li>
          </NavLink>
          <NavLink to="reviews">
            <li>Reviews</li>
          </NavLink>
        </ul>
        <Outlet />
      </div>
    </div>
  );
};

export default TruckDetailCard;
