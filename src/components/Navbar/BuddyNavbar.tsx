import { Row, Col, Nav, Dropdown, NavItem, NavLink, Image } from "react-bootstrap";
import "./BuddyNavbar.scss";
import Tab from "react-bootstrap/Tab";
import logo from "../../buddyAiLogo2.svg";
import Home from "../../tabs/Home/Home";
import { useState } from "react";
import CreateBuddyBot from "../../tabs/CreateBuddyBot/CreateBuddyBot";

const BuddyNavbar = () => {
  const [selectedPage, setSelectedPage] = useState<string>("Account");
  const defaultPageName: string = "Account";
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="logo" transition={false}>
      <Row>
        <Col sm={12}>
          <Nav fill variant="pills" className="flex-row">
            <Nav.Item className="link-logo">
              <Nav.Link onClick={() => setSelectedPage(defaultPageName)} className="link-logo" eventKey="logo">
                <Image height={20} src={logo} />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={() => setSelectedPage(defaultPageName)} eventKey="create">
                <span className="bi bi-plus-square"> Create Buddy Bot</span>
              </Nav.Link>
            </Nav.Item>
            <Dropdown drop="down-centered" as={NavItem}>
              <Dropdown.Toggle as={NavLink}>
                <span className="bi bi-person-circle"></span> {selectedPage}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>
                  <Nav.Item>
                    <Nav.Link onClick={() => setSelectedPage("Profile")} eventKey="profile">
                      <span className="bi bi-person-fill"> Profile</span>
                    </Nav.Link>
                  </Nav.Item>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Nav.Item>
                    <Nav.Link onClick={() => setSelectedPage("Favourites")} eventKey="favourite">
                      <span className="bi bi-heart-fill"> Favourites</span>
                    </Nav.Link>
                  </Nav.Item>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Col>
        <Col sm={12}>
          <Tab.Content>
            <Tab.Pane eventKey="logo">
              <Home />
            </Tab.Pane>
            <Tab.Pane eventKey="profile">
              <Home />
            </Tab.Pane>
            <Tab.Pane eventKey="create">
              <CreateBuddyBot />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};
export default BuddyNavbar;
