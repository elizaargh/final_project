import React from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import AccordianMenu from "../AccordianMenu"
import AdminCreateNew from "../AdminCreateNew"
import AdminUpdateClass from "../AdminUpdateClass"


export default function AdminPage({}
    ){
    
    return (

        <> 
        <AdminUpdateClass/>
       
 
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
                
                   
                    <div className="Newsletter-container">
                    <h1 className="home-page-headings"> Create New Class</h1>
                    <AdminCreateNew/>
                    </div>
                    <div className="Newsletter-container">
                    <h1 className="home-page-headings">Edit Class info </h1><p className="home-page-paragraph">
                    Incididunt sint culpa mollit labore eu enim pariatur consequat consequat cupidatat occaecat minim anim ex. Labore incididunt anim eu amet minim in consequat occaecat. Magna commodo qui anim non velit non aliquip nostrud. Read out newsletter by clicking the button below.
                        </p> 
                        <p className="button-align"> <Button className="newsletter-button">Save Changes</Button></p>
                     </div>   
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