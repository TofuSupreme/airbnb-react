import React from "react";
import star from "../images/star.png";
// import weddingPhoto from "../../public/images/weddingPhoto.png";
export default function Card(props) {
  return (
    <div className="card--container">
      <img className ="card--image" src={'src/images/' + props.img + '.png'} alt={props.img}/>
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
    </div>

  )
}
