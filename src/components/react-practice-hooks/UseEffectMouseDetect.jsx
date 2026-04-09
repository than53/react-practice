import React, { useEffect, useState } from 'react'
import "../react-practice-hooks/UseEffectMouseDetect.css"


function UseEffectMouseDetect() {

    const [mousePosition, setMousePosition] = useState({x:0, y:0});

    useEffect(()=>{
        const handleMousePosition = (e)=>{
            setMousePosition({x:e.clientX, y:e.clientY})
        };
        window.addEventListener('mousemove', handleMousePosition)
          console.log("mouse move listener added")
        return ()=>{
            window.removeEventListener('mousemove', handleMousePosition)
           console.log("mouse move listener remove")
        }
    },[])

  return (
    <div>
        <h2>Mouse Position</h2>
        <p>X: {mousePosition.x}, Y: {mousePosition.y}</p>
    </div>
  )
}

export default UseEffectMouseDetect