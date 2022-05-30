import Table from 'react-bootstrap/Table'
import React from 'react';
import { useAuth } from "./contexts/AuthContext"
import CancelBooking from "./CancelBooking";

const Timetable = () => {
  const {currentUser} = useAuth()
  if (!currentUser){
    return (
        <h1>You are not logged in! Please Log in to access My Timetable</h1>
    )
}
    return(
        <>
        <h1> Timetable for: {currentUser.email}</h1>
<Table responsive bordered="true">
  <thead>
    <tr>
      <th>Time</th>
        <th>Monday</th>
        <th>Tuesday</th>
        <th>Wednesday</th>
        <th>Thursday</th>
        <th>Friday</th>
        <th>Saturday</th>
        <th>Sunday</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>7 am</td>
  
        <td> Yoga</td>
        <td> Funky Dancing
          <CancelBooking/>
        </td>
        <td> </td>
        <td> </td>
        <td> Meditation</td>
        <td> Yoga </td>
        <td> </td>
     
    </tr>
    <tr>
      <td>8 am</td>
  
        <td> </td>
        <td> </td>
        <td> Yoga</td>
        <td> Funky Baby Dancing</td>
        <td> </td>
        <td> Community Talks</td>
        <td> </td>
     
    </tr>
    <tr>
      <td>9 am</td>
  
        <td> Yoga </td>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
     
    </tr>
    <tr>
      <td>10 am</td>
  
        <td> </td>
        <td> </td>
        <td></td>
        <td></td>
        <td> </td>
        <td> Yoga</td>
        <td> </td>
     
    </tr>
    <tr>
      <td>11 am</td>
  
        <td> </td>
        <td> Groovy Dancing</td>
        <td> </td>
        <td> </td>
        <td> Painting</td>
        <td> </td>
        <td> </td>
     
    </tr>
  </tbody>
</Table>
    </>
    )}

    export default Timetable;