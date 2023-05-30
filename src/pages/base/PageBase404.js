import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { AiFillAlert } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const PageBase404 = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Row className="vh-100 d-flex justify-content-center align-items-center">
        <Col md={5}>
          <Card className="text-center">
            <Card.Header>404 NOT FOUND</Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
              <Button onClick={() => navigate(-1)} variant="primary">
                Go To Hell
                <AiFillAlert />
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PageBase404;
