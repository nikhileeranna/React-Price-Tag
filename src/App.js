import "./styles.css";
import Card from "./Card";
import { Container } from "react-bootstrap";

export default function App() {
  return (
    <>
      <section class="pricing py-5">
        <Container class="container">
          <Card />;
        </Container>
      </section>
    </>
  );
}
