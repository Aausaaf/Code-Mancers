import axios from "axios"


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