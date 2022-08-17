import { GET, POST } from "./action";


export const postsreducer = (posts=[],{type,payload}) => {
    switch(type){
        case POST:{
            return{
             posts:[...payload]
            }
        }
        case GET:{
            return{
             posts:[...payload]
            }
        }
        default:{
          return{
        posts
          }
        }
    }
}