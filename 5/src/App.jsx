// import { useState } from 'react'

// import { useState } from "react"

 
// function App() {
//   let [drop, setDrop] = useState(false)

//   return (
//     <>
//       <button onClick={()=>setDrop(!drop)}>Click</button>
//      {drop &&
//       <div className="bg-teal-500">
//       <ul>
//         <li>Home</li>
//         <li>Home</li>
//         <li>Home</li>
//       </ul>
//     </div>

//      }
//     </>
//   )
// }

// export default App

// userf

// import { useRef } from 'react'
 
 
// function App() {
//   let  dropRef = useRef(null)
// let handleDrop=()=>{
//   // console.log(dropRef)
//   dropRef.current.style.display="block"
//   if(dropRef.current.style.display == "block"){
//     dropRef.current.style.display="none"

//   }
//   else{
//     dropRef.current.style.display="block"
//   }
// }
//   return (
//     <>
//       <button onClick={handleDrop} > Click
//    /

//       </button>
     
//       <div className="bg-teal-500" ref={dropRef}>
//       <ul>
//         <li>Home</li>
//         <li>Home</li>
//         <li>Home</li>
//       </ul>
//     </div>

     
//     </>
//   )
// }

// export default App

import { useState } from "react"
function App(){
  
let [all,setAll]=useState([])
return(
  <>
  <select>
<option value=''>your country</option>
<option value=''>usa </option>
<option value=' '>uk</option>

  </select>
  
  </>
  )
}
  export default App