import React,{useState} from "react";
import useLocalStorage from"./useLocalStorage";
import axios from "axios";
function Admin(props)
{
  const [check,setCheck]=useState(props.userData.adminId?true:false);
  const [data,setData]=useLocalStorage("info",{})
  const [count,setCount]=useState(0);
  const [all,setAll]=useState(true)
function api(){
  if(props.order.name!=="All customer")
  axios.get("http://gehadomar-001-site1.atempurl.com"+props.order.url)
  .then(res=>setData(res.data));
  else
  {
    axios.get("http://gehadomar-001-site1.atempurl.com/Admin/GetAllCustomer?pageNum=1")
    .then(res=>setData(res.data));
  }
}
  if(count==0)
  {
    api()

setCount(count+1)
  }
  function Doc(props)
  {
    return<div> <div className="card" >
  <div className="card-body">
    <h5 className="card-title">{props.data.prodTitle}</h5>
    <p className="card-text">   {props.data.billId?"BIll ID :"+props.data.billId:"Product ID : "+props.data.prodId}</p>
    {props.prodId?<a href="#" className="btn btn-primary">{props.prodId}</a>:""}
    <p className="card-text"> {props.data.dateOfBill?"Bill Date :"+ props.data.dateOfBill:"cust Id : "+props.data.custId}</p>
  </div>
  </div>
  <br/>
</div>
}function Arrange()
{
  if(props.order.name=="All customer"||props.order.name=="All Admins")
  { console.log("1");
    return <div>{data.map(item=>{return<GetAllHuman key={item.custId||item.adminId} data={item}/>})}</div>
  } else if(props.order.name=="All Bills"||props.order.name=="All report")
  {
    return <div>{data.map((item,index)=>{return<Doc key={index} data={item} />})}</div>
  } else if(props.order.name=="Profit") return<div> <br/>
<h3>{data}</h3>
</div>;
else return<div>reload page</div>
}
  function GetAllHuman(data)
  {const text=data.data.photo;
    console.log(text);
  const src='http://gehadomar-001-site1.atempurl.com/';
  const def="./images/images.png";
  const [image,setImages]=useState(src+text);
    return<div className="card mb-3" >
  <div className="row g-0">
    <div className="col-md-4">
      <img src={(text!==null &&text!=="string")&&text?image:def} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{data.data.adminName||data.data.custName}</h5>
          <p className="card-text">customer ID : {data.data.custId}</p>
        <p className="card-text">{data.data.email}</p>
        {!data.data.adminId?<button type="button" className="btn-lg btn btn-danger n " name="button">remove from list</button>:""}
        <p className="card-text"><small className="text-muted">{data.data.dateOfSignUp||"no time of SignUp"}</small></p>
      </div>
    </div>
  </div>
</div>
  }
  return<div className="admin-button"> <h1>{props.order.name}</h1>
  <br/>
<Arrange />

  </div>
}
export default Admin;
