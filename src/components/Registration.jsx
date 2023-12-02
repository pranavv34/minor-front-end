// RegistrationForm.jsx

import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CSS/registration.css';

function RegistrationForm() {
  const [studentDetails, setStudentDetails] = useState({
    name: '',
    branchSection: '',
    hallTicketNumber: '',
    contactPhone: '',
    altPhone: '',
    email: '',
  });

  const [parentsDetails, setParentsDetails] = useState({
    fatherName: '',
    fatherOccupation: '',
    motherName: '',
    parentContact: '',
    parentAltContact: '',
    parentEmail: '',
  });

  const handleStudentDetailsChange = (e) => {
    const { name, value } = e.target;
    setStudentDetails({ ...studentDetails, [name]: value });
  };

  const handleParentsDetailsChange = (e) => {
    const { name, value } = e.target;
    setParentsDetails({ ...parentsDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to the server
  };

  return (
    <Container>
      <h2>REGISTRATION FORM</h2>
      <Form onSubmit={handleSubmit}>
        <Row>
          {/* Student Details Column */}
          <Col md={6}>
            <h3>STUDENT DETAILS</h3>
            <Form.Group>
              <Form.Label>Name of the Student</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={studentDetails.name}
                onChange={handleStudentDetailsChange}
                placeholder='Enter Your Name'
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Branch & Section</Form.Label>
              <Form.Control
                type="text"
                name="branchSection"
                value={studentDetails.branchSection}
                onChange={handleStudentDetailsChange}
                placeholder='Enter Your Branch & Section'
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Roll Number</Form.Label>
              <Form.Control
                type="text"
                name="hallTicketNumber"
                value={studentDetails.hallTicketNumber}
                onChange={handleStudentDetailsChange}
                placeholder='Enter Your Roll Number'
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Contact Number</Form.Label>
              <Form.Control
                type="tel"
                name="contactPhone"
                value={studentDetails.contactPhone}
                onChange={handleStudentDetailsChange}
                placeholder='Enter Your Phone Number'
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Alternate Phone Number</Form.Label>
              <Form.Control
                type="tel"
                name="altPhone"
                value={studentDetails.altPhone}
                onChange={handleStudentDetailsChange}
                placeholder='Enter Your Alternate Phone Number'
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email ID</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={studentDetails.email}
                onChange={handleStudentDetailsChange}
                placeholder='Enter Your E-mail'
                required
              />
            </Form.Group>
          </Col>

          {/* Parents Details Column */}
          <Col md={6}>
            <h3>PARENTS DETAILS</h3>
            <Form.Group>
              <Form.Label>Father’s Name</Form.Label>
              <Form.Control
                type="text"
                name="fatherName"
                value={parentsDetails.fatherName}
                onChange={handleParentsDetailsChange}
                placeholder="Enter Your Father's Name"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Occupation</Form.Label>
              <Form.Control
                type="text"
                name="fatherOccupation"
                value={parentsDetails.fatherOccupation}
                onChange={handleParentsDetailsChange}
                placeholder="Enter Your Father's Occupation"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Mother’s Name</Form.Label>
              <Form.Control
                type="text"
                name="motherName"
                value={parentsDetails.motherName}
                onChange={handleParentsDetailsChange}
                placeholder="Enter Your Mother's Name"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Contact Number</Form.Label>
              <Form.Control
                type="tel"
                name="parentContact"
                value={parentsDetails.parentContact}
                onChange={handleParentsDetailsChange}
                placeholder="Enter Your Parent's Contact"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Alternate Contact Number</Form.Label>
              <Form.Control
                type="tel"
                name="parentAltContact"
                value={parentsDetails.parentAltContact}
                onChange={handleParentsDetailsChange}
                placeholder="Enter Your Parent's Alternate Contact"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Parent's Email ID</Form.Label>
              <Form.Control
                type="email"
                name="parentEmail"
                value={parentsDetails.parentEmail}
                onChange={handleParentsDetailsChange}
                placeholder="Enter Your Parent's E-mail"
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <div>
          <Link to="/tregistration">Not a Student? Click Here for Teacher Registration</Link>
          <button className='btn-primary1'>Register</button>
        </div>
      </Form>
    </Container>
  );
}

export default RegistrationForm;
