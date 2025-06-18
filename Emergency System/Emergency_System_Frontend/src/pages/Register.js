import React, { useState } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";

function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    guardianName: "",
    guardianMobile: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    alert("Registered successfully!");
    // You can handle actual submission logic here
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <Card style={{ width: "100%", maxWidth: "500px", padding: "20px", boxShadow: "0 0 20px rgba(0,0,0,0.1)" }}>
        <h3 className="text-center mb-4">Register</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your full name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formMobile">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Enter mobile number"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGuardian">
            <Form.Label>Guardian Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter guardian name"
              name="guardianName"
              value={formData.guardianName}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formGuardianMobile">
            <Form.Label>Guardian Mobile Number</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Enter guardian mobile number"
              name="guardianMobile"
              value={formData.guardianMobile}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Button variant="danger" type="submit" className="w-100">
            Register
          </Button>
        </Form>
      </Card>
    </Container>
  );
}

export default RegisterPage;
