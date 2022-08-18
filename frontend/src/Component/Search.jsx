import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Postcontext } from '../Context/contextapi'
import { getallpost} from '../Redux/action'
import "../Style/Home.css"
import Gif from './Gif'


const Search = () => {
  
  const { handleposttext} = useContext(Postcontext)
    const {POSTS} = useSelector((store)=>store)
    const [displaygif,setdisplaygif] = useState(false)
    const [data,setdata] = useState("")
    const [get,setget] = useState([])
   
    const dispatch = useDispatch()
    //console.log(POSTS.posts)

    const getdata = () => {
        dispatch(getallpost())
       
    }

    const handle =(payload) => {
      
        fetch(`http://localhost:3002/array`,{
            method: "POST",
            body:JSON.stringify(payload)
            ,
            headers: {
              "content-Type": "application/json"
            }
              
          
          }).then((res)=> res.json()).catch((err)=>{
            console.log(err)
          })

         dispatch(getallpost())
         
    }

  
    useEffect(()=>{
        getdata()
        setget(POSTS.posts)
    },[data])


  return (
   <>
   <div className="serachbox">

    <h3>Create Post</h3>

    <button className='cut'  onClick={()=>{
     
     window.location.reload()

   }}>×</button>
  <div className="border1"></div>

   <div className="searchbar">

  <input type="text" placeholder='Write Post..' value={data} onChange={(e)=>{

    setdata(e.target.value)

   }} />
  </div>
  <div className="addto_gif" 

  onClick={()=>{

     handleposttext(data)

    setdisplaygif(true)

  }}>

    <p>Add To Your Post GIF</p>

  </div>

   <button className='post_button' onClick={()=>{

           const payload = {
            name:data,
            status:false
           }

           handle(payload)

   }}>POST</button>
   <br />
     <div className="gifpopup">
      {
        
        (displaygif)?<Gif search_data={data}/>:""

      }
     </div>
   </div>
   </>
  )
}

export default Search