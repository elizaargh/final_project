import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return(
        <>
        <Link to="/login" >Log In</Link> | <Link to="/home">Home</Link>
        </>
    )
}