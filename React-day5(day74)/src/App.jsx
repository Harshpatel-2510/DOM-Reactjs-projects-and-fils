// Practical-1 ==> Two way binding && Form hendling 

import React,{ useState } from 'react'

const App = () => {

  const [username, setUsername] = useState('')

  const [allUser, setallUser] = useState([])

  // submit karne par page reload na ho oske liye
  const submitHandler = (e)=>{
    e.preventDefault()
    // console.log(username);        // input box ma je pan text hase te react ma jatu reje

    const newAllUsers = [...allUser]          //  {title, email}
    newAllUsers.push(username)
    
    console.log(newAllUsers)
    
    setallUser(newAllUsers)

    setUsername('')        // submit thay pachi input box khali thay jase
  }

  

  return (

    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input
        type="text"
        placeholder='Enter name'
        value={username}
        required
        onChange={(e)=>{
          setUsername(e.target.value)
        }}

        // onChange={(e)=>{                              // aap jo bhi change karege wo F12 se 'console' me dhikhe ga
        //   console.log(e.target.value);
        // }}

        // value='aha'      //value fix ho jayegi or aap usme kuch bhi change nahi kar pavo ge
        />
        <button>Submit</button>
      </form>

      {
        allUser.map(function(elem,idx){
          return <h4 key={idx}>{elem}</h4>
        })
      }
    </div>
  )
}

export default App