import { Card, Button, Col, Image, Row } from "react-bootstrap";
import "./BuddyCard.scss";
import Bot from "../../models/bot";
const BuddyCard = ({ card }: { card: Bot }) => {
  let cardData: Bot = {
    id: "123",
    language: "Korean",
    name: "Hang Sung",
    level: "A1",
    description: "A young developer how is going to help you with your starting level in korean language",
  };
  const flag = "japanese";
  return (
    <Card border="primary" bg="dark" text="light" style={{ width: "45rem" }} className="text-center">
      <Card.Header>
        <strong>{card.name}</strong>
      </Card.Header>
      <Card.Body>
        <Card.Title>{card.level}</Card.Title>
        <Row>
          <Col>
            <Image height={250} src={require("../../assets/flags/" + card.language.toLowerCase() + ".svg")} />
          </Col>
          <Col>
            <Card.Text>
              Language: <strong>{card.language}</strong>
            </Card.Text>
            <Card.Text>{card.description}</Card.Text>
          </Col>
        </Row>
      </Card.Body>
      <Card.Footer>
        <Button variant="info">Start Chat</Button>
      </Card.Footer>
    </Card>
  );
};
export default BuddyCard;
