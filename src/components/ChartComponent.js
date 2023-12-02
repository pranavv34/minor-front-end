import React, { useEffect, useRef,useState } from 'react';
import { ProgressBar, Container, Row, Col,Card,Form,Navbar, Nav  } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Chart from 'chart.js/auto'; 

const ChartComponent = ({ data, options }) => {
  const chartRef = useRef(null);
  const [selectedSemester, setSelectedSemester] = useState(1);

  useEffect(() => {
    chartRef.current = new Chart('myChartCanvas', {
      type: 'bar',
      data: data,
      options: options,
    });

    return () => {

      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [data, options]);

  const semestersData = {
    1: { sgpa: 8.3, cgpa: 8.5, overallActivity: 60, semActivity: 20, attendance: 75,subjectwiseattendence: [65, 75, 80, 90, 85],Semwiseattendance:[80],Monthwiseattendence:[80,75,70,90],Internal:[10,85,18,37]},
    2: { sgpa: 8.6, cgpa: 8.8, overallActivity: 65, semActivity: 25, attendance: 80 ,subjectwiseattendence: [70, 80, 85, 88, 92],Semwiseattendance:[80,90],Monthwiseattendence:[80,75,70,90],Internal:[10,84,16,36]},
    3: { sgpa: 9.0, cgpa: 8.5, overallActivity: 65, semActivity: 0, attendance: 85,subjectwiseattendence: [65, 75, 80, 90, 85],Semwiseattendance:[80,85,90,],Monthwiseattendence:[80,75,70],Internal:[10,85,18,37]},
    4: { sgpa: 8.2, cgpa: 8.8, overallActivity: 70, semActivity: 5, attendance: 80 ,subjectwiseattendence: [70, 80, 85, 90, 92],Semwiseattendance:[80,85,90,82],Monthwiseattendence:[80,75,70,90,86],Internal:[10,84,16,36]},

  };

  const chartData = {
    labels: ['Subject 1', 'Subject 2', 'Subject 3', 'Subject 4', 'Subject 5'],
    datasets: [
      {
        label: 'Subject-wise Attendance',
        backgroundColor: '#A50014',
        borderColor: '#A50014',
        borderWidth: 1,
        hoverBackgroundColor: 'red',
        hoverBorderColor: 'red',
        data: semestersData[selectedSemester].subjectwiseattendence,
        barPercentage: 1.0,
        categoryPercentage: 0.7,
        barThickness: 'flex',
      },
    ],
  };

  const Semwise = {
    labels: ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4', 'Sem 5'],
    datasets: [
      {
        label: 'Sem-wise Attendance',
        backgroundColor: '#A50014',
        borderColor: '#A50014',
        borderWidth: 1,
        hoverBackgroundColor: 'red',
        hoverBorderColor: 'red',
        data: semestersData[selectedSemester].Semwiseattendance,
        barPercentage: 1.0,
        categoryPercentage: 0.7,
        barThickness: 'flex',
      },
    ],
  };

  const Monthwise = {
    labels: ['Month 1', 'Month 2', 'Month 3', 'Month 4'],
    datasets: [
      {
        label: 'Monthwise Attendance',
        backgroundColor: '#A50014',
        borderColor: '#A50014',
        borderWidth: 1,
        hoverBackgroundColor: 'red',
        hoverBorderColor: 'red',
        data:semestersData[selectedSemester].Monthwiseattendence,
        barPercentage: 1.0,
        categoryPercentage: 0.7,
        barThickness: 'flex',
      },
    ],
  };

  const Internal = {
    labels: ['Assignment', 'Attendence', 'Mid Marks', 'CIE'],
    datasets: [
      {
        label: 'Internal Evaluation',
        backgroundColor: '#A50014',
        borderColor: '#A50014',
        borderWidth: 1,
        hoverBackgroundColor: 'red',
        hoverBorderColor: 'red',
        data:semestersData[selectedSemester].Internal,
        barPercentage: 1.0,
        categoryPercentage: 0.7,
        barThickness: 'flex',
      },
    ],
  };

  const chartStyles = {
    width: '120%',
    height: '10%',
  };

  const circularProgressBarStyles = buildStyles({
    trailColor: 'rgba(0, 0, 0, 0.1)',
    pathColor: '#A50014',
  });

  const attendanceValue = semestersData[selectedSemester].attendance;

  return (
    <>
      <Container fluid className="p-0">
        
        <Row className="m-0">
          <Col md={2} className="p-0 position-fixed h-100" style={{ top: 0, bottom: 0, width: "100px" }}>
            <Navbar bg="light" expand="md" className="flex-column h-100">
              {/* Add icons or links for semesters */}
              {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                <Nav.Link >
                 
                </Nav.Link>
              ))}
            </Navbar>
          </Col>
          <Col md={{ span: 10, offset: 1 }} className="ml-md-5">
            
            <Container className="mx-auto mt-8 p-8 bg-gray-200 rounded-lg">
              <Row className="mt-5">
                <Col md={12}>
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Select Semester</Form.Label>
                    <Form.Control
                      as="select"
                      value={selectedSemester}
                      onChange={(e) => setSelectedSemester(Number(e.target.value))}
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                        <option key={sem} value={sem}>
                          Semester {sem}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Row className="mt-5">
          <Col md={3}>
          <Card className="shadow p-3 mb-5 bg-white rounded">
              <Card.Body>
                <Card.Title className="text-lg font-bold">SGPA</Card.Title>
                <Card.Text>{semestersData[selectedSemester].sgpa}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
          <Card className="shadow p-3 mb-5 bg-white rounded">
              <Card.Body>
                <Card.Title className="text-lg font-bold">CGPA</Card.Title>
                <Card.Text>{semestersData[selectedSemester].cgpa}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
          <Card className="shadow p-3 mb-5 bg-white rounded">
              <Card.Body>
                <Card.Title className="text-lg font-bold">OverAll Activity Points</Card.Title>
                <Card.Text>{semestersData[selectedSemester].overallActivity}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
          <Card className="shadow p-3 mb-5 bg-white rounded">
              <Card.Body>
                <Card.Title className="text-lg font-bold">Sem Activity Points</Card.Title>
                <Card.Text>{semestersData[selectedSemester].semActivity}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
          <Col md={3}>
          <Card className="shadow p-3 mb-5 bg-white rounded" style={{height:"300px"}}>
              <Card.Body>
                <Card.Title className="text-lg font-bold">Attendance</Card.Title>
                <Card.Text>
                  <div style={{ width: '200px', height: '200px' }}>
                    <CircularProgressbar value={attendanceValue} text={`${attendanceValue}%`} className="mt-2"  strokeWidth={10} styles={circularProgressBarStyles} />
                  </div>
                  </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
          <Card className="shadow p-3 mb-5 bg-white rounded" style={{height:"300px",width:"430px"}}>
              <Card.Body>
                <Card.Title className="text-lg font-bold">Subject-wise Attendance</Card.Title>
                <Card.Text>
                  <Bar data={chartData} />
                  </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>    
          <Card className="shadow p-3 mb-5 bg-white rounded" style={{height:"300px",width:"430px",marginLeft:"40px"}}>
              <Card.Body>
                <Card.Title className="text-lg font-bold">Sem-wise Attendance</Card.Title>
                <Card.Text>
                  <Bar data={Semwise} />
                  </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col md={3}>
          <Card className="shadow p-3 mb-5 bg-white rounded" style={{height:"300px"}}>
              <Card.Body>
                <Card.Title className="text-lg font-bold">Discovery Wheel</Card.Title>
                <Card.Text>
                  <div style={{ width: '200px', height: '200px' }}>
                    <CircularProgressbar value={attendanceValue} text={`${attendanceValue}%`} className="mt-2"  strokeWidth={10} styles={circularProgressBarStyles} />
                  </div>
                  </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
          <Card className="shadow p-3 mb-5 bg-white rounded" style={{height:"300px",width:"430px"}}>
              <Card.Body>
                <Card.Title className="text-lg font-bold">Monthwise Attendance</Card.Title>
                <Card.Text>
                  <Bar data={Monthwise} />
                  </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} >    
          <Card className="shadow p-3 mb-5 bg-white rounded" style={{height:"300px",width:"430px",marginLeft:"40px"}}>
              <Card.Body>
                <Card.Title className="text-lg font-bold">Continous Internal Evaluation</Card.Title>
                <Card.Text>
                  <Bar data={Internal} />
                  </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ChartComponent;


