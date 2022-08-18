import axios from "axios"

export const POST = "POST"

export const GET = "GET"

export const GETALLPOST  = "getallletesttodo"


export const post = (payload)=>({

    type:POST,
    payload

})
// Action creattor generally return object
export const gets = (payload)=>({

    type:GET,
    payload

})

//but this type of action creator generally return function

export const getallpost = () =>  (dispatch) => {

    axios.get("http://localhost:3002/array").then((res)=>{

        console.log(res.data)
       
        dispatch(gets(res.data))

    }).catch((err)=>{

        console.log(err)

    })
}

