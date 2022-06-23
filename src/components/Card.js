import React from "react";
import star from '../images/star.png';
import zaferes from "../images/zaferes.png";

export default function Card() {
  return (
    <div className="card--container">
      <div className="card--image-container">
      <img src={zaferes} alt="zaferes" className="card--image--zaferes" />
      <button className="card--button--status"> SOLD OUT</button>
      <p className="card--rating">
      <img src={star} alt="star" className="card--image--star" />
        5.0
        <p className="card--rating--rates">
          (6) * USA
        </p>
        <br></br>
        <p className="card--rating--info">
          Life lessons with Katie Zaferes
        </p>
        <br></br>
        <span className="card--rating--price">From $136</span> / person
      </p>
      </div>
    </div>

  )
}
