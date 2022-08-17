import { GET } from "./actiongif";


export const reducergif = (gif=[],{type,payload}) => {

   switch(type){
    case GET:{
        return {
            gif:[...payload]
        }
    }
    default :{
        return {
            gif
        }
    }
   }

}