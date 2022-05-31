import { collection, doc, addDoc, updateDoc, setDoc, arrayUnion } from "firebase/firestore"; 
import React, {Children, useEffect, useState, set} from "react";
import { Container, Button } from "react-bootstrap";
import { db } from "../firebase";
import { useAuth } from "./contexts/AuthContext";



const UpdateBooking = () => {
    const {currentUser} = useAuth()
    //make this dynamic!
    
    const nameClass = "Yoga"
    const dayClass = "monday-class"


    const userUid = currentUser.uid.toString()
    const updateUserBookingRef = doc(db, nameClass, dayClass);

    const handleClick = () => {
        userBooking()

    }

    async function userBooking() {
            // if condition to check !users: userUid
            //else {return ("You are already booked in!")} 
            await updateDoc(updateUserBookingRef, {
                users: arrayUnion(userUid)
            })
            console.log("you are booked in!")
    }

    return (
        <> 

        <Button size="sm" onClick={handleClick}>Book Class</Button>
        </>
    )
}
export default UpdateBooking