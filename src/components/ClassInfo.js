import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useAuth } from "./contexts/AuthContext"
// import { getDatabase, ref, onValue } from "firebase/database";
import { collection, query, where, doc, getDoc, getDocs } from "firebase/firestore"; 
import { db } from "../firebase";



const ClassInfo = () => {
    const [whatever, setWhatever] = useState([]);
    const {currentUser} = useAuth();
    const userUid = currentUser.uid.toString()

    // const exerciseRef = collection(db, "Exercise", userUid)
    // const q = query(exerciseRef, where("booked", "==", true))

    // async function ReadExerciseRef() {
    //   const querySnapshot = await getDocs(q);
    //   querySnapshot.rofEach((doc) => {
    //     console.log(doc.id, "=>", doc.data())
    //   })
    // }
  
    async function ReadTestDoc() { 
        const docRef = doc(db, "Yoga", userUid )
        
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()){
            const docData = (docSnap.data());
          setWhatever( Object.keys(docData))
          console.log(Object.keys(docData))
            
           
        }else{
            console.log("nothing")
        }


     
    }
    useEffect(() => {
      ReadTestDoc();
    }, []);

    return (
      <><p>ClassInfo compnent data</p>
        {whatever.map((w) => (
          <p key={Math.random()}>{w}</p>
        ) )}
      </>
    )

  }

export default ClassInfo;

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