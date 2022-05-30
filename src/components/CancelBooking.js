import { collection, doc, addDoc, updateDoc, setDoc, arrayUnion, arrayRemove } from "firebase/firestore"; 
import React, {Children, useEffect, useState, set} from "react";
import { Container, Button } from "react-bootstrap";
import { db } from "../firebase";
import { useAuth } from "./contexts/AuthContext";



const CancelBooking = () => {
    const {currentUser} = useAuth()
    const nameClass = "Yoga"
    const dayClass = "monday-class"


    const userUid = currentUser.uid.toString()
    const updateUserBookingRef = doc(db, nameClass, dayClass);

    const handleClick = () => {
        userBooking()

    }

    async function userBooking() { 
            await updateDoc(updateUserBookingRef, {
                users: arrayRemove(userUid)
            })
            console.log("Your booking has been cancelled!")
    }

    return (
        <> 
        <Button size="sm" onClick={handleClick}>Cancel Booking</Button>
        </>
    )
}
export default CancelBooking;