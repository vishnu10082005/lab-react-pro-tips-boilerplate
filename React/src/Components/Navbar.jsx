import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to={"/Home"}>
        <img src="https://yt3.googleusercontent.com/V284HyHaLxisGi-7Ew7E2hdaLwwWLp47oDaF_SAKHXYCMkusoCWGTLOFOcmEnLGAHhv1j9WNPQ=s900-c-k-c0x00ffffff-no-rj" alt="" /></Link>
      <div className="main">
        <Link style={{ textDecoration: "none", color: "black" }} to={"/Home"}>
          <h3>Home</h3></Link>
        <Link style={{ textDecoration: "none", color: "black" }} to={"/about"}>
          <h3>About</h3></Link>
        <Link style={{ textDecoration: "none", color: "black" }} to={"/Contact"}>
          <h3>Contact</h3></Link>
        <Link style={{ textDecoration: "none", color: "black" }} to={"/Form"}>
          <h3>Form</h3></Link>

      </div>
    </div>
  )
}

export default Navbar
