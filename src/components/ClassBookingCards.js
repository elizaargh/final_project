import { Container, Button, Card, CardGroup, Accordion } from "react-bootstrap";

import React from "react";
import UpdateBooking from "./updateBooking";
import CancelBooking from "./CancelBooking";

const ClassBookingCards = () => {


    return (
        <Container fluid  className="d-flex align-items-center justify-content-center" >
            <CardGroup>
                <Card style={{ width: '18rem' }}> 
                    <Card.Img variant="top"/>
                    <Card.Body>
                    <Card.Title>Yoga</Card.Title>
                    <Card.Text>
                        Start: 7 am
                        <br/>
                        Bring: Yoga Mat 
                        <br/>
                        <br/>
                        <UpdateBooking/>
                        &nbsp;
                        <CancelBooking/>
                        
                    </Card.Text>
                
                
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}> 
                    <Card.Img variant="top"/>
                    <Card.Body>
                    <Card.Title>Funky Baby Dacing</Card.Title>
                    <Card.Text>
                    Start: 9 am
                        <br/>
                        Bring: Baby and Water Bottle
                        <br/>
                        <br/>
                       
                        <CancelBooking/>
                        
                    </Card.Text>
                
                
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}> 
                    <Card.Img variant="top"/>
                    <Card.Body>
                    <Card.Title>Gardening Club</Card.Title>
                    <Card.Text>
                        
                            Start: 8 am <br/>
                            Where: Sunshine Park
                    
                              <br/>
                        <br/>
                        <CancelBooking/>
                        
                    </Card.Text>
                
                
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}> 
                    <Card.Img variant="top"/>
                    <Card.Body>
                    <Card.Title>Community Talks</Card.Title>
                    <Card.Text>
                        
                            Who: John & Jane Donut <br/>
                              When: Sat 7th June 
                    
                              <br/>
                        <br/>
                        <CancelBooking/>
                        
                    </Card.Text>
                
                
                    </Card.Body>
                </Card>
             </CardGroup>
        </Container>
    )      
}

export default ClassBookingCards;