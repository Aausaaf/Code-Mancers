import axios from "axios"

import { getallpost } from "./action"

export const GET = "GET"

// Action creattor generally return object

export const gets = (payload)=>({

    type:GET,
    payload

})

export const GETALLGIF  = "getallletestGIF"

export const getallgif = (data) =>  (dispatch) => {

    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=I39RR0U83Jb5GiBRR3ToDq92nUXYC0Tn&q=${data}&limit=25&offset=0&rating=g&lang=en`).then((res)=>{
      
        console.log(res.data.data)
       
        dispatch(gets(res.data.data))

    }).catch((err)=>{

        console.log(err)

    })
}

export const postupoload = (payload) => (dispatch)=>{

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
          
        }}).catch((err)=>{

            console.log(err)

          })
    
         dispatch(getallpost())
        
         
    }
    handle(payload)
}


export const deletepost = (data) =>  (dispatch) => {

    axios.delete(`http://localhost:3002/array/${data}`).then((res)=>{
       
       dispatch(getallpost())

    }).catch((err)=>{

        console.log(err)

    })
}