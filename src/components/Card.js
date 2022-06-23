import React from "react";
import star from "../images/star.png";
import zaferes from "../images/zaferes.png";
import weddingPhoto from "../images/weddingPhoto.png";

export default function Card() {
  return (
    <div className="card--container">
      <img className ="card--image" src={zaferes} alt="zaferes" />
        <button className="card--button--status"> SOLD OUT</button>
        <div className="card--stats">
          <img src={star} alt="star" className="card--star" />
          <span> 5.0 </span>
          <span className="gray"> (6) • </span>
          <span className="gray"> USA </span>
        </div>
        <p> Life lessons with Katie Zaferes
        </p>
        <p> <span className="bold">From $136</span>/ person
        </p>

      {/* <img src={weddingPhoto} alt="weddingPhoto" className="card--image" />
      <button className="card--button--status"> SOLD OUT</button>
      <div className="card--stats">
        <img src={star} alt="star" className="card--image--star" />
        <span> 5.0 </span>
        <span> (30) • </span>
        <span> USA </span>

        <p className="card--rating--info">
          Learn wedding photography
        </p>
        <p>
          <span className="card--rating--price"> From $125</span>
        / person</p>
      </div> */}
    </div>

  )
}
