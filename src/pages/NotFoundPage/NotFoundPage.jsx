import { Link } from "react-router-dom";
import Container from "../../components/Container/Container";

import css from "./NotFoundPage.module.css";
export default function HomePage() {
  return (
    <>
      <Container>
        <p className={css.textBox}>404</p>
        <p className={css.textBox}>Not found Page</p>
        <Link to="/" className={css.button}>
          return to main
        </Link>

        {/* </Section> */}
      </Container>
    </>
  );
}
