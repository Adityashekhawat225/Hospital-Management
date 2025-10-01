import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          
          </p>
          <p>We are all in 2024!</p>
          <p>We are working on a MERN STACK PROJECT.</p>
          <p>
            This team of doctors is deeply committed to providing exceptional healthcare that combines compassion, expertise, and the latest medical advancements. Each doctor strives to understand patients’ unique needs and develop personalized treatment plans that promote overall wellness. Beyond treating illnesses, the focus is on preventive care, educating patients, and fostering long-term health. With years of experience across various medical fields, the team works collaboratively to ensure every patient receives thorough, attentive, and professional care in a supportive environment.
          </p>
        </div>
      </div>
    </>
  );
};

export default Biography;