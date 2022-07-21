import React from "react";
import star from "../images/star.png";
// import weddingPhoto from "../../public/images/weddingPhoto.png";
export default function Card(props) {
  return (
    <div className="card--container">
      <img className ="card--image" src={props.img} alt="zaferes" />
        {/* <button className="card--button--status"> SOLD OUT</button> */}
        <div className="card--stats">
          <img src={star} alt="star" className="card--star" />
          <span> {props.rating} </span>
          <span className="gray"> {props.reviewCount} • </span>
          <span className="gray"> {props.country} </span>
        </div>
        <p>
        {props.title}
        </p>
      <p> <span className="bold">From {props.price}</span>/ person
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
