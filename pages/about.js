import Image from "next/image";
import { Row, Col, Container } from "react-bootstrap";

import EmployeeCard from "../components/global/EmployeeCard";

import styles from "../styles/About.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <Container>
        <h2 className={styles.title}>About</h2>
        <h2 className={styles.title}>Members</h2>

        <Row xs={4}>
          <Col>
            <EmployeeCard name="Liam O'Neill" title="CEO" />
          </Col>
          <Col>
            <EmployeeCard name="Liam O'Neill" title="CEO" />
          </Col>
          <Col>
            <EmployeeCard name="Liam O'Neill" title="CEO" />
          </Col>
          <Col>
            <EmployeeCard name="Liam O'Neill" title="CEO" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
