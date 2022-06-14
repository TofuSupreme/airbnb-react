import React from "react";
import groupImage from "../images/groupImage.png"
export default function Hero() {
  return (
    <div className="hero">
      <img src={groupImage} alt="groupImage" className="hero--image" />
      <h1>
        Online Experiences
      </h1>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.
      </p>
    </div>
  )
}
