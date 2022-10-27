import React,{useState} from "react";
import axios from"axios";
function Login(props)
{
  const [logData,setLogData]=useState({
  email:"",
  password:""
});
  function handleChange(e)
  {
    const { target: { name, value } } = e;
        setLogData(data => ({ ...data, [name]: value }));
  console.log(logData);
}
function handleSubmit(e)
{
  const requestOptions = logData;
   axios.post('http://gehadomar-001-site1.atempurl.com/Customer/Login', requestOptions)
       .then(response => response)
       .then(data => {if(data.status===200)
         props.handleUserData(data.data)
         props.handleLog();
       })
       .catch(err=>{
         console.log(err)
       })
// empty dependency array means this effect will only run once (like componentDidMount in classes)
  e.preventDefault();
}
return<div id="log" className={"modal "+ props.a}>

<form className="modal-content animate" onSubmit={handleSubmit}>
  <div className="imgcontainer">
    <span onClick={props.b} className="close" title="Close Modal">&times;</span>

  </div>

  <div className="container">
    <label ><b>Username</b></label>
    <input onChange={handleChange} type="email" name="email" placeholder="Enter Username"  required />

    <label ><b>Password</b></label>
    <input onChange={handleChange}type="password" placeholder="Enter Password" name="password" required />

    <button type="submit">Login</button>
    <h6>or</h6>
    <button type="button" id="SignUp" onClick={props.c}>Sign Up</button>
    <label>

    </label>
  </div>
</form>
</div>
}export default Login;
