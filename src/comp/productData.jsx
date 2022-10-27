import React from "react";
import Detail from"./detail.jsx";
function Data()
{
  return(  <div className="details col-lg-6 col-sm-12">
      <h1>
    Seller Name
      </h1>
      <div className="describ">
        <h3>
          product name
        </h3>
        <hr />

      
      </div>
      <div className="props">
  <h3>
    Details
  </h3>

  <Detail />
      </div>
      <h3>
        Description
      </h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <button type="button" name="button" className ="btn btn-primary call">01XXXXXXXXX
        Show the number
      </button>
      <button type="button" name="button" className ="btn btn-outline-primary call">call the seller</button >

    </div>

  )
}
export default Data;
