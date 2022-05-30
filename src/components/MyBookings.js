import React, { useEffect, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { useAuth } from "./contexts/AuthContext"
// import { getDatabase, ref, onValue } from "firebase/database";
import { collection, doc, getDoc, getDocs } from "firebase/firestore"; 
import { db } from "../firebase";



const MyBookings = () => {
    const [whatever, setWhatever] = useState([]);
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
   
  
    async function Enrolled() { 
        const docRef = doc(db, "myBookings", "ERAwIemIuxsiyukBX5gS" )
        console.log(docRef)
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()){
            const docData = (docSnap.data());
          setWhatever(docData)
            console.log(docData)
           
        }else{
            console.log("nothing")
        }


     
    }
    useEffect(() => {
      Enrolled();
    }, []);

    return (
      <>
       <p>myBookings Component</p>
      </>
    )

  }

export default MyBookings;
