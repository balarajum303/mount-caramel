import React from 'react'
import "./login.css"

function Firstpage() {
    
    setTimeout(function() {
        window.location.replace("/login");
      },5000);
  return (
    <div className="firstpage">
        <p>Login page will be redirected in<span id="countdowntimer"> 5</span> seconds</p>
        
    </div>
  )
}

export default Firstpage