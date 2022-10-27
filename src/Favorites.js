import React from "react";
import Nav from "./comp/Nav.jsx";
import Search from "./comp/search.jsx";
import Categories from"./comp/categories.jsx";
import Footer from "./comp/footer.jsx";
import FavItem from"./comp/favProduct.jsx";

function Favorites()
{
  return( <div>

    <Search />
    <Categories />
    <section className="ads">
    <h1>
      My Favorites Ads
    </h1>
    <br/>
  < FavItem />
  </section>

  </div>)
}
export default Favorites;
