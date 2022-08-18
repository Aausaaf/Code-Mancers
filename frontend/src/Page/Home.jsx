import React, { useState,useEffect } from 'react'
import "../Style/Home.css"
import Search from '../Component/Search'
import { useSelector,useDispatch } from 'react-redux'
import { getallpost } from '../Redux/action'
import Singlepost from '../Component/Singlepost'


const Home = () => {

   const [display,setdisplay] = useState(false)
   const [get,setget] = useState([])
   const {POSTS} = useSelector((store)=>store)
   const dispatch = useDispatch()
  
   const getdata = () => {
    dispatch(getallpost())
   
   }

  

   useEffect(()=>{

    getdata()
    
    setget(POSTS.posts)

},[])

 
  return (
    <>
   
    <div className="searchicon" onClick={()=>{

      setdisplay(true)

    }}>

       <p>Create Post...</p>

    </div>

    <div className="popup">

      {

        (display)?<Search/>:""

      }

    </div>

    <h2>All Post</h2>

    {

     POSTS.posts.map((ele)=>{

      return <>

       <Singlepost istext={ele.title} isurl={ele.url} isid={ele.id}/>

      </>

     })

    }
    
    </>

  )
}

export default Home