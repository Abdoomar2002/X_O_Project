import React from "react";
function FavoritItem()
{
  return (  <div className="card mb-3" >
    <div className="row g-0">
      <div className="col-md-4">
        <img src="images/car2.webp" className="img-fluid rounded-start" alt="..." />
      </div>

      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title" style={{color:"#000"}}>75000$</h5>
          <p className="card-text w1">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <button type="button" className="btn btn-lg btn-primary w1 " name="button">view</button>
          <button type="button" className="btn-lg btn btn-danger w1 " name="button">remove from list</button>
          <p className="card-text w1"><small className="text-muted ">Last updated 3 mins ago</small></p>

        </div>
      </div>
    </div>
  </div>)
}
export default FavoritItem;
