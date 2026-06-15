import React,{useEffect, useState} from 'react'
import axios from 'axios'

const App = () => {

// ==> Practical_1 <==
  // const [count, setCount] = useState(0)

  // const [text, setText] = useState('')

  // useEffect(function(){
  //   console.log(' its running ');
    
  // },[count])

  // return (
  //   <div>
  //     <input
  //     className='border p-2'
  //     value={text}
  //     onChange={(e)=>{
  //       setText(e.target.value)
  //     }}  
  //     type="text" />

  //     <h1 className="font-bold text-black">{count}</h1>
  //     <button onClick={()=>{
  //     setCount(count+1)
  //     }} className='border p-2 bg-amber-200'>Increment</button>
  //   </div>
  // )




// ==> Practical_2 <==
  // const [number1, setNumber1] = useState(0)
  // const [number2, setNumber2] = useState(0)
  // const [number3, setNumber3] = useState(0)

  // useEffect(function(){
  //   console.log("Chal raha he...");
  // },[number1,number3])

  // return(
  //   <div>
  //     <h1
  //     className='font-bold text-2xl'
  //     >{number1}</h1>
  //     <button
  //     onClick={()=>{
  //       setNumber1(Math.floor(Math.random()*100))
  //     }}
  //     className='border p-2 bg-blue-400 text-xl'
  //     >For Number1</button>

  //     <h1
  //     className='font-bold text-2xl'
  //     >{number2}</h1>
  //     <button
  //     onClick={()=>{
  //       setNumber2(Math.floor(Math.random()*100))
  //     }}
  //     className='border p-2 bg-blue-400 text-xl'
  //     >For Number1</button>

  //     <h1
  //     className='font-bold text-2xl'
  //     >{number3}</h1>
  //     <button
  //     onClick={()=>{
  //       setNumber3(Math.floor(Math.random()*100))
  //     }}
  //     className='border p-2 bg-blue-400 text-xl'
  //     >For Number1</button>
  //   </div>
  // )



  // const [allPokemon, setAllPokemon] = useState([])

  const [Names, setNames] = useState('')
  const [count, setCount] = useState(0)

  const GetData = async ()=>{
    const response = await axios.get('https://randomuser.me/api/')

    setNames((response.data.results[0].name.first)+" "+(response.data.results[0].name.last))
    
  }

  useEffect(function(){
    GetData()      
  },[count])

  return(
    <div>
  
      {
        Names
      }
      <h1>{count}</h1>
      <button
      onClick={()=>{
        setCount(count+1)
      }}
      >Click here..</button>
      
    </div>
  )
}

export default App