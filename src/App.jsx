import React from "react";
import "./App.css";
import ProfileCard from "./components/react-practice-props/ProfileCard";

const App = () => {
  const handleHobbyClick = (hobby) => {
    alert(`You clicked on: ${hobby}`);
  };

   const aliceProfile={   name:"Alice",
        age:"26",
        isMember:true,
        hobbies:["Hiking", "Cleaning"],
        onHobbyClicked:handleHobbyClick
   }

      const johnProfile={   name:"Jogn",
        age:"26",
        isMember:false,
        hobbies:["Reading", "Coding"],
        onHobbyClicked:handleHobbyClick
   }

  return (
    <div className="App">
      {/*  React Portfolio Practice Component*/}
      {/* <Header />
    <About/>
    <Projectlist/>
    <Contact/>
    <Footer />  */}

      {/* React props practice */}

      {/* <ProfileCard {...aliceProfile}
      />
      <ProfileCard {...johnProfile}
      /> */}
    </div>
  );
};

export default App;
