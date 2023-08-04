
import './App.css';
import Navbar from './component/Navbar';
import Textfrom from './component/Textfrom';
// import About from './component/About';
import { useState } from 'react';
import Alert from './component/Alert';
import React from "react";
// import {
//   BrowserRouter,
//   Route,
//   Routes
// } from "react-router-dom";

function App() {
  const [mode,setmode]= useState('light');
  const [alert,setalert] = useState(null);

  const showalert= (message,type) =>{
        setalert({
          msg:message,
          type:type
        })
      setTimeout(()=>{
         setalert(null)
      },2000);
      }

const toggleMode = ()=>{
  if(mode==="light"){   
  setmode('dark');
  document.body.style.backgroundColor='#042743';
  showalert("Dark mode is enabled!!","success");
  // document.title="Textutil-DarkMode"
}
else{
  setmode('light');
  document.body.style.backgroundColor='white';
  showalert("Light mode is enabled!!","success");
  // document.title="Textutil-LightMode"
  
}
}

  return (
    <>
    {/* <BrowserRouter>
      <Navbar title="TextUtils" mode ={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
      
        <Routes>
          <Route exact path="/" element={<Textfrom heading = "Enter your text to analyse" mode ={mode} showAlert = {showalert}/>} />
          <Route exact path="about" element={<About />} />
        </Routes>
      </div>
      </BrowserRouter> */}


      <Navbar title="TextUtils" mode ={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
      
      
         <Textfrom heading = "Enter your text to analyse" mode ={mode} showAlert = {showalert}/>
         
     
      </div>
     
      </>
    );
}

export default App;
