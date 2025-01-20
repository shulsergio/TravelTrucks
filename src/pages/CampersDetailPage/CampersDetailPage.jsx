import { useParams } from "react-router-dom";
import {} from "./CampersDetailPage.module.css";
import { useEffect } from "react";
import Loader from "../../components/Loader/Loader";
import TruckDetailCard from "../../components/TruckDetailCard/TruckDetailCard";
import Container from "../../components/Container/Container";
import Section from "../../components/Section/Section";
import { useDispatch, useSelector } from "react-redux";
import {
  selectError,
  selectIsLoading,
  selectTruck,
} from "../../redux/trucks/selectors";
import { fetchTrucksDetails } from "../../redux/trucks/operations";

const CampersDetailPage = () => {
  const { id: camperId } = useParams();
  const dispatch = useDispatch();
  const truck = useSelector(selectTruck);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchTrucksDetails(camperId));
  }, [dispatch, camperId]);
  return (
    <>
      <Container>
        <Section>
          {isLoading && <Loader />}
          {error && <p>Its wrong</p>}
          <TruckDetailCard truck={truck} />
        </Section>
      </Container>
    </>
  );
};
export default CampersDetailPage;
