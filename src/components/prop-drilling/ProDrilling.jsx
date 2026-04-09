import React from "react";

function ProDrilling() {
  const theme = "dark";
  return (
    <div style={{ border: "2px solid black", padding: "20px" }}>
      <h2> App Parent</h2>
      <ComponentA theme={theme} />
    </div>
  );
}

function ComponentA({ theme }) {
  return (
    <div style={{ border: "2px solid black", padding: "20px" }}>
      <h2> Component A</h2>
      <ComponentB theme={theme} />
    </div>
  );
}

function ComponentB({ theme }) {
   return (
    <div style={{ border: "2px solid black", padding: "20px" }}>
      <h2> Component B</h2>
      <ThemeComponent theme={theme} />
    </div>
  );
}

function ThemeComponent({ theme }) {
     return (
    <div style={{ border: "2px solid black", padding: "20px" }}>
      <h2> ThemeComponent</h2>
      <p>The current theme is : {theme}</p>
    </div>
  );
}

export default ProDrilling;
