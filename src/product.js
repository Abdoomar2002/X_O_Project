import React from "react";
import Nav from "./comp/Nav.jsx";
import Search from "./comp/search.jsx";
import Categories from"./comp/categories.jsx";
import Footer from "./comp/footer.jsx";
import ActiveIndicator from "./comp/carouselIndicatorActive.jsx";
import Indicator from "./comp/carouselIndicator.jsx";
import CarouselItem from"./comp/carouselItem.jsx";
import Details from "./comp/productDetails.jsx";
import Data from "./comp/productData.jsx";
function Product()
{
  return (<div>

    <Search />
    <Categories/>
    <section id="product">
  <div className="row">
  <div id="carouselExampleIndicators" className="carousel slide col-lg-6 col-sm-12" data-bs-ride="true">
  <div className="carousel-indicators">
<ActiveIndicator />
<Indicator />

  </div>

  <div className="carousel-inner">
  <CarouselItem c="active"/>
    <CarouselItem c="" />
  </div>

  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
<Details />
</div>
<Data />

</div>
<button className="btn btn-lg btn-danger">Reaport this ad</button>
</section>

</div>)
}
export default Product;
