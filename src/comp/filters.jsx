import React from"react";
function Filters()
{
  return (

  <div className="filter col-lg-4 col-sm-12 navbar-collapse collapse" id="filter">
  <div className="filter-element ">
    <form className="filter-input" action="cat1.html" method="post">
      <h5>city</h5>
      <select name="city" className="sort2">
        <option value="Egypt" className="active">Egypt</option>
        <option>Assuit</option>
        <option>Sohag</option>
      </select>
      <h5>
        price
      </h5>
         <input type="number" name="min" placeholder="min" />
         <input type="number" name="max" placeholder="max" />
         <button type="submit" name="submit" className="btn btn-lg btn-outline-primary">save</button>
         <button type="reset" name="reset" className="btn btn-lg btn-danger">revert</button>
    </form>
  </div>
  </div>
)
}
export default Filters;
