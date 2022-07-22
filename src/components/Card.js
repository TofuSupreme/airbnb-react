import React from "react";

export default function Card(props) {
  return (
    <div className="card--container">
      <img className="card--image" img src={`${process.env.PUBLIC_URL}/assets/images/${props.img}`}  alt={props.img}/>
        {/* <button className="card--button--status"> SOLD OUT</button> */}
        <div className="card--stats">
          <img src={`${process.env.PUBLIC_URL}/assets/images/star.png`} alt="star" className="card--star" />
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
