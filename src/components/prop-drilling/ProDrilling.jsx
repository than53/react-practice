import React, { createContext, useContext, useState } from "react";

const themeContext = createContext("light");

function ProDrilling() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <div>
      <GlobalComponenet />
      <themeContext.Provider value={theme}>
        <div style={{ border: "2px solid black", padding: "20px" }}>
          <h2> App Parent</h2>
          <button onClick={toggleTheme}>Toggle Theme: {theme}</button>
          <ComponentA />
        </div>
      </themeContext.Provider>
      <themeContext.Provider value="dark">
        <GlobalComponenet />
      </themeContext.Provider>
    </div>
  );
}

function ComponentA() {
  return (
    <div style={{ border: "2px solid black", padding: "20px" }}>
      <h2> Component A</h2>
      <ComponentB />
    </div>
  );
}

function ComponentB() {
  return (
    <div style={{ border: "2px solid black", padding: "20px" }}>
      <h2> Component B</h2>
      <ThemeComponent />
    </div>
  );
}

function ThemeComponent() {
  const theme = useContext(themeContext);
  return (
    <div style={{ border: "2px solid black", padding: "20px" }}>
      <h2> ThemeComponent</h2>
      <p>The current theme is : {theme}</p>
    </div>
  );
}

function GlobalComponenet() {
  const theme = useContext(themeContext);
  return (
    <div style={{ border: "2px solid black", padding: "20px" }}>
      <h2> Global Component</h2>
      <p>The current theme is : {theme}</p>
    </div>
  );
}

export default ProDrilling;
