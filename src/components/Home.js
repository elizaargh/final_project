import React from "react"
import { Link } from "react-router-dom"
import TestWhatever from "./Test"

export default function Home({}
    ){
    
    return (
        <div>
            <Link to={"/signup"}>Sign Up</Link>
            <Link to={"/login"}>Sign In</Link>
            <h2>   Hello home page </h2>
            <TestWhatever/>
        </div>
    )
}