import React, {useState} from "react"
import {Card, Button, Alert} from 'react-bootstrap'
import {Link, useHistory} from "react-router-dom";
import { useAuth } from "./contexts/AuthContext"
import { getDatabase, ref, onValue } from "firebase/database";
import ClassInfo from "./ClassInfo";
import { Container } from "react-bootstrap";
import Timetable from "./Timetable";


export default function UserIsIn(){
    const [error, setError] = useState('')
    const {currentUser, logout} = useAuth()
    const history = useHistory()
    const db = getDatabase();
   
    const eventRef = ref(db, 'Event/free');
        onValue(eventRef, (snapshot) => {
       const data = snapshot.val();
       console.log(data)
       return (
           data
       )
       
   })



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

         
        <p> UserIsIn component= {currentUser.email} </p>
         
    )
}
