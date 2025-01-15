import { lazy, Suspense } from "react";
import "./App.css";
import { Navigations } from "./components/Navigations/Navigations";
import Loader from "./components/Loader/Loader";
import { Route, Routes } from "react-router-dom";

function App() {
  const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
  const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage.jsx"));
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

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
