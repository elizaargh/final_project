import React from "react"
import { Container, Row, Col, Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import AccordianMenu from "./AccordianMenu"
import HomeFeature from "./HomeFeature"
import ClassInfo from "./ClassInfo"

export default function Home({}
    ){
    
    return (
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
              
                    <HomeFeature/>
                    <Card>
                    <Card.Body>  
                    <h1 className="home-page-headings"> Welcome</h1>
                    <p className="home-page-paragraph"> We are Sunshine Lane community centre. Mollit nostrud eu consequat nulla cupidatat dolore. Ea ad magna et mollit et cillum ex cillum irure elit minim aute. Do officia labore ea consequat magna reprehenderit enim dolore nostrud id.     Incididunt sint culpa mollit labore eu enim pariatur consequat consequat cupidatat occaecat minim anim ex. Labore incididunt anim eu amet.

                    </p>
                     </Card.Body>  
                    </Card>
                   <br/>
                    <Card>
                    <Card.Body>  
                    <h1 className="home-page-headings"> Newsletter </h1><p className="home-page-paragraph">
                    Incididunt sint culpa mollit labore eu enim pariatur consequat consequat cupidatat occaecat minim anim ex. Labore incididunt anim eu amet minim in consequat occaecat. Magna commodo qui anim non velit non aliquip nostrud. Read out newsletter by clicking the button below.
                        </p> 
                        <p className="button-align"> <Button className="newsletter-button">Newsletter</Button></p>
                      
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
            
    
    )
}