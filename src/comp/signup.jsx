import React,{useState,useEffect} from "react";
import axios from"axios";
function Signup(props)
{
  const [signupData,setSignupData]=useState({
    "custName": "",
    "email": "",
    "password":"",
    "photo": null,
    "phone": 0,
    "description": ""
});
const[file,setFile]=useState();

  function handleSubmit(e)
  {

    // POST request using fetch inside useEffect React hook

    var b=signupData.photo;
     const formData = new FormData();
    formData.append('files', b);
    formData.append('name',"abcd");
   console.log(formData);
   if (b!==null)
   {axios.post("http://gehadomar-001-site1.atempurl.com/Product/AddImages",formData)
     .then(response => response)
     .then(data => signupData.photo=data.data[0])
     .catch(err=>{
       console.log(err)})}

const requestOptions = signupData;
//
//
 console.log(requestOptions);
     axios.post('http://gehadomar-001-site1.atempurl.com/Customer/AddCustomer', requestOptions)
         .then(response => response)
         .then(data => {if(data.status===200){
           props.handleUserData(requestOptions)
           props.handleLog();

         }
         })
         .catch(err=>{
           console.log(err)
         })
// empty dependency array means this effect will only run once (like componentDidMount in classes)
    e.preventDefault();
  }
  function handleChange(e)
  {
    const { target: { name, value } } = e;
        setSignupData(data => ({ ...data, [name]: value }));
  console.log(signupData);
} function handlefile(e){
  const d=e.target.files[0];
  setSignupData(value=>({
    ...value,
    photo:d
  }))}
  return(<div id="sign" className={"modal "+props.a}>

    <form className="modal-content animate"onSubmit={handleSubmit} action="" >
      <div className="imgcontainer">
        <span onClick={props.b} className="close" title="Close Modal">&times;</span>
        <p>Add photo</p>
<div className="custom__image-container">
 <label id="add-img-label" >+</label>
 <input type="file" name="photo" onChange={handlefile} id="add-single-img" accept="image/jpeg" />
</div>
</div>
        <div className="container">
        <label ><b>Username</b></label>
        <input type="text" onChange={handleChange} value={signupData.custName} placeholder="Enter Username" name="custName" required />
        <label ><b>email</b></label>
        <input type="email" onChange={handleChange}value={signupData.email} placeholder="Enter email" name="email" required />
        <label ><b>phone number</b></label>
        <input type="number" onChange={handleChange} name="phone" value={signupData.phone}placeholder="Enter Phone Num" required />
        <label><b>Password</b></label>
        <input type="password" onChange={handleChange} placeholder="Enter Password"value={signupData.password} name="password" required />
        <label><b>Describtion</b></label>
        <textarea name="description"onChange={handleChange} rows="3"value={signupData.description} placeholder="describe yourself"></textarea>
        <button type="submit" id="SignUp2">Sign Up</button>
      </div>

  <div className="container" style={{backgroundColor:"#f1f1f1"}}>
    <button type="button" onClick={props.b} className="cancelbtn">Cancel</button>
  </div>
</form>
</div>)
}
export default Signup;
