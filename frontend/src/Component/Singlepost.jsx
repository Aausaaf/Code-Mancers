import React from 'react'
import "../Style/Home.css"
const Singlepost = (props) => {
  return (
    <div className="single_container">
    <p>{props.istext}</p>
    <img src={props.isurl} alt="" />
   </div>
  )
}

export default Singlepost