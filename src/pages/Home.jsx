import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button, Navbar } from "react-bootstrap";
import MainHeader from '../components/MainHeader'
import Footer from "../components/Footer";
import LoanCalculator from "../components/LoanCalculator";

function App() {
  const loanCategories = [
    { title: "Wedding Loan", link: "/wedding-loan" },
    { title: "Home Construction Loan", link: "/home-loan" },
    { title: "Business Startup Loan", link: "/business-loan" },
    { title: "Education Loan", link: "/education-loan" },
  ];

  return (
    <Container className="py-5">
      {/* Header Section */}
     <div className="main-header mb-5">

        <MainHeader/>

      </div> 

      <header className="text-center mb-5">
        <h1 className="display-4 banner-heading">Loan Categories</h1>
        <p className="lead text-secondary">
        Support is provided in the following categories.
        </p>
      </header>

      {/* Card Section */}
      <Row className="g-4 mb-5">
        {loanCategories.map((category, index) => (
          <Col xs={12} sm={6} md={4} lg={3} key={index}>
            <Card className="loan-card shadow border-0 h-100">
              <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title className="text-center text-dark">
                  {category.title}
                </Card.Title>
                <Button
                  as={Link}
                  to={category.link}
                  className="mt-3 card-btn"
        
                  size="lg"
                >
                  Apply
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row className="g-4 mb-5 mt-5"><LoanCalculator/></Row>
      <Row className="g-4"><Footer/></Row>

      {/* Inline CSS */}
      <style>{`

       
      .banner-heading{
          color: #8dc73f;
          font-weight: bold;
        }

      .card-btn{
        background-color: #8dc73f;
        border: 1px solid #000;
      }

       .card-btn:hover{
        background-color:rgb(82, 130, 20);
      }

      
        .loan-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border-radius: 25px;
        }

        .loan-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
        }

        .loan-card .card-title {
          font-size: 1.25rem;
          font-weight: bold;
        }

        header h1 {
          font-weight: bold;
        }

        header p {
          color: #6c757d;
        }
      `}</style>
    </Container>
  
  );
}

export default App;
