import React from "react";
import Search2 from "./comp/search.jsx";
import Categories from"./comp/categories.jsx";
import Filters from "./comp/filters.jsx";
import Sort from "./comp/sort.jsx";
import CatProd from "./comp/catgeroy-products.jsx";
import Page from"./comp/pages.jsx";
function Search(){
  return  <div>

    <Search2 />
    <Categories />
    <Sort  />
    <div className="row">
    <Filters />
    <CatProd />
    </div>
    <Page />

    </div>
}
export default Search;
