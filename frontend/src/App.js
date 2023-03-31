import logo from './logo.svg';
import login from "./login.png"
import './App.css';
import {useState,useEffect,useRef} from "react";
import { sing } from './service/firebase';
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
   <img src={login} style={{
    height:"200px",
    position:"relative",
    top:"18vh"
   }}/>
    <button onClick={sing} style={{
      position:'relative',
      top:'24vh',
      right:'8vw'
    }}><b>Login</b></button>
    </div>
  );
}

export default App;
