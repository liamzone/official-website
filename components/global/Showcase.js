import Image from "next/image";
import { Button, Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/Showcase.module.css";

const Showcase = ({ title, content, img, btnTitle, order }) => {
  return (
    <div className={styles.showcase}>
      <Container>
        <Row sm={1} md={2}>
          <Col className={styles.content}>
            <div>
              <h3>{title}</h3>
              <p>{content}</p>
              <Button variant="outline-light">{btnTitle}</Button>
            </div>
          </Col>
          <Col xs={{ order: order }}>
            <Image
              src={img}
              alt={"3D Printing Image"}
              layout={"responsive"}
              width={800}
              height={400}
              objectFit={"contain"}
              style={{ borderRadius: "20px" }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Showcase;
