import { collection, doc, addDoc, updateDoc, setDoc, arrayUnion } from "firebase/firestore"; 
import React, {Children, useEffect, useState, set} from "react";
import { Container, Button, Form, Col, Row } from "react-bootstrap";
import { db } from "../firebase";
import { useAuth } from "./contexts/AuthContext";


// get TEXT from input feilds. 
// input fields in form are targeted by key to object e.g[0]
// now, i need the string "text" to be saved so i can use it to GET data
// i use e.g. let nameClass = "null" because i get an error when i dont.
// BUT e.g. let nameClass is now (e.target[whatever].value) because of handlesubmit function 



const AdminCreateNew = () => {
    const {currentUser} = useAuth()
    const [addClass, setAddClass] = useState('')
    const [day, setDay] = useState('')
    const [classTypeFeild, setClassTypeFeild] = useState('')
    const [description, setDescription] = useState('')
    const [start, setStart] = useState('')
    const [duration, setDuration] = useState('')
    const [location, setLocation] = useState('')
    const [age, setAgeLimit] = useState('')
    
    //make this dynamic! 
    let nameClass = "null"
    let dayClass = "null"
    let classType = "null"
    let descriptionClass = "null"
    let classStart = "null"
    let classTutor = "null"
    let classDuration = "null"
    let classLocation = "null"
    let classAge = "null"



    const userUid = currentUser.uid.toString()
    const updateUserBookingRef = doc(db, nameClass, dayClass);

    async function handleSubmit (e) {
        e.preventDefault();
        setAddClass(e.target[0].value)
         nameClass = (e.target[0].value)
            console.log(nameClass) 

        setClassTypeFeild(e.target[1].value)
        classType = (e.target[1].value)
        console.log(classType)

        setDescription(e.target[2].value)
        descriptionClass = (e.target[2].value)
        console.log(descriptionClass)
        
        setStart(e.target[3].value)
        classStart = (e.target[3].value)

        setDuration(e.target[4].value)
        classDuration = (e.target[4].value)

        setDay(e.target[5].value)
        dayClass = (e.target[5].value).toString()
        console.log(dayClass)

        classTutor = (e.target[6].value)
        console.log(classTutor)
       

        setLocation(e.target[7].value)
        classLocation = (e.target[7].value)

        setAgeLimit(e.target[8].value)
        classAge = (e.target[8].value)

        adminCreateNew();

    }

    async function adminCreateNew() { 
        await setDoc(doc(db, nameClass, dayClass), {
          active: [true],
          type: addClass,
          description: descriptionClass,
          start: classStart,
          tutor: classTutor,
          duration: classDuration,
          location: classLocation,
          ageLimit: classAge

        });
        console.log("i made data!")
    }

    async function userBooking() {
            // if condition to check !users: userUid
            //else {return ("You are already booked in!")} 
            await updateDoc(updateUserBookingRef, {
                nameClass: arrayUnion(userUid)
            })
            console.log("you are booked in!")
    }

    useEffect(() => {
        
          }, [nameClass, dayClass, classType, descriptionClass, classAge, classDuration, classLocation, classTutor]);
    return (
        <> 

<Form onSubmit={handleSubmit}>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Class Name</Form.Label>
      <Form.Control 
      placeholder="e.g: Yoga" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Type</Form.Label>
      <Form.Control formTarget="name" placeholder="e.g: Exercise" />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Description</Form.Label>
    <Form.Control placeholder="e.g: Easy flow class to gently awaken the body for the day ahead" />
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>Start</Form.Label>
      <Form.Control placeholder="7 am" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Duration</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Select...</option>
        <option>1 hr</option>
        <option>1.5 hr</option>
        <option>2 hrs</option>
      </Form.Select>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Day</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Select...</option>
        <option>Monday</option>
        <option>Tuesday</option>
        <option>Wednesday</option>
        <option>Thursday</option>
        <option>Friday</option>
        <option>Saturday</option>
        <option>Sunday</option>
      </Form.Select>
    </Form.Group>

  </Row>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>Tutor Name</Form.Label>
      <Form.Control/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Location</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Select...</option>
        <option>Sunny Small Hall</option>
        <option>Sunshine Community Hall</option>
        <option>Sunny Sunshine Park</option>
        <option>Off premises</option>
    
      </Form.Select>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Age </Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Select...</option>
        <option>all ages</option>
        <option>must be 18</option>
        <option>under 18</option>
        <option>primary school age</option>
        <option>all under 6</option>
        <option>3 - 5</option>
        <option>0 - 2 </option>
      </Form.Select>
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" id="formGridCheckbox">
  <Form.Label>Send Alert</Form.Label>
    <Form.Check type="checkbox" label="Internal Email/Staff" />
    <Form.Check type="checkbox" label="Newsletter" />
    <Form.Check type="checkbox" label="Email current users" />
    
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </>
    )
}
export default AdminCreateNew;