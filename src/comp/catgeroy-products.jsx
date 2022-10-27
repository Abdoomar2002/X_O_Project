import React,{useState} from "react";
import Products from"./product.jsx";
import axios from "axios";
function CatProd(props)
{
  const [products,setProducts]=useState({});
  axios.get(`http://gehadomar-001-site1.atempurl.com/Product/ProductsBasedOnCategory?CatID=${props.catId()}&PageNum=${props.pageNum}`)
  .then(res=>setProducts(res.data))
  return(
  <section className="product-data col-lg-12 col-sm-12">
<Products />
  </section>);
}
export default CatProd;
