import React from "react";
import "../react-practice-props/ProfileCard.css";
const ProfileCard = ({ name, age, isMember, hobbies, onHobbyClicked }) => {
  return (
    <div className="card-container">
      <h3>Name:{name} </h3>
      <h3>Age: {age}</h3>
      <h3>Age: {isMember ? "Active Member" : "Guest"}</h3>
      <h3>
        <ul>
          {hobbies.map((hobby, index) => (
            <li key={index} onClick={() => onHobbyClicked(hobby)}>
              {hobby}
            </li>
          ))}
        </ul>
      </h3>
    </div>
  );
};

ProfileCard.propTypes;

export default ProfileCard;
