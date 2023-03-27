import logo from './logo.svg';
import './App.css';
import {useState,useEffect,useRef} from "react";
import axios from "axios";
function App() {
  const [testing,SetTesting]=useState('');
  const [click,setClick]=useState(false);
  const initialRender=useRef(false);
    useEffect(()=>{
     
        console.log("this");
        axios.get("http://localhost:8000/").then(
          (res)=>{
            SetTesting(res.data);
          }
        )
        .catch((err)=>{
          console.log(err);
        })
       
    },[testing])

  return (
    <div className="App">
    <h1> This {testing}</h1>
    <button onClick={()=>{
      setClick(true);
    }}>Do</button>
    </div>
  );
}

export default App;
