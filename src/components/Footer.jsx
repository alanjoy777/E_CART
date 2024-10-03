import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-4 ">
      <Container>
        <Row>
          <Col md={4}>
            <h5>About Us</h5>
            <p>
              Welcome to our E-cart web app! We offer a wide range of products with secure and fast transactions.
            </p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-white">Home</a></li>
              <li><a href="#shop" className="text-white">Shop</a></li>
              <li><a href="#contact" className="text-white">Contact Us</a></li>
              <li><a href="#faq" className="text-white">FAQ</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <p>
              Email: support@ecart.com <br />
              Phone: +123 456 7890
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-3">
            <p>&copy; {new Date().getFullYear()} E-cart. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
