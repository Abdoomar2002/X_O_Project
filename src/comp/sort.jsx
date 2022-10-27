import React from"react";
function Sort(props)
{
  return(  <section className="prod">
  <h1>
    {props.cat}
  </h1>
  <h3>
    filter
  </h3><div className="filters">
    <button type="button" className="navbar-toggler collapsed" name="button" data-bs-toggle="collapse" data-bs-target="#filter" aria-controls="filter" aria-expanded="false" aria-label="Toggle navigation">filter <i className="fa-solid fa-filter"></i> </button>
    <label htmlFor="checkbox">Only with photo</label>
  <input type="checkbox"   name="onCheck"/>
 <span className="vertical"></span>
 <label htmlFor="select"><b>Sort By</b></label>
 <select name="sort" className="sort">
   <option value="Newly list" className="active">Newly list</option>
   <option>lowest price</option>
   <option>Highest price</option>
 </select>

  </div>

</section>);
}
export default Sort;
