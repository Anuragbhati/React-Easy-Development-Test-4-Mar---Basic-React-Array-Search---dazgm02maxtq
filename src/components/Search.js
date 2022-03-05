// import React, { createContext } from "react";
import { useEffect, useState } from "react";
// import { ReactDOM } from "react";

function Search() {
  const searchArray = [
    "Newton",
    "School",
    "React",
    "Newton School",
    "Preact",
    "Node",
    "Mongoose",
    "Angular",
    "Vue",
    "Apple",
    "Microsoft",
    "Netflix",
    "Meta",
  ];
  const [item, setItem] = useState(searchArray);
  const [data, setData] = useState("");
  //   useEffect(setItem(searchArray),[])
  const handleChange = (e) => {
    let data = e.target.value;
    setData(data);
    // console.log(data);
    // console.log(item);
    // console.log(props);
  };

  //   const dataFromArray = () => {
  //     ;
  //   };
  // useEffect((data)=>{
  //   if(data==null){
  //     return null  ;
  //   }
  // },[])

  return (
    <div>
      <h3>Search</h3>
      <form>
        <input type={"text"} onChange={handleChange}></input>
      </form>
      {item.map((content) => {
        if(data===""){
          return null;
      }else{ console.log(data)
        let contentItem = content.toLowerCase();
        return contentItem.includes(data) ? ( <ul><li>{content}</li> </ul> ) : null;;} })}
      {/* <p>{data}</p> */}
    </div>
  );
}

export default Search;
