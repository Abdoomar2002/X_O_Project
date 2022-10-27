import React,{useState} from "react";
import axios from "axios";
import useLocalStorage from"./useLocalStorage";
function Profile(props){
  const text=props.userData.photo;
  const src='http://gehadomar-001-site1.atempurl.com/';
  const def="./images/images.png";
  const [image,setImages]=useState(src+text);
  const [check,setCheck]=useState(props.userData.adminId?true:false);
  const [loggedIn, setLoggedIn] = useLocalStorage('loggedIn', 'false');
  const [data,setData]=useState(props.userData);

function handleBtn(e)
{


props.handelOrder(e);
window.location.replace("/Admin");
e.preventDefault();
}

function adminData()
{
  return <div className="admin-button">
  <h1>Admin acsess </h1>
  <br/>
 <button className="btn btn-primary admin "onClick={handleBtn} name="/Admin/GetAllBills">  All Bills</button>
 <button className="btn btn-primary admin "onClick={handleBtn} name="/Admin/Profit"> Profit</button>
 <button className="btn btn-primary admin "onClick={handleBtn} name="/Admin/GetAllAdmins">  All Admins</button>
 <button className="btn btn-primary admin "onClick={handleBtn} name="/Admin/GetAllCustomer">  All customer</button>
 <button className="btn btn-primary admin "onClick={handleBtn} name="/Report/GetAllReport">  All report</button>
 <br/>
  </div>
}
function handleDelete()
{
  let x=prompt("if you are sure write yes ");
  if(x=="yes")
  {
    console.log("fine");
  }
}
  function handleSubmit(e)
  {
    axios.put("http://gehadomar-001-site1.atempurl.com/Customer/UpdateCustomer‏?Id="+props.userData.CustId,data)
    .then(response=>console.log(response))
    e.preventDefault();
  }
  return(<div>
    {check? adminData():    <form className="user" onSubmit={handleSubmit}>
         <div className="profile">
          <h1>
            My Profile
          </h1>
          <div className="profile-data">
          <h2 >{props.userData.custName||props.userData.adminName||"no name"}</h2>

           <div className="data-item">
           <img className="user-image" src={props.userData.photo!==null?image:def}></img>
           <p>
           <button className="btn btn-primary user-data" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample6" aria-expanded="false" aria-controls="collapseExample">
       Edit photo
     </button>
    </p>
    <div className="collapse" id="collapseExample6">
     <div className="card card-body">
     <label htmlFor="Username">Edit Photo</label>
     <input type="file" accept="image/jpeg" className="btn btn-image btn-primary" placeholder="Edit photo" />
     <button type="submit" className="btn btn-success"> save</button>
     </div>
    </div>
           <h3>
           Profile Photo
           </h3>
           </div>
           <hr/>
           <div className="info">
           <h3>Account Info</h3>
           <br/>
           <p>
           Tap the data you want to change
           </p>
           <div className="data-item">
           <p>
           <button className="btn btn-primary user-data" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample">
       name  :<strong> {props.userData.custName||props.userData.adminName||"no name"}</strong>
     </button>
    </p>
    <div className="collapse" id="collapseExample1">
     <div className="card card-body">
     <label htmlFor="Username">user Name</label>
     <input type="text" name="name" id="Username"/>
     <button type="submit" className="btn btn-success"> save</button>
     </div>
    </div>

           </div>
           <div className="data-item">
           <p>
           <button className="btn btn-primary user-data" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample5" aria-expanded="false" aria-controls="collapseExample">
           Phone  :<strong> {props.userData.phone||"01XXXXXXXXX"}</strong>
           </button>
           </p>
           <div className="collapse" id="collapseExample5">
           <div className="card card-body">
           <label htmlFor="Phone">Phone</label>
           <input type="number" name="name" id="Phone" />
           <button type="submit" className="btn btn-success"> save</button>
           </div>
           </div>
           </div>
           <div className="data-item">
           <p>
           <button className="btn btn-primary user-data" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample">
    email  :<strong> {props.userData.email||"name@somewhere.com"}</strong>
    </button>
    </p>
    <div className="collapse" id="collapseExample2">
     <div className="card card-body">
     <label htmlFor="email">email</label>
     <input type="email" name="email" id="email"/>
     <button type="submit" className="btn btn-success"> save</button> </div>
    </div>
           </div>
           <div className="data-item">
           <p>
           <button className="btn btn-primary user-data" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample">
    password  :<strong> {props.userData.password||"********"}</strong>
    </button>
    </p>
    <div className="collapse" id="collapseExample3">
     <div className="card card-body">
     <label htmlFor="oldpassword">old password</label>
     <input type="password" name="name" id="oldpassword"/>
     <label htmlFor="newpassword">new password</label>
     <input type="password" name="name" id="newpassword"/>
     <button type="submit" className="btn btn-success"> save</button> </div>
    </div>
           </div><div className="data-item">
           <p>
           <button className="btn btn-primary user-data" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample4" aria-expanded="false" aria-controls="collapseExample">
    Description
    :<strong> {props.userData.description||"any thing about yourself"}</strong> </button>
    </p>
    <div className="collapse" id="collapseExample4">
     <div className="card card-body">
     <label htmlFor="description">description</label>
     <textarea type="text" name="name" id="description"/>
     <button type="submit" className="btn btn-success"> save</button> </div>
    </div>
           </div>
           </div>
           <button className="btn btn-danger" onClick={handleDelete}>Delete Account</button>
          </div>
         </div>
         </form>}
</div>
)
}
export default Profile;
