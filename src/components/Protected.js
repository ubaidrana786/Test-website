import React from 'react'
import { Redirect } from 'react-router'
export default function Protected(props) {
   const Com = props.comp
    var auth = JSON.parse(localStorage.getItem("login user"))
    
    return (
    <div>
        { auth ?  <Com/> : <Redirect to= "Login"/>}
        </div>
    )
}
