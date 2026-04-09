import React from "react";
import { useState } from "react";
import "../color-picker-practice-project/ColorPicker.css"

function ColorPicker() {
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");

  const colors = [
    '#fe670f',
    '#f92720',
    '#d59399', 
    '#95c2df',
    '#b15051'
  ];

  const handleColorChange = (color)=>{

    setBackgroundColor(color)

  }

  return (
    <div className="App" style={{backgroundColor}}>
      <h1>Color Picker</h1>
      <div className="color-pallete">
        {colors.map((color, index) => (
          <div key={index} className="color-box"
          style={{backgroundColor:color}}
           onClick={()=>handleColorChange(color)}>
          </div>
        ))}
      </div>

      <div className="custuom-color-picker">
        <input type="color" value={backgroundColor} onChange={(e)=> handleColorChange(e.target.value)} />
      </div>
    </div>
  );
}

export default ColorPicker;
