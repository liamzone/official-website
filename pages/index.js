//  Custom Styles
import styles from "../styles/Home.module.css";

//  Components
import HeroSection from "../components/global/HeroSection";
import Showcase from "../components/global/Showcase";
import { Button, Container } from "react-bootstrap";

export default function Home() {
  const printingContent =
    "We specialize in FDM printing. We pride ourselves on the quality of our prints and our friendly customer service to ensure the customer will receive exactly what they are looking for.";

  const webDevContent =
    "We will help you design a website that perfectly captures your brands essence. Make consumers WANT to revisit your site with our expertly created website design.";

  const mediaContent =
    "Explore our creative media. We produce music, edit videos and run our own Streams and YouTube channel.";

  const pic1 = "https://picsum.photos/id/430/800/400";
  const pic2 = "https://picsum.photos/id/237/800/400";
  const pic3 = "https://picsum.photos/id/147/800/400";

  return (
    <>
      <HeroSection />

      <section id="development">
        <Showcase
          order="last"
          title={"Web Development"}
          content={webDevContent}
          img={pic1}
          btnTitle={"View Portfolio"}
        />
      </section>

      <section id="printing">
        <Showcase
          order="first"
          title={"3D Printing"}
          content={printingContent}
          img={pic2}
          btnTitle={"Get a Quote"}
        />
      </section>

      <section id="media">
        <Showcase
          order="last"
          title={"Creative Media"}
          content={mediaContent}
          img={pic3}
          btnTitle={"Explore"}
        />
      </section>

      <section>
        <Container>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "20vh",
            }}
          >
            <Button size={"lg"} variant={"dark"}>
              Get in Touch
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
