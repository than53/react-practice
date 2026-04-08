import React from "react";
import "./App.css";
import ProfileCard from "./components/react-practice-props/ProfileCard";
import UseStatePractice from "./components/react-practice-hooks/UseStatePractice";


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
    <div className="app-container">
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
      <UseStatePractice></UseStatePractice>
    </div>
  );
};

export default App;
