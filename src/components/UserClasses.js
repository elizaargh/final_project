// import React, {useEffect, useState} from "react";

// import { Button } from "react-bootstrap";
// import {querySnapshot, collection, getDocs, query, where } from "firebase/firestore"; 

// import { Container } from "react-bootstrap";
// import { db } from "../firebase";
// import { useAuth } from "./contexts/AuthContext";

// // Add a new document in collection "Ee"
// const UserClasses = () => {
//     const { currentUser } = useAuth()
//     const [whatever, setWhatever] = useState();
//     async function ReadTestDoc() { 
//     const q = query.apply(collection(db, "Yoga"), where(currentUser, "==", currentUser));
    
//        const querySnapshot = await getDocs(collection(db, "Yoga"));
//        querySnapshot.forEach((doc) => {
//            console.log(doc.id, doc.data)
//        })
       
//           setWhatever(docData)
//           console.log(docData)
            
   


     
//     }
//     useEffect(() => {
//       ReadTestDoc();
//     }, []);





//   return (

//     <>
//   <h1>hello</h1>

   
     
//     </>


//   )

// }

// export default UserClasses;