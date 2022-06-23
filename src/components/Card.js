import React from "react";
import star from "../images/star.png";
import zaferes from "../images/zaferes.png";
import weddingPhoto from "../images/weddingPhoto.png";

export default function Card() {
  return (
    <div className="card--container">
      <div className="card--image--container">
      <img className ="card--image" src={zaferes} alt="zaferes" />
        <button className="card--button--status"> SOLD OUT</button>
        <div className="card--stats">
        <img src={star} alt="star" className="card--image--star" />
        <span> 5.0 </span>
          <span>(6) • </span>
          <span> USA </span>
        </div>
        <p className="card--rating--info">
          Life lessons with Katie Zaferes
        </p>
        <span className="card--rating--price">From $136</span> / person
      <img src={weddingPhoto} alt="weddingPhoto" className="card--image" />
      <button className="card--button--status"> SOLD OUT</button>
      <p className="card--rating">
        <img src={star} alt="star" className="card--image--star" />
          5.0
          <span className="card--rating--rates"> (30) * USA </span>
        <p className="card--rating--info">
          Learn wedding photography
        </p>
        <span className="card--rating--price">From $125</span> / person
        </p>
      </div>
    </div>

  )
}
