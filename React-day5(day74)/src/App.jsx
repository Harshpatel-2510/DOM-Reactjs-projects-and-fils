// Practical-1 ==> Two way binding && Form hendling

import React,{ useState } from 'react'

const App = () => {
  
  // submit karne par page reload na ho oske liye
  const submitHandler = (e)=>{
    e.preventDefault()
    console.log('Form submited');
  }

  const [username, setUsername] = useState('')

  return (

    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input
        type="text"
        placeholder='Enter name'
        value={username}
        onChange={(e)=>{
          setUsername(e.target.value)
        }}

        // onChange={(e)=>{                              // aap jo bhi change karege wo F12 se 'console' me dhikhe ga
        //   console.log(e.target.value);
        // }}

        // value='aha' //value fix ho jayegi or aap usme kuch bhi change nahi kar pavo ge
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App