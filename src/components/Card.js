import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <img src={`${process.env.PUBLIC_URL}/assets/images/${props.img}`}  className="card--image" alt={props.img}/>
        {/* <button className="card--button--status"> SOLD OUT</button> */}
        <div className="card--stats">
          <img src={`${process.env.PUBLIC_URL}/assets/images/star.png`} alt="star" className="card--star" />
          <span> {props.rating} </span>
          <span className="gray"> ({props.reviewCount}) • </span>
          <span className="gray"> {props.country} </span>
        </div>
        <p className="card--title">
        {props.title}
        </p>
      <p className="card--price"> <span className="bold">From {props.price}</span>/ person
        </p>
    </div>

  )
}
