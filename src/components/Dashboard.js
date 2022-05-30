import React, {useState} from "react";
import {Card, Button, Alert, Container} from 'react-bootstrap'
import { useAuth } from "./contexts/AuthContext";
import {Link, useHistory} from "react-router-dom";
import UserClasses from "./UserClasses";
import ClassInfo from "./ClassInfo";


export default function Dashboard() {
    const [error, setError] = useState('')
    const {currentUser, logout} = useAuth()
    const history = useHistory()

    async function handleLogout(){
        setError('')
        try {
            await logout()
            history.push('/login')
        } catch {
            setError('Failed to logout')
        }

    }
    return (
        <>
        <ClassInfo/>
        <Container fluid className="d-flex align-items-center justify-content-center"> 
        <div className='w-100' style={{maxWidth: "400px"}}>
        <Card>
            <Card.Body>
                <h2 className="text-senter mb-4">Profile</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <strong>Email:</strong> {currentUser.email}
               
                 <p> <strong>Name: {currentUser.uid}</strong> </p>
                 <p> Show users booked classes coming soon!</p>
                 
                <strong></strong> 
                <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
                    Manage bookings
                </Link>
                <Link to="/myTimetable" className="btn btn-primary w-100 mt-3">
                    My Timetable
                </Link>
            </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">  
           <Button variant="link" onClick={handleLogout}>
               Log Out
            </Button>
           </div>
           </div>
           </Container>
        </>
    
        )
}