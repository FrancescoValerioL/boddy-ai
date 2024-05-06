import { Container, Row, Col, Button, Form, FloatingLabel } from "react-bootstrap";
import "./CreateBuddyBot.scss";
import { useState } from "react";
const CreateBuddyBot = () => {
  const [form, setForm] = useState<CreateForm>({
    name: "",
    language: "Not Selected",
  });
  const levels: string[] = ["A1", "A2", "B1", "B2", "C1", "C2"];
  const handleName = (e: any) => {
    console.log(form);
    setForm({
      ...form,
      name: e.target.value,
      language: form.language,
    });
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
              <Form.Select defaultValue={1} aria-label="Language" className="form-text">
                <option value="1">Italian</option>
                <option value="2">English</option>
                <option value="3">Korean</option>
              </Form.Select>
            </FloatingLabel>
          </Col>
          <Col md>
            <FloatingLabel className="form-text-label" controlId="floatingSelectGrid" label="Level">
              <Form.Select defaultValue={1} aria-label="Language" className="form-text">
                {levels.map((level, key) => (
                  <option value={key} key={key}>
                    {level}
                  </option>
                ))}
              </Form.Select>
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
        <Row className="g-2">
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
        <Row className="centered">
          <Col sm={1}>
            <Button variant="secondary">Create</Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};
export default CreateBuddyBot;

interface CreateForm {
  name: string;
  language: string;
}
