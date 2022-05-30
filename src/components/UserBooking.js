import { Button } from "react-bootstrap";
import { collection, doc, setDoc } from "firebase/firestore"; 
import React, {useEffect, useState} from "react";
import { Container } from "react-bootstrap";
import { db } from "../firebase";
import { useAuth } from "./contexts/AuthContext";

// Add a new document in collection "Ee"
const UserBooking = () => {

    const bookClass = (nameOfClass) => {

    }

    const {currentUser} = useAuth()
    const userUid = currentUser.uid.toString()
    const email = currentUser.email.toString()
    
    

    async function addBooking() { 
        await setDoc(doc(db, "userBookings", userUid), {
          class: "yoga",
          user: {email},
          booked: true
        });
   
    }




  return (

    <>
  <h1>Book Again:</h1>

   
     <Button onClick={addBooking}>Yoga</Button> |
     <Button onClick={addBooking}>Painting</Button> <br/><br/>
     <Button onClick={addBooking}>UID is set in userBookings:</Button> 
    </>


  )

}

export default UserBooking;