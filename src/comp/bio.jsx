import React from "react";
function Bio(){
  return<section id="bio">
  <div className="row">
<div className="col-lg-6 col-sm-12">
  <img src="../images/team.jpg" alt=""></img>
</div>
  <div className="col-lg-6 col-sm-12">
    <h1>This Our First Project</h1>
    <p>
     Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
    <button type="button" className="btn btn-dark btn-lg"> <i className="fa-brands fa-app-store"></i> Download</button>
    <button type="button" className="btn btn-outline-light btn-lg"><i className="fa-brands fa-google-play"></i> Download</button>
  </div>
</div>

</section>
}export default Bio;
