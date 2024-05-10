import { Card, Button, Col, Image, Row, Modal, Toast } from "react-bootstrap";
import "./BuddyCard.scss";
import Bot from "../../models/bot";
import { useRef, useState } from "react";
import BuddyBotModal from "../BuddyBotModal/BuddyBotModal";

interface ShowModal {
  handleShow(): void;
}
const BuddyCard = ({ card }: { card: Bot }) => {
  const modalRef = useRef<ShowModal>(null);
  const [show, setShow] = useState(false);

  const handleDelete = () => {
    setShow(true);
    setTimeout(reload, 3000);
  };

  const reload = () => {
    const saved = localStorage.getItem("bots");
    let initialValue = saved && JSON.parse(saved);
    const idx = initialValue.findIndex((bot: Bot) => bot.id === card.id);
    initialValue.splice(idx, 1);
    localStorage.setItem("bots", JSON.stringify(initialValue));
    window.location.reload();
  };
  return (
    <>
      <Card border="primary" bg="dark" text="light" style={{ width: "45rem" }} className="text-center">
        <Card.Header style={{ display: "flex", justifyContent: "space-between" }}>
          <strong>{card.name}</strong>{" "}
          <Button variant="danger" onClick={handleDelete}>
            <i className="bi bi-x-lg"></i>
          </Button>
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
          <Button onClick={() => modalRef.current?.handleShow()} variant="info">
            Start Chat
          </Button>
        </Card.Footer>
      </Card>
      <BuddyBotModal ref={modalRef} />
      <Toast bg="danger" onClose={() => setShow(false)} show={show} delay={3000} autohide>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">Deleted</strong>
        </Toast.Header>
        <Toast.Body>Bot Deleted</Toast.Body>
      </Toast>
    </>
  );
};
export default BuddyCard;
