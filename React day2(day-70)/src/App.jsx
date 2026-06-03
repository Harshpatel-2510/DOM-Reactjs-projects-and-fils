import React from 'react'
import Card from './assets/Card';
// import Button from './assets/Button';

const App = () => {

  const users = ['Harsh', 'Neel', 'Het', 'Nali ka kida']

  return (
    <div className='p-10 h-screen text-white bg-black'>
      { 
        users.map(function(elem){
          return <Card user={elem} />
      })}
    </div>
  )
}

export default App
