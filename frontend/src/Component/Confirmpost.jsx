import React, { useContext } from 'react'
import { Postcontext } from '../Context/contextapi'
import { useDispatch } from 'react-redux'
import "../Style/Home.css"
import {  getallpost} from '../Redux/action'
import {useNavigate } from 'react-router'


const Conformpost = () => {
  const {istext,isurl} = useContext(Postcontext)
  const dispatch = useDispatch()
  const Navigate = useNavigate()
  const handle =(payload) => {

    fetch(`http://localhost:3002/array`,{
        method: "POST",
        body:JSON.stringify(payload)
        ,
        headers: {
          "content-Type": "application/json"
        }
          
      
      }).then((res)=>{

       res.json()

      if(res)
    {
      alert("Post Successfully Created Please Go See it in Home page")

      Navigate("/")

    }}).catch((err)=>{

        console.log(err)

      })

     dispatch(getallpost())
     
}
  return (
   <>
   <div className="confirm_container">

    <p>{istext}</p>

    <img src={isurl} alt="" />

   </div>
   <button onClick={()=>{

       const payload = {
        title:istext,
        url:isurl
       } 

       handle(payload) 

   }} className='confirm_button'>Confirm Post</button>
   </>
  )
}

export default Conformpost