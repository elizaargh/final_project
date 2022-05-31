import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import AccordianMenu from "../AccordianMenu"
import HomeFeature from "../HomeFeature"
import ClassInfo from "../ClassInfo"
import YogaFeature from "../YogaFeature"


export default function yogaPage({}
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
                <YogaFeature/>
                <div className="Newsletter-container">
                    <h1 className="home-page-headings"> Yoga</h1>
                    Adipisicing ex amet culpa labore adipisicing esse ex sunt irure non deserunt amet occaecat sint. Mollit nostrud eu consequat nulla cupidatat dolore. Ea ad magna et mollit et cillum ex cillum irure elit minim aute. Do officia labore ea consequat magna reprehenderit enim dolore nostrud id.
                      </div>
                      <div className="Newsletter-container">
                      <h1 className="home-page-headings"> Testimonials </h1>
                    "Incididunt sint culpa mollit labore eu enim pariatur consequat consequat cupidatat occaecat minim anim ex. Labore incididunt anim eu amet minim in consequat occaecat. Magna commodo qui anim non velit non aliquip nostrud. Adipisicing fugiat consectetur magna officia adipisicing sint culpa cillum proident pariatur officia dolore." 
                     </div>
                     
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