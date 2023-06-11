import React, {useState} from "react";

export default function Textform() {

    const [text,setText]=useState("Enter Text Here")
     const handleChange=(e)=>{
         setText(e.target.value)
     }
     const handleUpClick=()=>{
        setText(text.toUpperCase())
    }
     const handleLwClick=()=>{
        
        setText(text.toLowerCase())

     }
     const handleReset = () =>{
      setText("")
     }
     
     return (
     <>
     <div className="container-fluid my-1">
      <div className="mb-3">
       
        <textarea
          className="form-control shadow-sm"
          id="exampleFormControlTextarea1"
          rows="7"
          
          onChange={handleChange}
          value={text}
        ></textarea>
      </div>
     
      <button className="btn btn-danger p-2 mx-1 my-1" onClick={handleReset}>Reset</button>
     
      <button className={`btn btn-primary p-2 mx-1 my-1`} onClick={handleUpClick} >Convert to UpperCase</button>
      <button className={`btn btn-primary p-2 mx-1 my-1`} onClick={handleLwClick} >Convert to LowerCase</button>
      
      </div>
      <p className="mx-3 my-2"> {text.length} characters and  {text.split(" ").filter((element)=>{return element.length!==0}).length} words</p>
      <p className="mx-3 my-2"> { 0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
      
    </>
  );
}
