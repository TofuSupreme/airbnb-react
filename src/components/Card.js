import React from "react";
import zaferes from "../images/zaferes.png";

export default function Card() {
  return (
    <section className="card">
      <img src={zaferes} alt="zaferes" className="card--image" />
      <p className="rating">
        <i className="fas fa-star"></i>
        5.0 (6) * USA <br></br>
        Life lessons with Katie Zaferes<br></br>
        <span className="card--price">From $136</span> / person
      </p>
    </section>
  )
}
