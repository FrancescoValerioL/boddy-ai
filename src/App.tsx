import { Row, Col, Nav } from "react-bootstrap";
import "./App.scss";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Home from "./Tabs/Home/Home";

function App() {
  return (
    <div className="App">
      <Tab.Container id="left-tabs-example" defaultActiveKey="logo">
        <Row>
          <Col sm={12}>
            <Nav fill variant="underline" className="flex-row">
              <Nav.Item >
                <Nav.Link className="colored-tab" eventKey="logo">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="first">Tab 1</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Tab 2</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={12}>
            <Tab.Content>
              <Tab.Pane eventKey="logo"><Home /></Tab.Pane>
              <Tab.Pane eventKey="first">First tab content</Tab.Pane>
              <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}

export default App;
