import React,{useState} from "react";
import Login from"./login.jsx";
import Signup from "./signup.jsx";
function Signin(props)
{
const [itemClass,setItemClass]=useState("");
const[itemClass2,setItemClass2]=useState("");
function add2()
{setItemClass("")
  setItemClass2("block");
}
function deleteItem2(){
  setItemClass2("")
}

function add()
{
  setItemClass("block");
}
function deleteItem(){
  setItemClass("")
}
  return <div className="margin"><a className="nav-a "  id="login" onClick={add}>  Login Or Sign Up</a>
  <a className="nav-a " href="Place-Ad"><button type="button" className="btn btn-primary btn-lg">Place your Ad</button> </a>
<Login a={itemClass} b={deleteItem} c={add2} handleUserData={props.handleUserData} handleLog={props.handleLog}/>
<Signup a={itemClass2} b={deleteItem2} handleUserData={props.handleUserData} handleLog={props.handleLog}/>
</div>
}export default Signin;
