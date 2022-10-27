import React,{useState} from "react";
function Product(props)
{  const text=props.photo[0];
  const src='http://gehadomar-001-site1.atempurl.com/';
  const def="./images/images.png"
  const [image,setImages]=useState(src+text);
  return(  <a href="Product">
  <div className="card mb-3" >
  <div className="row g-0">
    <div className="col-md-4">
      <img src={image!==null?image:def} className="img-fluid rounded-start" alt="..."  />
    </div>

    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title" style={{color:"#000"}}>{props.price}</h5>
        <p className="card-text">{props.title}</p>
        <p className="card-text">{props.location}</p>
        <p className="card-text"><small className="text-muted">{props.dateOfPublish}</small></p>
      </div>
    </div>
  </div>
</div>
</a>);
}
export default Product;
