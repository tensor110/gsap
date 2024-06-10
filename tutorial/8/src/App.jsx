import {useGSAP} from "@gsap/react"
import gsap from "gsap"
import React, { useRef } from 'react'

const App = () => {
  const gsapRef = useRef()

  const {contextSafe} = useGSAP()  //It helps in memory management

  useGSAP(()=>contextSafe(()=>{
    gsap.to(gsapRef.current,{
      x: 1000,
      duration: 2,
      delay: 1
    })
  }))
  // We can declre scope and dependencies after gsap for better usecase
  // In scope we declare the parent node 
  // In dependencies we declare the parameters 
  return (
    <main>
      <div ref={gsapRef} className="box"></div>
    </main>
  )
}

export default App
