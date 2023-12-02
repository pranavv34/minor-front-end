import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
      <h2>Registration Form</h2>
      <Form onSubmit={handleSubmit}>
        <Row>
          {/* Student Details Column */}
          <Col md={6}>
            <h3>Student Details</h3>
            <Form.Group>
              <Form.Label>Name of the Student</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={studentDetails.name}
                onChange={handleStudentDetailsChange}
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
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Hall Ticket number</Form.Label>
              <Form.Control
                type="text"
                name="hallTicketNumber"
                value={studentDetails.hallTicketNumber}
                onChange={handleStudentDetailsChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Contact ph.no.</Form.Label>
              <Form.Control
                type="tel"
                name="contactPhone"
                value={studentDetails.contactPhone}
                onChange={handleStudentDetailsChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Alt.ph. no./ local guardian no.</Form.Label>
              <Form.Control
                type="tel"
                name="altPhone"
                value={studentDetails.altPhone}
                onChange={handleStudentDetailsChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>email ID</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={studentDetails.email}
                onChange={handleStudentDetailsChange}
                required
              />
            </Form.Group>
          </Col>

          {/* Parents Details Column */}
          <Col md={6}>
            <h3>Parents Details</h3>
            <Form.Group>
              <Form.Label>Father’s Name</Form.Label>
              <Form.Control
                type="text"
                name="fatherName"
                value={parentsDetails.fatherName}
                onChange={handleParentsDetailsChange}
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
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Contact No</Form.Label>
              <Form.Control
                type="tel"
                name="parentContact"
                value={parentsDetails.parentContact}
                onChange={handleParentsDetailsChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Parent's email ID</Form.Label>
              <Form.Control
                type="email"
                name="parentEmail"
                value={parentsDetails.parentEmail}
                onChange={handleParentsDetailsChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <div>
        <button className='btn btn-primary'><Link to="/tregistration">
        Not a Student? click here for Teacher registration
        </Link>
        </button>
            <button className='btn btn-primary' style={{marginTop:"100px"}}>Register</button>
        </div>
      </Form>
    </Container>
  );
}

export default RegistrationForm;
