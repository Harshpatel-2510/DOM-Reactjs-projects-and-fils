// Practical-1

// import React from 'react'
// import Men from './components/Men';
// import Women from './components/Women';

// const App = () => {

//   // const user1={
//   //   name:'Harsh',
//   //   age:'20',
//   //   gender:'Male'
//   // }
//   // const user2={
//   //   name:'Sakshi',
//   //   age:'19',
//   //   gender:'Female'
//   // }
//   // const user3={
//   //   name:'Nani',
//   //   age:'6',
//   //   gender:'Male'
//   // }

//   const age = 0

//   return (
//     <div>
//       {age >= 18 ? <Men />:<Women />}

//       {/* {user1.gender=='Male' ? user1.age>10? <Men />:<Women /> : <Women />} */}
//     </div>
//   )
// }

// export default App


// Practical-2

// import React from 'react'
// import Men from './components/Men';
// import Women from './components/Women';

// const App = () => {

//   const abc = () => {
//     console.log('Hello');
//   }

//   return (
//     <div>
//       <button
//       onClick={abc}
//       className='active:scale-95 bg-blue-300 text-white px-6 py-3 rounded font-bold m-2'
//       >Click to Downlode
//       </button>
//     </div>
//   )
// }

// export default App



// Practical-3

// import React from 'react'
// import Men from './components/Men';
// import Women from './components/Women';

// const App = () => {
//   return (
//     <div>
//       <Men />
//     </div>
//   )
// }

// export default App



// Practical-4

// import React, { useState } from 'react'

// const App = () => {

//   const [num, setnum] = useState(0)

//   return (
//     <div>
//       <h1>{num}</h1>
//       <button
//       onClick={()=>{
//         setnum(num+1)
//       }}
//       >Increase</button>
//       <button
//       onClick={()=>{
//         setnum(num-1)
//       }}
//       >Decrease</button>
//       <button
//       onClick={()=>{
//         setnum(num+5)
//       }}
//       >Jump by 5</button>
//     </div>
    
//   )
// }

// export default App




// Practical-5

// import React,{ useState } from 'react'

// const App = () => {

//   const [num, setnum] = useState(0)

//   return (
//     <div>
//       <div className='box'>
//       {num}
//       </div>
//       <button onClick={()=>{
//           const new_num = Math.floor(Math.random()*100)
//           setnum(new_num)
//       }}>Click here</button>
//     </div>
//   )
// }

// export default App



// Practical-6

// import React,{ useState } from 'react'

// const App = () => {

//   const [marks, setmarks] = useState([60, 50, 80, 8, 30])

//   function graceStudent(){
//     const newMarks = marks.map(function (elem){
//       if(elem>33){
//         return elem
//       }else{
//         return elem+5
//       }
//     })
//     setmarks(newMarks)
//   }

//   return (
//     <div>
//       <div>
//         {
//           marks.map(function (elem, idx){
//             return <h1 key={idx}>Student {idx + 1} = {elem} ({elem>33?'PASS':'FAIL'})</h1>
//           })
//         }
//       </div>
//       <button
//       onClick={graceStudent}
//       >Give them grace</button>
//     </div>
//   )
// }

// export default App




// Practical-7

import React,{ useState } from 'react'
import Men from './components/Men';
import Women from './components/Women';

const App = () => {

  const [Gender, setgender] = useState('Male')

  function changegender(){
    if(Gender == 'Male'){
      setgender('Female')
    }else{
      setgender('Male')
    }
  }

  return (
    <div className='parent'>
      <h1 className='labaled'>{Gender}</h1>
      <button onClick={changegender}>Change Gender</button>

      {Gender == 'Male'? <Men />:<Women />}  
    </div>
  )
}

export default App
