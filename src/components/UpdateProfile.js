import React, {useState} from "react"
import {Card, Button, Alert} from 'react-bootstrap'
import {Link, useHistory} from "react-router-dom";
import { useAuth } from "./contexts/AuthContext"
import { getDatabase, ref, onValue } from "firebase/database";


export default function UpdateProfile(){
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
            <h1>go away</h1>
        )
    }
    return (    
    <> 
    <Button variant="link" onClick={handleLogout}>
        Log Out
    </Button>
    <p>Welcome {currentUser.email}</p>
    <div>  
        
        <h4>Current Bookings: Coming Soon </h4>
        
            
        </div>
    </>
    )
}
