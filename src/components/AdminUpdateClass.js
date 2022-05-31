import { collection, where, query, doc, addDoc, updateDoc, setDoc, arrayUnion, getDoc, getDocs } from "firebase/firestore"; 
import React, {Children, useEffect, useState, set, handleSubmit} from "react";
import { Container, Button, Form, Col, Row, Card } from "react-bootstrap";
import { db } from "../firebase";
import { useAuth } from "./contexts/AuthContext";



const AdminUpdateClass = () => {
    const {currentUser} = useAuth()
    const [classSearch, setClassSearch] = useState('')
    const [day, setDay] = useState('')
    const [classTypeFeild, setClassTypeFeild] = useState('')
    const [description, setDescription] = useState('')
    const [start, setStart] = useState('')
    const [duration, setDuration] = useState('')
    const [location, setLocation] = useState('')
    const [age, setAge] = useState('')
    const [tutor, setTutor] = useState('')
    

    let nameClass = "null"
    let dayClass = "goodbye"
    let classType = "omg"
    let descriptionClass = "null"
    let classStart = "null"
    let classTutor = "null"
    let classDuration = "null"
    let classLocation = "null"
    let classAge = "null"

   const handleSubmit = (e) => {
     e.preventDefault();
     setClassSearch(e.target[0].value)
     nameClass = (e.target[0].value)
     console.log(classSearch)
        getClassData();
    }

    async function getClassData(){
        const classRef = (collection(db, nameClass));
        const q = query(classRef)
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());

        setClassTypeFeild(doc.data().type)
        console.log(classTypeFeild, "this is state")
        classType = (doc.data().type)
        console.log(classType, "class type")

       
        setDescription(doc.data().description)
        descriptionClass = (doc.data().description)
     
        setStart(doc.data().start)
        classStart = (doc.data().start)

        setDuration(doc.data().duration)
        let classDuration = (doc.data().duration)

        dayClass = doc.id
        setDay(doc.id)
        console.log(day, "set state")

        setTutor(doc.data().tutor)
        
        setLocation(doc.data().location)
        classLocation = (doc.data().location)
        
        setAge(doc.data().ageLimit)
        
        
        

        });
      }

      const _handleSubmit = (e) => {
        e.preventDefault();
        adminUpateInfo();
        // setClassTypeFeild(e.target[1].value)
        
        classType = (e.target[1].value)
        console.log(classTypeFeild, "state")

        descriptionClass = (e.target[2].value)
      
        console.log(description, "state in handle submit")

        classStart = (e.target[3].value)
        classDuration = (e.target[4].value)
        dayClass = (e.target[5].value)
        classTutor = (e.target[6].value)
        console.log(classTutor, "variable")
        classLocation = (e.target[7].value)
        classAge = (e.target[8].value)
        // adminUpateInfo();
       }
        
        

        async function adminUpateInfo() { 
          const updateClassInfoRef = doc(db, classSearch, day);
          await updateDoc(updateClassInfoRef, {
            active: [true],
            type: classType,
            description: descriptionClass,
            start: classStart,
            tutor: classTutor,
            duration: classDuration,
            location: classLocation,
            ageLimit: classAge
          }
          
      )}

    useEffect(() => {
        
    }, [nameClass, dayClass, classType, descriptionClass, classAge, classDuration, classLocation, classTutor], );

        
    return (
        <> 
         <Container fluid>
        <br/>
 
        <Card>
            <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                 <Form.Label>Search</Form.Label>
                   <Form.Control 
                     placeholder="e.g: Yoga" />
                    </Form.Group>
            
            </Row>
            <p className="button-align"> <Button variant="primary" type="submit">
                    Search
                </Button></p>
          </Form>
            
          </Card.Body>
        </Card>
       <br/>

            
       <Card>
            <Card.Body>       
        <Form onSubmit={_handleSubmit} >
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Class Name</Form.Label>
              <Form.Control
              defaultValue={classSearch}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Type</Form.Label>
              <Form.Control formTarget="name" 
           
              defaultValue={classTypeFeild}
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Description</Form.Label>
            <Form.Control 
            defaultValue={description} />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Start</Form.Label>
              <Form.Control 
              defaultValue={start}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Duration</Form.Label>
              <Form.Select defaultValue={duration}>
                <option>{duration}</option>
                <option>1 hr</option>
                <option>1.5 hr</option>
                <option>2 hrs</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Day</Form.Label>
              <Form.Select defaultValue="hello">
                <option defaultChecked>{day}</option>
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
              <Form.Control 
              placeholder=""
              defaultValue={tutor} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Location</Form.Label>
              <Form.Select 
              defaultValue={location}>
                <option>{location}</option>
                <option>Sunny Small Hall</option>
                <option>Sunshine Community Hall</option>
                <option>Sunny Sunshine Park</option>
                <option>Off premises</option>
            
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Age </Form.Label>
              <Form.Select defaultValue={age}>
                <option>{age}</option>
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
            Save Changes
          </Button>
        </Form>
      
        </Card.Body>
     </Card> 
   </Container>
 </>
)}

export default AdminUpdateClass