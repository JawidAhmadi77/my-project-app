
// import Navbar from "./Components/Navbar";
import {logo} from "./assets/index"
import Navbar from "./Components/Navbar"
import styles, { layout } from "./Constants/Style"

import React from 'react'

export default function App() {
  return (
    <>
    <div className="w-full overflow-hidden text-white bg-primary">
      <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
         <Navbar/>
        
        </div>
      </div>

    </div>
    </>
  )
}
