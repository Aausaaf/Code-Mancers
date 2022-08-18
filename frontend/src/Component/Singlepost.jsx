import React from 'react'
import "../Style/Home.css"
import { useDispatch } from 'react-redux'
import { deletepost } from '../Redux/actiongif'


const Singlepost = (props) => {

  const displatch = useDispatch()


  return (

    <div key={props.isid} className="single_container">

    <p>{props.istext}</p>

    <img src={props.isurl} alt="" />

    <button className='delete_post_button' onClick={()=>{

      displatch(deletepost(props.isid)) 

      window.location.reload()

      }}>×</button>
   </div>
  )
}

export default Singlepost