import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
export const  Postcontext = createContext() 

export function Postcontexts({children}){
  const [istext,settext] = useState("")
  const [isurl,seturl] = useState("")


  function handleposttext(t)
  {
      settext(t)
  }
  function handleposturl(t)
  {
      seturl(t)
  }
  return (<>

   <Postcontext.Provider value={{istext,handleposttext,isurl,handleposturl}}>

       {children}

   </Postcontext.Provider>
   
  </>)
}
