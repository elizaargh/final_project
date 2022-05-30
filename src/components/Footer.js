
import { Container, Row, Col } from "react-bootstrap"
import React from "react";
import './Footer.css'



const Footer = () => {

    return(
        <>
        <div className="footer">
    <Container fluid>
    <Row>
        <Col>
        <div className="sunshine-lane-logo"> 
       <h4>Sunshine</h4> 
       <h4>Lane</h4>
       Community Centre
       </div>
       <br/>
        We would like to pay our respects and acknowledge, the Aboriginal and Torres Strait Islander Peoples, of this nation.
        <br/>
         We acknowledge the traditional custodians of the land on which our Centre is located, the Gadigal people of the Eora Nation.<p> We'd also like to pay respects to Elders both past and present.</p>
       <p> Contact info</p>
       <p> phone: 0455 555 555</p>
       <p> email: here@centre.com </p>
        </Col>
   
    </Row>
    </Container>
    </div>
</>
    )}

    export default Footer;