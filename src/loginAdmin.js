import React,{useState} from"react";
import { redirect } from "react-router-dom";
import { Navigate } from "react-router-dom";
import axios from"axios";
function LoginAdmin(props)
{

  // document.getElementById("footer").style.display="none";
  // document.body.style.backgroundColor = "";

//  document.getElementById("bootloader").style.display="none";
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
   axios.post('http://gehadomar-001-site1.atempurl.com/Admin/AdminLogin', requestOptions)
       .then(response => response)
       .then(data => {if(data.status===200)
         props.handleUserData(data.data)
         props.handleLog();
         window.location.replace("/")
       })
       .catch(err=>{
         console.log(err)
       })
//empty dependency array means this effect will only run once (like componentDidMount in classes)
  e.preventDefault();
}
if(props.loggedIn==false)
  {return<div className="text-center"><main className="form-signin w-100 m-auto">
  <form onSubmit={handleSubmit} >
    <img className="mb-4" src="./images/icon.svg" alt="" width="72" height="57" />
<h1>Welcome Adminstrator</h1>
    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

    <div className="form-floating">
      <input type="email" onChange={handleChange} name="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
      <label htmlFor="floatingInput">Email address</label>
    </div>
    <div className="form-floating">
      <input type="password" className="form-control" onChange={handleChange} name="password" id="floatingPassword" placeholder="Password" />
      <label htmlFor="floatingPassword">Password</label>
    </div>
    <br/>
    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>

  </form>
</main>
</div>}
else
{
return <div class="white" > <h1> You Are Already LoggedIn</h1></div>
}
}
export default LoginAdmin;
