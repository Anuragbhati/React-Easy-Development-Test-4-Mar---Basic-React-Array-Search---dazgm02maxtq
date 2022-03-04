import React from 'react'
import Search from './Search'

// import '../styles/App.css';


const searchArray = ["Newton", "School", "Newton School", "React", "Preact", "Node", "Mongoose", "Angular", "Vue", "Apple", "Microsoft", "Netflix", "Meta"]
const App = () => {

  
  return (
    <div id="main">
      <Search array={searchArray} ></Search>
    </div>
  )
}


export default App;
