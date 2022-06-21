import React from "react";
import { zaferes } from "../images/zaferes.png";

export default function Card() {
  return (
    <section className="card">
      <img src={zaferes} alt="zaferes" className="card--image" />
    </section>
  )
}
