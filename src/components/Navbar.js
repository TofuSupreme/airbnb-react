import React from "react"
import airbnb from "./moreImages/airbnb.png";
export default function Navbar() {
  return (
    <nav>
      <img src={airbnb} alt="airbnb logo" className="nav--logo" />
    </nav>
  )
}
