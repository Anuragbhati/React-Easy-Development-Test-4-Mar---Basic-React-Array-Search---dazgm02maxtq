import React from 'react'
import {useState} from 'react'

function Search(props) {
    const [item, setItem]=useState([])
    const [data,setData]=useState("")
const handleChange=(e)=>{
   let data=e.target.value;
   setData()
   console.log(data)
}
  setItem([props.array]);


  return (
    <div>
        <h3>Search</h3>
        <form>
            <input type={"text"} onChange={handleChange}></input>
        </form>
        {
         item.map((res)=>{
             return !data?null:<ol><li>{}</li></ol> 
         })
        }
    </div>
  )
}

export default Search;
