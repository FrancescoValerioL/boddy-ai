import { Container, Row, Col } from "react-bootstrap"
import "./Home.scss"
const Home = () => {
    return (
        <Container fluid>
            <Row>
                <Col sm={3}>SideBar</Col>
                <Col sm={9}>Main Content</Col>
            </Row>
        </Container>
    )
}
export default Home