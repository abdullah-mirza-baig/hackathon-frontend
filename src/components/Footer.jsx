import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="text-dark py-4 mt-5 footer" style={{ backgroundColor: "#eeeeee" }}>
      <Container>
        <Row>
          <Col md={6} className="mb-3 mb-md-0">
            <h5>About Us</h5>
            <p>
            We are dedicated to offering the best loan solutions customized to your needs. Contact us for further details.
            </p>
          </Col>

          <Col md={3}>
            <h5>Contact</h5>
            <p>Email: info@SaylaniWelfare.com</p>
            <p>Phone: 833-786-0999</p>
          </Col>
        </Row>
        <hr className="border-light" />
        <p className="text-center mb-0">
          © {new Date().getFullYear()} Micro Finance. All rights reserved.
        </p>
      </Container>
      <style>{`

        .footer{
            border-radius: 14px;
        }

`}</style>
    </footer>
  );
};

export default Footer;