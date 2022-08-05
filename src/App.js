import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import { useState } from 'react';
import Alert from './Components/Alert';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes
  } from "react-router-dom";

function App() {

    const [mode, setMode] = useState('light');
    let oppMode;

    if(mode === "light"){
        oppMode = "dark";
    }
    else{
        oppMode = "light";
    }

    const toggleMode = () =>{
        if(mode === "light"){
            setMode("dark");
            document.body.style.backgroundColor = "black";
            document.body.style.color = "white";
            showAlert("Dark Mode has been enabled","success");
            // changeMode()
        }
        else{
            setMode("light");
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
            showAlert("Light Mode has been enabled","success");
        }
    }

    const [alert, setAlert] = useState(null);

    const showAlert = (message,type) =>{
        setAlert({
            msg: message,
            type: type
        })

        setTimeout(()=>{
            setAlert(null);
        },1600)
    }


  return (
    <>
    <Router>
    <Navbar mode={mode} oppMode={oppMode} toggleMode={toggleMode} />
    <Alert alert = {alert}/>
    <Routes>
        <Route exact path="/" element={<TextForm showAlert={showAlert} mode={mode} oppMode={oppMode} heading="Enter the text to analyse"/>} />
        <Route exact path="about/*" element={<About mode={mode} />} />
      </Routes>
    </Router>
    {/* <TextForm showAlert={showAlert} mode={mode} oppMode={oppMode} heading="Enter the text to analyse"/>; */}
    </>
  );
}

export default App;
