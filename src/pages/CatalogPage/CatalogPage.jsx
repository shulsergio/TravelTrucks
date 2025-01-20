import Container from "../../components/Container/Container";

// import css from "./CatalogPage.module.css";
import Section from "../../components/Section/Section";
import { useDispatch, useSelector } from "react-redux";
import {
  selectError,
  selectIsLoading,
  selectTrucks,
} from "../../redux/trucks/selectors";
import { useEffect } from "react";
import { fetchTrucks } from "../../redux/trucks/operations";
import Loader from "../../components/Loader/Loader";
import TruckList from "../../components/TruckList/TruckList";
import FilterBox from "../../components/FilterBox/FilterBox";

export default function CatalogPage() {
  const dispatch = useDispatch();
  const trucks = useSelector(selectTrucks);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const pageNumber = 1;

  useEffect(() => {
    dispatch(fetchTrucks({ pageNumber }));
  }, [dispatch, pageNumber]);
  console.log("trucks.length - ", trucks.length);
  return (
    <>
      <Container>
        <Section>
          {isLoading && <Loader />}
          {error && "error"}
          <FilterBox />
          {!isLoading && trucks && trucks.length > 0 && (
            <TruckList trucks={trucks} />
          )}
          {!isLoading && (!trucks || trucks.length === 0) && <p>No capmers</p>}
        </Section>
      </Container>
    </>
  );
}
