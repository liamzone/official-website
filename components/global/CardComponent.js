//  Bootstrap Imports
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CardComponent = ({ title, text, btn }) => (
  <Card>
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{text}</Card.Text>
      <Button variant="outline-dark" size="lg">
        {btn}
      </Button>
    </Card.Body>
  </Card>
);

export default CardComponent;
