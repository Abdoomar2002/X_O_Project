import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Home';
import Category from "./categories";
import Product from "./product";
import Favorites from "./Favorites";
import MyAds from "./myAds.js";
import PLaceAd from "./placeAd.js";
import LoginAdmin from"./loginAdmin.js";
import Admin from "./adminResources.js";
import Paid from "./paid.js";
import Profile from "./profile.js"
import Search from"./search.js";
import Nav from "./comp/Nav.jsx";
import Footer from "./comp/footer.jsx";
import axios from "axios";
import useLocalStorage from"./useLocalStorage";
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);
// import reportWebVitals from './reportWebVitals';
function App(){
    const [loggedIn, setLoggedIn] = useLocalStorage('loggedIn', 'false');
    const [location,setLocation]=useLocalStorage("location","Egypt");
    const [userData,setUserData]=useLocalStorage("userData",{});
    const [hidden,setHidden]=useState({display:"block"});
    const [order,setOrder]=useLocalStorage("order",{});
    function handelOrder(e)
    {
      let url="url";
    let name:'name';
    let link=e.target.name;
    let head=e.target.innerText;
    console.log(e.target.name,e.target.innerText);
    setOrder(order=>({url:link,name:head}))

    }
    function handleUserData(data){
      setUserData(data);
    }
    function handleHidden()
    {
      if(hidden.display=="block")
      setHidden(data => ({ ...data, display: "none" }));
      else
      setHidden(data => ({ ...data, display: "block" }));
    }
    function handleLog()
    {
      if(loggedIn===true)
    {
      setUserData({});
    }
     setLoggedIn(!loggedIn);
     window.location.reload(false);
    }
    function handleLocation(e)
    {console.log(e.target.value);
      setLocation(e.target.value);
      axios.get("http://gehadomar-001-site1.atempurl.com/Product/FilterByLocation",localStorage.location)
     .then(res=>(res))
.then(data=>console.log(data.data))
    }
    return( <Router>
    <Nav handleLog={handleLog} loggedIn={loggedIn} location={location} handleLocation={handleLocation} handleUserData={handleUserData} userData={userData} />
    <Routes>
      <Route path="/" element={<Home current="home" />} />
      <Route path="/cars" element={<Category current="home" cat="Cars"loggedIn={loggedIn} handleLog={handleLog} />}/>
      <Route path="/Electronic" element={<Category current="home" cat="Electronic" loggedIn={loggedIn} handleLog={handleLog}/>}/>
      <Route path="/Furniture" element={<Category current="home" cat="Furniture" loggedIn={loggedIn} handleLog={handleLog} />}/>
      <Route path="/Property" element={<Category current="home"  cat="Property"loggedIn={loggedIn} handleLog={handleLog}/>}/>
      <Route path="/product" element ={<Product current="home" />}/>
      <Route path="/Favorites" element={<Favorites current="home"/>}/>
      <Route path="/Profile" element ={<Profile cuurent="home"  handleLog={handleLog}handelOrder={handelOrder} order={order} loggedIn={loggedIn} location={location} handleLocation={handleLocation} handleUserData={handleUserData} userData={userData}/>}/>
      <Route path="/My-Ads" element={<MyAds current="home"/>}/>
      <Route path="/Admin" element={<Admin current="home"handelOrder={handelOrder} order={order}  handleLog={handleLog}handelOrder={handelOrder} order={order} loggedIn={loggedIn} location={location} handleLocation={handleLocation} handleUserData={handleUserData} userData={userData}/>}/>
      <Route path="/Search" element={<Search current="home"/>}/>
      <Route path="/Place-Ad" element={<PLaceAd cuurent="home" handleLog={handleLog}handelOrder={handelOrder} order={order} loggedIn={loggedIn} location={location} handleLocation={handleLocation} handleUserData={handleUserData} userData={userData}/>}/>
      <Route path="/ADDADMINSTRATOR" element ={ <LoginAdmin handleUserData={handleUserData} handleLog={handleLog} loggedIn={loggedIn} handleHidden={handleHidden} />}/>
      <Route path="/Paid" element ={<Paid cuurent="home" handleLog={handleLog}handelOrder={handelOrder} order={order} loggedIn={loggedIn} location={location} handleLocation={handleLocation} handleUserData={handleUserData} userData={userData} />}/>
    </Routes>
    <hr/>
  <Footer />
</Router>);
}
  root.render(<App/>);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
