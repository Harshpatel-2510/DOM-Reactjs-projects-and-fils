import React,{useEffect, useState} from 'react'
import axios from 'axios'
import User from './components/User';

const App = () => {


  const [allData, setAllData] = useState([])

  const getData = async () => {
    const useData = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(useData.data);
    
    setAllData(useData.data)
  }


  useEffect(function(){
    getData()
  },[])

  
  // async function getdata(){

  //   const respons = await axios.get('https://fakestoreapi.com/products')

  //   console.log(respons.data);
  // }

  return (
    <div>
      {/* <button onClick={getData}>Get Data</button> */}

      <div className='All-Card'>
        {
          allData.map(function(elem,idx){
            return <div key={idx}>
              <User elem={elem}/>
            </div> 
            // console.log(elem);
            
            // return <h2 key={idx}>{elem.name} {idx+1}</h2>
          })
        }
      </div>

      
    </div>
  )
}

export default App
