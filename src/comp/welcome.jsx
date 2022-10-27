import React,{useState} from "react";

function Welcome()
{
  function handelSubmit(e)
  {
    window.location.replace("Search");
e.preventDefault();
  }
  return(
    <section  className ="text">
     <div className="new">
      <h1>
       Welcome to Brand
      </h1>
      <form className="pagination" onSubmit={handelSubmit} >
       <input type="text" placeholder="Search"  />
       <button type="submit"  name="button" className="btn btn-primary">Search</button>
      </form>
     </div>
    </section>
);
}
export default Welcome;
