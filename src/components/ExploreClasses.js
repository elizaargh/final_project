import { Button, Card, CardGroup, Modal, Row, Col, handleClose, handleShow } from "react-bootstrap";
import { collection, doc, addDoc, updateDoc, setDoc } from "firebase/firestore"; 
import React, {Children, useEffect, useState, set} from "react";
import { Container } from "react-bootstrap";
import { db } from "../firebase";
import { useAuth } from "./contexts/AuthContext";
import Img from "./yogaStock.jpg"
import dance from "./funkyDance.jpg"
import paintingStock from "./paintingStock.jpg"
import { propTypes } from "react-bootstrap/esm/Image";
// import localStorage from "local-storage";

// Add a new document in collection "Ee"
const BookIntoClass = () => {
  const [show, setShow] = useState(false);
  const [book, setBook] = useState('book')
  const [message, setMessage] = useState('Are you sure you want to book?')
  const [span, setSpan] = useState("show-button")


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
  const handleClick = () => {
    //TO DO:
    //save state "booked" even on refresh!
    if (book == "book") {
    setBook("booked!")
    handleClose()
    addYogaBooking("booked!")
    setMessage("You are already booked in!")
    setSpan("hide-button")
      } else {
        handleClose()
        setMessage("You are already booked in!")
        setSpan("hide-button")
      }

  }

  


    const {currentUser} = useAuth()
    const userUid = currentUser.uid.toString()
    const email = currentUser.email.toString()

 const handleEvent = () => {
 
 }

    async function addYogaBooking() { 
        await setDoc(doc(db, "Yoga", userUid), {
          Yoga: {email},
          booked: true
        });
    }

    async function addPaintingBooking() { 
        await setDoc(doc(db, "Painting", userUid), {
         
          Painting: {email},
          booked: true
        });
    }

    async function addFunkyDancingBooking() { 
        await addDoc(doc(db, "Funky Dacing", userUid), {
          Funky_Dance: [{email}],
          booked: true
        });
    }

  //   useEffect(() => {
  //     localStorage.setItem('book', JSON.stringify(book));
  //     console.log(book, "= book")
  //   }, [book]);

  //   useEffect(() => {
  //     const book = JSON.parse(localStorage.getItem('book'));
  //     if (book) {
  //      setBook(book);
  //      console.log(book, "= SetBOOKEDLSTORAGE")
  //     }
  //   }, []);

  return (

    <>
  <h3>Explore</h3>

<Container fluid  className="d-flex align-items-center justify-content-center" >

  <CardGroup>
    <Card style={{ width: '18rem' }}> 
    <Card.Img variant="top" src={Img} alt="Stock image: Outdoors, daytime. Person stands with a yoga mat under their arm." />
    <Card.Body>
    <Card.Title>Yoga</Card.Title>
    <Card.Text>
    Begin your day with a light intesity yoga class to clear your mind and wake up you body.
    </Card.Text>
        <Button variant="primary" onClick={addYogaBooking}>Book</Button> 
        </Card.Body>
     </Card>
    
     <Card style={{ width: '18rem' }}> 
    <Card.Img variant="top" src={paintingStock} alt="Stock image: Indoors, daytime. Woman paints on canvas supported by an easel."/>
    <Card.Body>
    <Card.Title>Painting</Card.Title>
    <Card.Text>
        Explore your creative through painting. Use acrylic paint to learn basic techniques.
    </Card.Text>
        <Button variant="primary" onClick={addPaintingBooking}>Book</Button> 
        </Card.Body>
     </Card>
    
     <Card style={{ width: '18rem' }}> 
    <Card.Img variant="top" src={dance} alt="Stock image: Indoors, daytime. Dance class in session- people mid-leap" />
    <Card.Body>
    <Card.Title>Funky Dancing</Card.Title>
    <Card.Text>
    An exhilirating dance class aimed to get the blood pumping along to some funky beats.
    </Card.Text>
        <Button variant="info" onClick={addFunkyDancingBooking}>Book</Button> 
        </Card.Body>
     </Card>



     <Card style={{ width: '18rem' }}> 
    <Card.Img variant="top" src={Img}/>
    <Card.Body>
    <Card.Title>Test Button</Card.Title>
    <Card.Text>
   I need to save 'BOOKED!' for currentUser. Probs need to like, do more than i think
    </Card.Text>
    <Button variant="primary" onClick={handleShow}>
        {book} 
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Booking confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>{message}</Modal.Body>
        <Modal.Footer>

          
          <span className={span}> 
          <Button variant="secondary" onClick={handleClose}>
            Not today 
          </Button>
          &nbsp;
          <Button variant="primary"  onClick={handleClick}>
             Book now
          </Button></span>
        </Modal.Footer>
      </Modal>
        
        </Card.Body>
     </Card>
     </CardGroup>

     
  </Container>

    </>


  )

}

export default BookIntoClass;