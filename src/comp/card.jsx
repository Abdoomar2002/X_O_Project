import React,{useState} from "react";
function Card(props)
{

  const text=props.pic[0]?props.pic[0].substring(1,props.pic[0].length-1):"0";
  const src='http://gehadomar-001-site1.atempurl.com/';

  const def="./images/photo.jpg"
  const [image,setImages]=useState(src+text);
  return  <a href={props.id}>
  <div className="col">
    <div className="card h-100">
      <img src={image} onError={({ currentTarget }) => {
    currentTarget.onerror = null;
    console.log(image )
    currentTarget.src=def;}}
     className="card-img-top" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title">{props.price}</h5>
        <p className="card-text"><strong>{props.title}$</strong></p>
        <p className="card-text"><i className="fa-solid fa-location-dot"></i> {props.location}</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">uploded on {props.dateOfUp}</small>
      </div>
    </div>
  </div>
  </a>
}
export default Card;
