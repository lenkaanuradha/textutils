import React, { useState } from "react";
import Textform from "./Textform";
import About from "./About";
import Main from "./Main";
import Alert from "./Alert";
import {Routes,Route} from 'react-router-dom'

export default function App() {
  const [btnText, setbtnText] = useState("EnableDarkMode");
  const [nvbclr,setNvbclr] = useState("light")
  const [mode, setMode] = useState(false);

  const handleEnableDark = () => {
    if (btnText === "EnableDarkMode") {
      setbtnText("DisableDarkMode");
      setNvbclr("dark")
      setMode(true);
      document.body.style.backgroundColor = "#042723";
      
      document.body.style.color = "white";
    } else {
      setbtnText("EnableDarkMode");
      setNvbclr("light")
      setMode(false);
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };
  return (
    <>
    <Main btntext={btnText} nvbclr={nvbclr} handleEnableDark={handleEnableDark}/>
    {mode && <Alert />}
    <Routes>
      <Route exact path='/' element={<Textform  />} />
      <Route  exact path='/about' element={<About />} />
    </Routes>
   
    </>
  )
}
