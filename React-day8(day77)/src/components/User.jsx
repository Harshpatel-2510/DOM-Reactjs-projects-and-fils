import React from 'react'

const User = (props) => {

    const col1 = Math.floor(Math.random()*256)
    const col2 = Math.floor(Math.random()*256)
    const col3 = Math.floor(Math.random()*256)

  return (
    <div style={{backgroundColor:`rgb(${col1},${col2},${col3})`}} className="card">
        <h2>{props.elem.name}</h2>
    </div>
  )
}

export default User