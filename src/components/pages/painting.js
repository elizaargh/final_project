import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import AccordianMenu from "../AccordianMenu"
import HomeFeature from "../HomeFeature"
import ClassInfo from "../ClassInfo"
import PaintingFeature from "../PaintingFeature"

export default function PaintingPage({}
    ){
    
    return (
        <Container fluid className="d-flex align-items-center justify-content-center">
        <div className="yogaPage">
             <Row>
                <Col lg={true}>
                <div className="sunshine-lane-logo"> 
                <h4>Sunshine</h4>
                   <h4>Lane</h4>
                   <p> community centre</p>
            </div>
       
                </Col>
                <Col lg={8}>
                <PaintingFeature/>
                    <h1> Painting</h1>
                    Adipisicing ex amet culpa labore adipisicing esse ex sunt irure non deserunt amet occaecat sint. Mollit nostrud eu consequat nulla cupidatat dolore. Ea ad magna et mollit et cillum ex cillum irure elit minim aute. Do officia labore ea consequat magna reprehenderit enim dolore nostrud id.
                    <h2> Testimonials </h2>
                    "Incididunt sint culpa mollit labore eu enim pariatur consequat consequat cupidatat occaecat minim anim ex. Labore incididunt anim eu amet minim in consequat occaecat. Magna commodo qui anim non velit non aliquip nostrud. Adipisicing fugiat consectetur magna officia adipisicing sint culpa cillum proident pariatur officia dolore." 
                       <p> </p> 
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