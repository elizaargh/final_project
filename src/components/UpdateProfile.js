import React, {useState} from "react"
import {Card, Button, Alert, Nav} from 'react-bootstrap'
import {Link, useHistory} from "react-router-dom";
import { useAuth } from "./contexts/AuthContext"
import { getDatabase, ref, onValue } from "firebase/database";
import TestWhatever from "./ClassInfo";
import { Container } from "react-bootstrap";
import Timetable from "./Timetable";
import UserIsIn from "./UserIsIn";
import MyBookings from "./MyBookings";
import CreateClass from "./UserBooking";
import UserBooking from "./UserBooking";
import ClassInfo from "./ClassInfo";
import BookIntoClass from "./BookIntoClass"


export default function UpdateProfile(){
    const [error, setError] = useState('')
    const {currentUser, logout} = useAuth()
    const history = useHistory()
    const db = getDatabase();
    
   
//     const eventRef = ref(db, 'Event/free');
//         onValue(eventRef, (snapshot) => {
//        const data = snapshot.val();
//        console.log(data)
//        return (
//            data
//        )
       
//    })

   const userUid = currentUser.uid




    async function handleLogout(){
        setError('')
        try {
            await logout()
            history.push('/home')
        } catch {
            setError('Failed to logout')
        }

    }
    if (!currentUser){
        return (
            <h1>You are not logged in!</h1>
        )
    }
    return (    
    <> 
     <Container >
        
        <h1 className="firestoreData"> Welcome {currentUser.email}
        </h1>
        <Nav.Link href="/myTimetable">My Timetable</Nav.Link>
       
        <div>  
        
           
            <BookIntoClass/>
           
            {/* <Timetable/> */}
            <ClassInfo/>
            {/* <UserIsIn/>
            <MyBookings/> */}
            <Button onClick={handleLogout} htmlFor="Log Out button"> Log out</Button>
        </div>  
    </Container>     
    </>
    )
}
