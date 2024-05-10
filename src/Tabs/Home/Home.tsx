import { Container, Row, Col } from "react-bootstrap";
import "./Home.scss";
import BuddyCard from "../../components/BuddyCard/BuddyCard";
import bots from "../../assets/bots.json";
import { useEffect, useState } from "react";
import Bot from "../../models/bot";
const Home = () => {
  const [cards, setCards] = useState<Bot[]>([
    {
      id: "123",
      language: "english",
      name: "string",
      level: "string",
      description: "string",
    },
  ]);

  useEffect(() => {
    const saved = localStorage.getItem("bots");
    let initialValue = saved && JSON.parse(saved);
    setCards(initialValue);
  }, []);

  return (
    <Container fluid>
      <Row md={1} lg={12}>
        <Col lg={1}>SideBar</Col>
        <Col lg={11} style={{ maxHeight: "85vh", overflowY: "scroll" }}>
          <Row className="g-4">
            {cards &&
              cards.map((card: Bot, idx: number) => (
                <Col key={idx}>
                  <BuddyCard card={card} />
                </Col>
              ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default Home;

interface CardData {
  language: string;
  name: string;
  level: string;
  description: string;
}
