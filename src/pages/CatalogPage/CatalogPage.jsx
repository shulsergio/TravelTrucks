import Container from "../../components/Container/Container";

import css from "./CatalogPage.module.css";
import Section from "../../components/Section/Section";
export default function HomePage() {
  return (
    <>
      <Container>
        <Section>
          <p className={css.text}>Catalog PAGE</p>
        </Section>
      </Container>
    </>
  );
}
