import React,{useEffect,useState} from "react";
import Card from "./card";
function Cards()
{
  const [isLoaded,setIsLoaded]=useState(false);
  const [items,setItems]=useState([]);
  const [error,setError]=useState(null);
  useEffect(() => {


    fetch('http://gehadomar-001-site1.atempurl.com/Product/GetAllProduct2?pageNum=1')
  .then(response => response.json())
  .then(data => {
    setItems(data)
    setIsLoaded(true);
  },
  (error) => {
            setIsLoaded(true);
            setError(error)}
          );
      }, []);
      if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          return (
            <section id ="cards">
            <h1>
              Featured elements
            </h1>
            <div className="row row-cols-1 row-cols-md-3 g-4 row-cols-lg-4" >
              {items.length!==0?items.map(item =>{
                return <Card
                    key={item.productID}
                    id={item.productID}
                    custName={item.custName}
                    custPhoto={item.custPhoto}
                    dateOfUp={item.dateOfBill}
                    pic={item.pictures}
                    price={item.price}
                    title={item.title}
                    location={item.location}
                />
              }):<h2>Nothing to Show</h2>}
          </div>
          </section>)}

}
export default Cards;
