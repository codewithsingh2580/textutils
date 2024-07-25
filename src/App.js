// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Form  from './components/Form';
import React,{useState} from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter,
//   Route,
//   Routes,
// } from "react-router-dom";


function App(){
  const [mode,setMode] = useState('light')
  const [alert,setAlert] = useState(null)

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() =>{
      setAlert(null)
    },3000)
  }

  const togglemode = () =>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#26135d'
      showAlert("Dark mode has been enabled","success")
      document.title = "TextUtial - Dark mode"
      
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
     showAlert("Light mode has been enabled","warning")
     document.title = "TextUtial - Light mode"
    }
  }
  return (
    <>
    {/* <BrowserRouter> */}
    <Navbar title="textUtils" mode={mode} togglemode={togglemode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
         <Form showAlert={showAlert}heading="Enter your text analyzed below "mode={mode}/>
    {/* <Routes> */}
        {/* <Route path="/components/Form" element={<Form />}/>
        <Route path="/about" element={<About />} /> */}
      {/* </Routes> */}
     </div>
     {/* </BrowserRouter> */}
   </>
  );
}

export default App;
