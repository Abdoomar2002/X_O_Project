import React,{useState} from "react";
import Nav from "./comp/Nav.jsx";
import Search from "./comp/search.jsx";
import Categories from"./comp/categories.jsx";
import Filters from "./comp/filters.jsx";
import Sort from "./comp/sort.jsx";
import CatProd from "./comp/catgeroy-products.jsx";
import Page from"./comp/pages.jsx";
import Footer from "./comp/footer.jsx";
import useLocalStorage from"./useLocalStorage";


function Category(props)
{
var [catId,setCatId]=useLocalStorage("catId","Cars");
function categoryId ()
  {
    if(props.cat=="Property")
    setCatId(1);
    else if(props.cat=="Cars")
    setCatId(2);
    else if(props.cat=="Electronic")
    setCatId(3);
    else setCatId(4);
  }

  const [pageNum,setPageNum]=useLocalStorage("pageNum",1)
  return (
    <div>

    <Search />
    <Categories />
    <Sort cat={props.cat} />
    <div className="row">
    <Filters />
    <CatProd catId={props.catId} pageNum={1} />
    </div>
    // <Page />

    </div>
  )
}
export default Category;
