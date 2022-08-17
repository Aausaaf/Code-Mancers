import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getallgif } from '../Redux/actiongif'
import { Postcontext } from '../Context/contextapi'
import { useNavigate } from 'react-router'
const Gif = (props) => {
    const {handleposturl} = useContext(Postcontext)
    const {GIF} = useSelector((store)=>store)
    const navigate= useNavigate()
    
    const dispatch = useDispatch()
   

    const getdata = () => {
        dispatch(getallgif(data))
       
    }
   
    const [data,setdata] = useState("")
    const [get,setget] = useState([])
    const [upload,setupload] = useState("")
    const [flg,setflg] = useState(false)
    const handleflg = () => {
      setTimeout(()=>{
        setflg(true)
      },1500)
    }
    useEffect(()=>{
        
       setget(GIF.gif)
       //console.log(GIF.gif)
    
    },[data])
    //console.log(upload)
    console.log(get)
  return (
   <>
     <div className="gif_box">
     <input className='serach_gif' placeholder='Search Gif' type="text" value={data} onChange={(e)=>{
    setdata(e.target.value)
   }} />
   <button className='gif_serach_button' onClick={()=>{
           const payload = {
            name:data,
            status:false
           }
           getdata() 
       handleflg()   
   }}>Search</button>
      <button className='cut'  onClick={()=>{
     
     window.location.reload()
   }}>×</button>
     {
    
   (flg)?<>{
     GIF.gif.map((ele)=>{
         return (<>
       <div className="div" onClick={()=>{
          setupload(ele.images.fixed_height_downsampled.url)
          let tem = {

            search_text:props.search_data,
            url:upload
          }
          handleposturl(ele.images.fixed_height_downsampled.url)
         navigate("/conform")
       }}>
       <img className='gif_img' src={ele.images.fixed_height_downsampled.url} alt="" />
       </div>
         </>)
            
     })}
   </> :""
  }
     </div>
   </>
  )
}

export default Gif