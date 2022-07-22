import React from "react"
export default function Navbar() {
  return (
    <nav>
      <img src={`${process.env.PUBLIC_URL}/assets/images/airbnb.png`} alt="airbnb logo" className="nav--logo" />
    </nav>
  )
}
