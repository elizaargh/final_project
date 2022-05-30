import { collection, query, doc, addDoc, updateDoc, setDoc, arrayUnion, getDoc, getDocs } from "firebase/firestore"; 
import React, {Children, useEffect, useState, set, handleSubmit} from "react";
import { Container, Button, Form, Col, Row } from "react-bootstrap";
import { db } from "../firebase";
import { useAuth } from "./contexts/AuthContext";



const AdminUpdateClass = () => {
    const {currentUser} = useAuth()
    const [addClass, setAddClass] = useState('')
    const [day, setDay] = useState('')
    const [classTypeFeild, setClassTypeFeild] = useState('')
    const [description, setDescription] = useState('')
    const [start, setStart] = useState('')
    const [duration, setDuration] = useState('')
    const [location, setLocation] = useState('')
    const [age, setAgeLimit] = useState('')
    
   
    async function getClassData(e){
        const q = query(collection(db, "Yoga"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        });
    }

    const handleSubmit = () => {
        getClassData();
    }

    // async function getClassData(e){
    //     const docRef = doc(db, addClass, day);
    //     const docSnap = await getDoc(docRef);

    //     if (docSnap.exists()) {
    //     console.log("Document data:", docSnap.data());
    //     } else {
    //     // doc.data() will be undefined in this case
    //     console.log("No such document!");
    //     }
    // }




    let nameClass = "null"
    let dayClass = "null"
    let classType = "null"
    let descriptionClass = "null"
    let classStart = "null"
    let classDuration = "null"
    let classLocation = "null"
    let classAge = "null"



    const userUid = currentUser.uid.toString()
    const updateUserBookingRef = doc(db, nameClass, dayClass);

    

    

    async function updateClassData(e) { 
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
        dayClass = (e.target[5].value)
        console.log(dayClass)
       

        setLocation(e.target[7].value)
        classLocation = (e.target[7].value)

        setAgeLimit(e.target[8].value)
        classAge = (e.target[8].value)

        

    
    }

    async function adminCreateNew() { 
        await updateDoc(doc(db, nameClass, dayClass), {
          type: classType,
          description: descriptionClass,
          start: classStart,
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
        
          }, [nameClass, dayClass, classType, descriptionClass, classAge, classDuration, classLocation]);
        
    return (
        <> 
        <h1> UPDATE CLASS/EDIT coming soon</h1>

{/* <Form onSubmit={handleSubmit}>
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
      <Form.Control placeholder="7 am" />
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
      <Form.Label>Age requirements</Form.Label>
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
</Form> */}
        </>
    )}

export default AdminUpdateClass