import React from "react";
function CarouselItem(props)
{
  return (  <div className={"carousel-item "+props.c}>
        <img src="../images/p2.jpg" className="d-block w-100 product-image" alt="..." />
      </div>
      )
}
export default CarouselItem;
