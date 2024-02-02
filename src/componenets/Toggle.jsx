import React from 'react'
import { useState } from 'react'

function Toggle({stats}) {
const[Toggle,setToggle]= useState("°C")
if(Toggle=="°F"){
  
}
  return (

    <div>
      <button onClick={setToggle}>${}</button>
    </div>
  )
}

export default Toggle
