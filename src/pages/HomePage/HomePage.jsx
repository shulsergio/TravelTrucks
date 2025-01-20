import { Link } from "react-router-dom";
import Container from "../../components/Container/Container";

import css from "./HomePage.module.css";
export default function HomePage() {
  return (
    <>
      <Container>
        {/* <Section> */}
        <div className={css.hero}>
          <div className={css.box}>
            <h1 className={css.header}>Campers of your dreams</h1>
            <p className={css.textBox}>
              You can find everything you want in our catalog
            </p>
            <Link to="/catalog" className={css.button}>
              View Now
            </Link>
          </div>
        </div>
        {/* </Section> */}
      </Container>
    </>
  );
}
