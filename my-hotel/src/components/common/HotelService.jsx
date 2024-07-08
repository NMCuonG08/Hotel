import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Header from './Header'
import { FaClock, FaCocktail, FaParking, FaSnowflake, FaTshirt, FaUtensils, FaWifi } from 'react-icons/fa'
const HotelService = () => {
  return (
    <>
        <Container className="mb-2">
            <Header title={"Our Services"}/>
            <Row>
                <h4 className="text-center"> Service at <span style={{color:'pink'}}>My Hotel</span>
                    <span className="gap-2"> <FaClock/> - 24-Hours Front Desk </span>         
                  </h4>
            </Row>
            <hr/>
            <Row sx={1} md={2} lg={3} className='g-4 mt-2'>
              <Col>
                <Card>
                  <Card.Body>
                    <Card.Title>
                        <FaWifi/> WiFi
                    </Card.Title>
                    <Card.Text>Stay connected with high-speed internet access</Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col>
                <Card>
                  <Card.Body>
                    <Card.Title>
                        <FaUtensils/> BreakFast
                    </Card.Title>
                    <Card.Text>Start</Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col>
                <Card>
                  <Card.Body>
                    <Card.Title>
                        <FaTshirt/> Laundry
                    </Card.Title>
                    <Card.Text>Keep your clothes clean and fresh with out lanudry service</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Body>
                    <Card.Title>
                        <FaCocktail/> Mi-ni Bar
                    </Card.Title>
                    <Card.Text>Enjoy a refeshing drink  or snack from our in-room mini-bar.</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Body>
                    <Card.Title>
                        <FaParking/> Parking
                    </Card.Title>
                    <Card.Text>Parking your car conveniently in our on-site parking lot.</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Body>
                    <Card.Title>
                        <FaSnowflake/> Ari Condition
                    </Card.Title>
                    <Card.Text>Stay cool and comfortable with our air condition system.</Card.Text> 
                  </Card.Body>
                </Card>
              </Col>
            </Row>
        </Container>
    </>
  )
}

export default HotelService