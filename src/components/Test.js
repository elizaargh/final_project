import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useAuth } from "./contexts/AuthContext"
// import { getDatabase, ref, onValue } from "firebase/database";
import { collection, doc, getDoc, getDocs } from "firebase/firestore"; 
import { db } from "../firebase";



const TestWhatever = () => {
    const [whatever, setWhatever] = useState([]);
  
    async function ReadTestDoc() { 
        const docRef = doc(db, "testWhatver", "testeliza" )
        console.log(docRef)
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()){
            const docData = (docSnap.data());
          setWhatever(docData.hello)
            console.log(docData.hello)
           
        }else{
            console.log("nothing")
        }


     
    }
    useEffect(() => {
      ReadTestDoc();
    }, []);

    return (
      <>
        {whatever.map((w) => (
          <h1 key={Math.random()}> {w}</h1>
        ) )}
      </>
    )

  }

export default TestWhatever;

// const getTest = async () => {
// const querySnapshot = await getDocs(collection(db, "test"));
// querySnapshot.forEach((doc) => {
//   // doc.data() is never undefined for query doc snapshots
//   console.log(doc.id, " => ", doc.data());

// });
// }
// export default getTest;

    // async function ReadTestDoc() {
    //     const docRef = doc(db, "test", "hello" )
    //     console.log(docRef)
    //     const docSnap = await getDoc(docRef);
    //     if (docSnap.exists()){
    //         const docData = (docSnap.data());
    //     }else{
    //         console.log("nothing")
    //     }
    // }
    // export default ReadTestDoc;
    // const getDataPlease = async () => {
    // const querySnapshot = await getDocs(collection(db, "users"));
    // querySnapshot.forEach((doc) => {
    //   console.log(`${doc.id} => ${doc.data()}`);
      
    //   });
    // }

    // const getEvent = async () => {
    //     const eventDocRef = doc(db);
    //     const eventDocSnap = await getDoc(eventDocRef);
    //     data = eventDocSnap.data();
    //     setEventInfo(data);
    //     console.log(data)
    //   };

//     const eventRef = ref(rdb, 'Event/free');
//         onValue(eventRef, (snapshot) => {
//         const data = snapshot.val();
//             console.log(Object.keys(data))
//         });

// return (
            
//         <div>
//              <p>Data coming soon</p>  
//         </div>
//     )
//     }