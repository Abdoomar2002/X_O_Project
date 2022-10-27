import React,{useState} from "react";
function Logout(props)
{
  const text=props.userData.photo;
  const src='http://gehadomar-001-site1.atempurl.com/';
  const def="./images/images.png"
  const [image,setImages]=useState(src+text);
  function handelClick(){
    window.location.replace("/Profile");
  }
  return <div className="margin" >
  <img className="logout"onClick={handelClick}src={props.userData.photo!==null?image:def}></img>
  <h4 onClick={handelClick}>{props.userData.custName||props.userData.adminName||"no name"}</h4>
  <button className="btn btn-lg btn-danger" onClick={props.handleLog}>Logout</button>
  <a className="nav-a " href="Place-Ad"><button type="button" className="btn btn-primary btn-lg">Place your Ad</button> </a>
  </div>
}
export default Logout;
