import React,{useState} from "react";
 import { Link } from "react-router-dom";
import Logout from "./logout.jsx";
import Signin from"./signin.jsx";

function Nav(props)
{

  return(
    <div id="navigtion">
   <nav className="navbar navbar-expand-lg ">
     <div className="container-fluid">
       <img src="./images/icon.svg" className ="logo" onClick={props.handleLog}></img>
       <Link className="navbar-brand" to="/">Brand</Link>
         <select value={props.location} name="cars" id="cars"className ="location" onChange={props.handleLocation} >
           <option className="active">Egypt</option>
      <option>Assuit</option>
      <option >Minya</option>
      <option >Cairo</option>
      <option >Sohag</option>
     </select>
       <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
       </button>
       <div className="navbar-collapse collapse" id="navbarNav">
         <ul className="nav justify-content-end">
           <li className="nav-item">
             <Link to="Favorites">
                <i className="fa-sharp fa-solid fa-heart "></i>
             <Link className="nav-Link active" aria-current="page" to="Favorites">Favorites</Link>
             </Link>
           </li>
           <li className="nav-item">
             <Link to="My-Ads">
                <i className="fa-solid fa-list "></i>
           <Link className="nav-Link" to="My-Ads">My_Ads</Link>
           </Link>
           </li>
         </ul>

         {
           props.loggedIn ? <Logout handleLog ={props.handleLog} handleUserData={props.handleUserData} userData={props.userData}/> : <Signin handleUserData={props.handleUserData} handleLog={props.handleLog} />
         }
       </div>
     </div>
   </nav>
 </div>)
}
export default Nav;
