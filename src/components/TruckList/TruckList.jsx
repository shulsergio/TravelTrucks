import TruckItem from "../TruckCard/TruckCard";
import css from "./TruckList.module.css";

export default function TruckList({ trucks }) {
  return (
    <>
      <ul className={css.box}>
        {trucks.map((truck) => (
          <li key={truck.id}>
            <TruckItem truck={truck} />
          </li>
        ))}
      </ul>
    </>
  );
}
