import { Row, Col, Nav, Dropdown, NavItem, NavLink, Image, Figure } from "react-bootstrap";
import "./App.scss";
import Tab from 'react-bootstrap/Tab';
import logo from "./buddyAiLogo2.svg"
import Home from "./Tabs/Home/Home";
import { useState } from "react";

function App() {
  const [selectedPage, setSelectedPage] = useState<string>("Profile")
  return (
    <div className="App">
      <Tab.Container id="left-tabs-example" defaultActiveKey="logo">
        <Row>
          <Col sm={12}>
            <Nav fill variant="pills" className="flex-row">
              <Nav.Item >
                <Nav.Link className="colored-tab" eventKey="logo">
                  <Image height={20} src={logo} />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="first">Tab 1</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Tab 2</Nav.Link>
              </Nav.Item>
              <Dropdown as={NavItem}>
                <Dropdown.Toggle as={NavLink}>{selectedPage}</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Nav.Item>
                      <Nav.Link onClick={() => setSelectedPage("Profile")} eventKey="profile"><span className="bi bi-person-fill"> Profile</span></Nav.Link>
                    </Nav.Item>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Nav.Item>
                      <Nav.Link onClick={() => setSelectedPage("Favourites")} eventKey="favourite">Favourites</Nav.Link>
                    </Nav.Item>
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="logout">LogOut</Nav.Link>
                    </Nav.Item>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Col>
          <Col sm={12}>
            <Tab.Content>
              <Tab.Pane eventKey="logo"><Home /></Tab.Pane>
              <Tab.Pane eventKey="first">First tab content</Tab.Pane>
              <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
              <Tab.Pane eventKey="profile"><Home /></Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>Footer</Col>
        </Row>
      </Tab.Container>
    </div>
  );
}

export default App;
