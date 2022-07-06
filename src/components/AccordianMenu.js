import { Accordion } from "react-bootstrap"
import React from "react";

const AccordianMenu = () => {
    return(
        <>
            
        <Accordion >
        <Accordion.Item eventKey="0">
            <Accordion.Header>About Us</Accordion.Header>
            <Accordion.Body>
                <p>We are Sunshine Lane community centre. Our goal is to connect our community in a respectful, empathetic and robust way.</p>
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
            <Accordion.Header>Location</Accordion.Header>
            <Accordion.Body>
            <strong>We are located at:  </strong><br/>
             Community Hall <br/>
             18 Happy Steet,
             Friendship Hill, Syd<br/>
             <p> Look for the Community Hall building on the corner of Happy street and Sunshine Lane.</p>
            </Accordion.Body>
          
        </Accordion.Item>
        <Accordion.Item eventKey="2">
            <Accordion.Header>Visit</Accordion.Header>
            <Accordion.Body>
               
                <p>We encourage travel via public transport where possible.
               </p>
              <strong>Public Transport:</strong> Bus, Train and LightRail <br/><br/>
              <strong>Parking </strong> Accessible parking spots and street parking on Sunshine lane
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
            <Accordion.Header>Emergency Phone Numbers</Accordion.Header>
            <Accordion.Body>
                <u>
                    <li>dial '000' in emergencies</li>
                    <li>Lifeline: 131 114</li>
                    <li>Domestic Violence Line: 1800 656 463</li>
                    <li>Kids Help Line: 1800 55 1800</li>
                    <li>Translating & Interpreting: 131 450</li>
                    <li>Rape Crisis Centre: 1800 806 292</li>
                </u>
            </Accordion.Body>
        </Accordion.Item>
        </Accordion>
</>
    )}

export default AccordianMenu;