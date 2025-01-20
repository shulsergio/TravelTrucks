import { lazy, Suspense } from "react";
import "./App.css";
import { Navigations } from "./components/Navigations/Navigations";
import Loader from "./components/Loader/Loader";
import { Route, Routes } from "react-router-dom";
import TruckFeatures from "./components/TruckFeatures/TruckFeatures.jsx";
import TruckReviews from "./components/TruckReviews/TruckReviews.jsx";

function App() {
  const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
  const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage.jsx"));

  const CampersDetailPage = lazy(() =>
    import("./pages/CampersDetailPage/CampersDetailPage.jsx")
  );
  const NotFoundPage = lazy(() =>
    import("./pages/NotFoundPage/NotFoundPage.jsx")
  );
  return (
    <>
      <Navigations />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/campers/:id" element={<CampersDetailPage />}>
            <Route path="features" element={<TruckFeatures />} />
            <Route path="reviews" element={<TruckReviews />} />
          </Route>
          {/* <Route path="/catalog/:id" element={<CampersDetailPage />} /> */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
