import React from "react"
import { Container, Row, Col, Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import AccordianMenu from "../AccordianMenu"
import AdminCreateNew from "../AdminCreateNew"
import AdminUpdateClass from "../AdminUpdateClass"
import { useAuth } from "../contexts/AuthContext"



export default function AdminPage() {
    
    return (
        

        <> 
     
       
 
        <Container fluid> 
        <div className="homepage">
             <Row>
                <Col lg={true}>
                    <div className="sunshine-lane-logo"> 
                <h4>Sunshine</h4>
                   <h4>Lane</h4>
                   <p> community centre</p>
            </div>
    
                </Col>
                <Col lg={8}>
                
                <Card>
            <Card.Body>
                   
                    <h1 className="home-page-headings"> Edit Class info</h1>
              
                    <AdminUpdateClass/>
                    <h1 className="home-page-headings"> Create New Class </h1>
                   
                    <AdminCreateNew/>
                      
                          
                  </Card.Body>   
                </Card>
           
                </Col>
                <Col lg={true}>
                <h2 className="right-side-menu">Important Info</h2>
                <AccordianMenu/>
                </Col>
            </Row>
            </div>
         
        </Container>
        </>
    )
}