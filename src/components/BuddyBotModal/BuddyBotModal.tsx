import { forwardRef, useImperativeHandle, useState } from "react";
import { Modal, Button, Form, Col, Row } from "react-bootstrap";
import OpenAI from "openai";
interface ShowModal {
  handleShow(): void;
}

const BuddyBotModal = forwardRef<ShowModal, {}>((props, ref) => {
  const [messagesSaved, setMessages] = useState<Message[]>([]);
  const [messageToSend, setMessageToSend] = useState<Message>({
    content: "string",
    role: "user",
  });
  useImperativeHandle(ref, () => ({
    handleShow,
  }));
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClick = async () => {
    const openai = new OpenAI({
      apiKey: "",
      dangerouslyAllowBrowser: true,
    });

    setMessages([...messagesSaved, messageToSend]);

    const completion = await openai.chat.completions.create({
      messages: [...messagesSaved, { content: messageToSend.content, role: messageToSend.role }],
      model: "gpt-3.5-turbo",
    });

    setMessages([
      ...messagesSaved,
      { role: completion.choices[0].message.role, content: completion.choices[0].message.content! },
    ]);
    setMessageToSend({ role: "user", content: "" });
  };

  const handleMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessageToSend({ role: "user", content: e.target.value });
  };

  return (
    <Modal size="lg" bg={"dark"} show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>placeholder</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row md={12}>Woohoo, you are reading this text in a modal!</Row>
        <Row md={12}>
          <Col md={10}>
            <Form.Control onChange={handleMessage} size="lg" type="text" placeholder="Large text" />
          </Col>
          <Col md={2}>
            <Button variant="primary" onClick={handleClick}>
              Send
            </Button>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
});
export default BuddyBotModal;

interface Props {
  name: string;
}

interface Message {
  content: string;
  role: any;
}
