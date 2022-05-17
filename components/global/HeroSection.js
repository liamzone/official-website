import Image from "next/image";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/HeroSection.module.css";
import Figure from "./Figure";

const heroSectionImage = "/assets/hs_option_2.png";
const heroImageDescription = "description";

const quotes = [
  {
    quote: "The worst enemy to creativity is self-doubt.",
    author: "Sylvia Plath",
  },
  {
    quote: "Don’t wait for inspiration. It comes while working.",
    author: "Henri Matisse",
  },
  {
    quote: "Art is the elimination of the unnecessary.",
    author: "Pablo Picasso",
  },
  {
    quote:
      "Creativity is seeing what others see and thinking what no one else ever thought.",
    author: "Albert Einstein",
  },
];

const HeroSection = () => {
  const [quote, setQuote] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      if (quote === 3) {
        setQuote(0);
      } else {
        setQuote(quote + 1);
      }
    }, 10000);
    return () => clearInterval(id);
  });

  return (
    <div className={styles.heroSection}>
      <Container>
        <Row>
          <Col className={styles.col}>
            <Figure quote={quotes[quote].quote} author={quotes[quote].author} />
          </Col>
          <Col>
            <div className={styles.imgContainer}>
              <Image
                src={heroSectionImage}
                alt={heroImageDescription}
                layout="fill"
                objectFit="contain"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
