import React from 'react';
import { Container, Row, Col, Button, Card, CardBody } from 'startbootstrap-sb-admin-pro';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <header className="header bg-primary text-white text-center py-5">
        <h1>Welcome to Our Service</h1>
        <p>Your solution for efficient medical document management.</p>
        <Button className="cta-button btn-light mt-3">Get Started</Button>
      </header>

      <Container className="description py-5">
        <Row>
          <Col md={12} className="text-center mb-5">
            <h2>About Our Service</h2>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <Card className="feature-card">
              <CardBody>
                <h3>Automated Template Extraction</h3>
                <p>Extract document templates with high accuracy and efficiency.</p>
              </CardBody>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="feature-card">
              <CardBody>
                <h3>Fraud Detection</h3>
                <p>Identify potential fraudulent claims with our advanced algorithms.</p>
              </CardBody>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="feature-card">
              <CardBody>
                <h3>Scalable Solution</h3>
                <p>Handle large volumes of documents seamlessly.</p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>

      <footer className="footer bg-dark text-white text-center py-3">
        <p>© 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;