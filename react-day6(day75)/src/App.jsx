import React, {useState} from 'react'
import Card from './components/Card';

const App = () => {

  const [userName, setUserName] = useState('')
  const [userRole, setUserRole] = useState('')
  const [userimage, setUserimage] = useState('')
  const [userdescription, setUserDescription] = useState('')

  const [allUser, setallUser] = useState([])

  const submit =(e)=>{
    e.preventDefault()

    setallUser([...allUser,{userName,userimage,userRole,userdescription}])

    // const oldUser = [...allUser]
    // oldUser.push({userName,userimage,userRole,userdescription})
    // console.log(oldUser);
    // setallUser(oldUser)

    setUserName('')
    setUserimage('')
    setUserRole('')
    setUserDescription('')
  }

  const deleteElement = (idx)=>{
    const copyUser = [...allUser]
    copyUser.splice(idx, 1)
    setallUser(copyUser)
  }

  return (
    <div className="h-screen bg-black text-white">
      <form onSubmit={(e)=>{
        submit(e)
      }}
      className="flex flex-wrap justify-center p-2" action="">

        <input
        value={userName}
        onChange={(e)=>{
          setUserName(e.target.value)
        }}
        type="text"
        className="border-2 font-semibold text-2xl px-5 py-2 rounded m-2 w-[48%]"
        placeholder="Enter your name"
        />

        <input
        value={userimage}
        onChange={(e)=>{
          setUserimage(e.target.value)
        }}
        type="text"
        className="border-2 font-semibold text-2xl px-5 py-2 rounded m-2 w-[48%]"
        placeholder="Image URL"
        />

        <input
        value={userRole}
        onChange={(e)=>{
          setUserRole(e.target.value)
        }}
        type="text"
        className="border-2 font-semibold text-2xl px-5 py-2 rounded m-2 w-[48%]"
        placeholder="Enter role"
        />

        <input
        value={userdescription}
        onChange={(e)=>{
          setUserDescription(e.target.value)
        }}
        type="text"
        className="border-2 font-semibold text-2xl px-5 py-2 rounded m-2 w-[48%]"
        placeholder="Enter description"
        />

        <button
        className="text-black bg-emerald-100 font-semibold text-2xl active:scale-95 cursor-pointer px-5 py-2 rounded m-2 w-[97%]">
        Create Now
        </button>
      </form>


      {/* ==> Without any use of Components file <== */}
      {/* <div className="px-4 py-10 gap-3 flex flex-wrap">
        {allUser.map(function(elem,idx){
          return <div key={idx} className='w-[23vw] py-8 px-8 rounded-xl text-center flex items-center flex-col bg-white text-black'>
            <img className="h-24 w-24 rounded-full object-center object-cover" src={elem.userimage} alt="" srcset="" />
            <h1 className='text-2xl mt-2 font-semibold'>{elem.userName}</h1>
            <h5 className='text-base text-blue-500 font-semibold my-3'>{elem.userRole}</h5>
            <p className='text-sm font-medium leading-tight'>{elem.userdescription}</p>
            <button onClick={()=>{
              deleteElement(idx)
            }} className='px-4 py-2 rounded active:scale-95 bg-red-500 text-white font-semibold mt-3'>Remove</button>
          </div>
        })}
      </div> */}


      {/* ==> useing Components file <== */}
      <div className="px-4 py-10 gap-3 flex flex-wrap">
        {allUser.map(function(elem,idx){
          return <Card key={idx} idx={idx} elem={elem} deleteElement={deleteElement} />
        })}
      </div>

    </div>
  )
}

export default App