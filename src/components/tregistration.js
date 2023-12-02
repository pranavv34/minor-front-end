import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function RegistrationForm() {
  const [teacherDetails, setTeacherDetails] = useState({
    name: '',
    teacherId: '',
    password: '',
    confirmPassword: '',
    phone: '',
    email: '',
  });

  const handleTeacherDetailsChange = (e) => {
    const { name, value } = e.target;
    setTeacherDetails({ ...teacherDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to the server
  };

  return (
    <Container>
      <h2>Teacher Registration</h2>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Name of the Teacher</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={teacherDetails.name}
                onChange={handleTeacherDetailsChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Teacher ID</Form.Label>
              <Form.Control
                type="text"
                name="teacherId"
                value={teacherDetails.teacherId}
                onChange={handleTeacherDetailsChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={teacherDetails.password}
                onChange={handleTeacherDetailsChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                name="confirmPassword"
                value={teacherDetails.confirmPassword}
                onChange={handleTeacherDetailsChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                value={teacherDetails.phone}
                onChange={handleTeacherDetailsChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={teacherDetails.email}
                onChange={handleTeacherDetailsChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <div className="d-flex justify-content-end">
          <Button variant="primary" type="submit" style={{marginTop:"10px"}}>
            Register
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default RegistrationForm;
