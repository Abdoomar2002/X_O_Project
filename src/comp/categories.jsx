import React,{useState} from "react";
function Categories ()
{
  return(
    <section id="categories">
 <div className="row">

 <div className="dropdown col-lg-3 col-sm-6">
 <a href="Cars">
    <button className="dropbtn">cars</button>
  </a>
</div>

<div className="dropdown col-lg-3 col-sm-6">
  <a href="Electronic">
 <button className="dropbtn">Electronic</button>
 </a>
</div>
<div className="dropdown col-lg-3 col-sm-6 ">
  <a href="Furniture">
 <button className="dropbtn">Furniture</button>
 </a>
</div>
 <div className="dropdown col-lg-3 col-sm-6 ">
  <a href="Property">
 <button className="dropbtn">Property</button>
 </a>
</div>
</div>


</section>
)
}
export default Categories;
