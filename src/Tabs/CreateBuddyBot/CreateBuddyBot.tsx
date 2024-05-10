import { Container, Row, Col, Button, Form, FloatingLabel, Toast } from "react-bootstrap";
import "./CreateBuddyBot.scss";
import { useState } from "react";
import Bot from "../../models/bot";

const CreateBuddyBot = () => {
  var uniqid = require("uniqid");
  const [name, setName] = useState<string>("Placeholder");
  const [language, setLanguage] = useState<string>("Italian");
  const [level, setLevel] = useState<string>("A1");
  const [description, setDescription] = useState<string>("");
  const [show, setShow] = useState(false);
  const levels: string[] = ["A1", "A2", "B1", "B2", "C1", "C2"];
  const languages: string[] = ["Italian", "English", "Korean"];

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };

  const handleLevel = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLevel(e.target.value);
  };

  const handleDescriptio = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const handleForm = () => {
    const saved = localStorage.getItem("bots");
    let initialValue = saved && JSON.parse(saved);
    const newBot: Bot = {
      id: uniqid(),
      name: name,
      language: language,
      level: level,
      description: "",
    };
    initialValue ? initialValue.push(newBot) : (initialValue = [newBot]);

    localStorage.setItem("bots", JSON.stringify(initialValue));
    console.log(initialValue);
    setShow(true);
    setTimeout(reload, 3000);
  };

  const reload = () => {
    window.location.reload();
  };
  return (
    <Container className="row-create">
      <Form>
        <Row className="g-2">
          <Col md>
            <FloatingLabel className="form-text-label" controlId="floatingInputGrid" label="Name">
              <Form.Control onChange={handleName} className="form-text" type="text" placeholder="name@example.com" />
            </FloatingLabel>
          </Col>
          <Col md>
            <FloatingLabel className="form-text-label" controlId="floatingSelectGrid" label="Language">
              <Form.Select onChange={handleLanguage} defaultValue={1} aria-label="Language" className="form-text">
                {languages.map((language, key) => (
                  <option value={language} key={key}>
                    {language}
                  </option>
                ))}
              </Form.Select>
            </FloatingLabel>
          </Col>
          <Col md>
            <FloatingLabel className="form-text-label" controlId="floatingSelectGrid" label="Level">
              <Form.Select onChange={handleLevel} defaultValue={1} aria-label="Level" className="form-text">
                {levels.map((level, key) => (
                  <option value={level} key={key}>
                    {level}
                  </option>
                ))}
              </Form.Select>
            </FloatingLabel>
          </Col>
        </Row>
        <Row className="g-2">
          <Col md>
            <FloatingLabel controlId="floatingInputGrid" label="Description">
              <Form.Control
                onChange={handleDescriptio}
                className="form-text"
                style={{ height: "100px" }}
                as="textarea"
                placeholder="Text"
              />
            </FloatingLabel>
          </Col>
          <Col md>
            <FloatingLabel controlId="floatingInputGrid" label="Initial Message">
              <Form.Control
                onChange={handleName}
                className="form-text"
                style={{ height: "100px" }}
                as="textarea"
                placeholder="name@example.com"
              />
            </FloatingLabel>
          </Col>
        </Row>
        <Row className="g-2">
          <Col md>
            <FloatingLabel controlId="floatingInputGrid" label="Identity">
              <Form.Control
                onChange={handleName}
                className="form-text"
                style={{ height: "100px" }}
                as="textarea"
                placeholder="name@example.com"
              />
            </FloatingLabel>
          </Col>
        </Row>
        <Row className="g-2">
          <Col md>
            <FloatingLabel controlId="floatingInputGrid" label="Setting">
              <Form.Control
                onChange={handleName}
                className="form-text"
                style={{ height: "100px" }}
                as="textarea"
                placeholder="name@example.com"
              />
            </FloatingLabel>
          </Col>
        </Row>
        <Row className="centered">
          <Col sm={3}>Help</Col>
        </Row>
        <Row className="centered">
          <Col sm={3}>
            <Button variant="secondary" onClick={handleForm}>
              Create Buddy Bot
            </Button>
          </Col>
        </Row>
      </Form>
      <Toast bg="success" onClose={() => setShow(false)} show={show} delay={3000} autohide>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">Success</strong>
        </Toast.Header>
        <Toast.Body>Bot Created</Toast.Body>
      </Toast>
    </Container>
  );
};
export default CreateBuddyBot;
