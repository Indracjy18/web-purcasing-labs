import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

const PageAuthLogin = () => {
  return (
    <Container>
      <Row className="vh-100 d-flex justify-content-center align-items-center">
        <Col md={4}>
          <Card className="shadow">
            <Card.Body className="d-grid gap-2">
              <Card.Title>Login</Card.Title>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" />
              </Form.Group>
              <Button>Log In</Button>
              <Button variant="outline-dark">Register</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PageAuthLogin;
