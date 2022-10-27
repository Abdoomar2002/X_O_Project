import React,{useState} from "react";
import axios from "axios";
function Paid(props)
{const [card,setCard]=useState(
  {
    prodId:window.localStorage.prodId,
    custId:props.userData.custId,
    CardNumber:"",
    CardName:""
  });
  console.log(card);
  function handleChange(e)
   {
     const { target: { name, value } } = e;
         setCard(data => ({ ...data, [name]: value }));
   console.log(card);
   }
   function handleSubmit(e)
   {
     axios.post(`http://gehadomar-001-site1.atempurl.com/Bill/AddProductPart3?ProductID=${card.prodId}&CustID=${card.custId}&cardNumber=${card.CardNumber}&AccountName=${card.CardName}`)
       .then(res=>
         {
          if( res.status==200)
          {
            alert("done");
            window.location.replace("/")
          }
         })
     e.preventDefault();
   }
  return(<div className="text-center"><main className="form-signin w-100 m-auto">
  <form onSubmit={handleSubmit}  >
    <img className="mb-4" src="./images/icon.svg" alt="" width="72" height="57" />
<h1>Payment</h1>
    <h1 className="h3 mb-3 fw-normal">Please Enter Your Card Data</h1>

    <div className="form-floating">
      <input type="text"  name="CardName" className="form-control" onChange={handleChange} id="floatingInput" placeholder="Card name"  required/>
      <label htmlFor="floatingInput">Card name</label>
    </div>
    <div className="form-floating">
      <input type="number" className="form-control" onChange={handleChange}  name="CardNumber" id="floatingPassword" placeholder="XXXX XXXX XXXX XXXX" required />
      <label htmlFor="floatingPassword">CardNumber</label>
    </div>
    <div className="form-floating">
    <input type="month" className="form-control"  name="ExpierdDate" id="floatingInput2" placeholder="____ __" required />
    <label htmlFor="floatingInput2">Expierd day</label>
    </div>
    <div className="form-floating">
    <input type="number" className="form-control"  name="cvv" id="floatingInput3" placeholder="_ _ _"  required/>
    <label htmlFor="floatingInput2">Cvv</label>
    </div>
    <br/>
    <button className="w-100 btn btn-lg btn-primary" type="submit">Done</button>

  </form>
</main>
</div>)
}
export default Paid;
