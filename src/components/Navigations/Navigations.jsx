import { NavLink } from "react-router-dom";
import Container from "../Container/Container";
import css from "./Navigations.module.css";
import clsx from "clsx";

const getNavStyle = (item) => {
  return clsx(css.link, item.isActive && css.active);
};

export const Navigations = () => {
  return (
    <Container>
      <header className={css.header}>
        <img src="../src/components/img/logo-trucks.svg" alt="logo" />

        <nav>
          <ul className={css.nav}>
            <li>
              <NavLink to="/" className={getNavStyle}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/catalog" className={getNavStyle}>
                Catalog
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </Container>
  );
};
