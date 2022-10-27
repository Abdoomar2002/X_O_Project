import React from "react";
import Nav from "./comp/Nav.jsx";
import Search from "./comp/search.jsx";
import Categories from"./comp/categories.jsx";
import UserProduct from"./comp/userProduct.jsx";
import Footer from "./comp/footer.jsx";
function MyAds()
{
  return( <div>

    <Search />
    <Categories />
    <section className="ads">
    <h1>
      My Ads
    </h1>
    <br/>
    <UserProduct />
  </section>

  </div>)
}
export default MyAds;
