import React,{useState} from "react";
import Nav from "./comp/Nav.jsx";
import Footer from "./comp/footer.jsx";
import axios from "axios";
import useLocalStorage from"./useLocalStorage";
function PlaceAd(props)
{ const [images,setImages]=useState([0]);
 var [paths,setPaths]=useState([]);
 const [id,setId]=useLocalStorage("prodId",0);
  const [data,setData]=useState({
    CatId:"2",
    productTitle:"",
    location:"",
    price:"",
    description:"",
    Images:{
      }
  });
  function handleSubmit(e)
  { let y= {"title": data.productTitle,
   "description": data.description,
   "price": data.price,
   "negotiable": true,
   "location": data.location};
   let id2=0;


   var formData=new FormData();
   for (var i = 0; i < images.length; i++) {
     formData.append("files",images[i]);
   }
   formData.append('name',"files");
      console.log(y);
       axios.post(`http://gehadomar-001-site1.atempurl.com/Bill/AddProductPart1?CustID=${props.userData.custId}&CatId=${data.CatId}`,y)
      .then(res=>res.data)
      .then(res=>{setId(res);id2=res;})
      console.log(window.localStorage.prodId);
      axios.post("http://gehadomar-001-site1.atempurl.com/Product/AddImages",formData)
      .then(res=>res.data)
      .then(res=>{setPaths(res)})
      console.log(paths);
      axios.put(`http://gehadomar-001-site1.atempurl.com/Bill/AddProductPart2?ProductID=${window.localStorage.prodId}`,paths)
    // .catch(err=>console.log(err))
      // window.location.replace("/Paid")
     e.preventDefault();
  }
  console.log(data);
   function handelClick()
  {var index=images.length;
    if(images.length<10)
    setImages(item=>([...images,index]));
    else {
          alert("you have only maximum 10 photo for each product")
    }
    console.log(images);
  }
  function handleChange(e){

    const { target: { name, value } } = e;
      if(name==="cardNumber"&&value<=9999999999999999)
        setData(data => ({ ...data, [name]: value }));
        else if (name!=="cardNumber") {
            setData(data => ({ ...data, [name]: value }));
        }
    console.log(data);

  };
  function handlefile(e){
const file=e.target.files[0];
const index=e.target.id;
images[index]=file;
setImages(images=>([...images]));
console.log(images)
  }
  function Change()
  {
    return (<input type="file" accept=".png,.jpg,mp4"className="input" name="file" length="10"  className="form-control"/>)
  }
  return (<div>

    <section className="form">
      <h1>New Product</h1>
      <form className="inputs" action="/" method="post" onSubmit={handleSubmit}>
        <input type="text" name="productTitle" id="inputImages" className="input" onChange={handleChange} placeholder="Product Name" />
        <select name="location" onChange={handleChange} className="location input">
          <option value="Egypt" className="active" >Egypt</option>
          <option>Assuit</option>
          <option>Minya</option>
          <option>Cairo</option>
          <option>Sohag</option>
        </select>
        <br/>
        <select name="CatId" onChange={handleChange}  className="location input">
          <option value="2" className="active" >Cars</option>
          <option value="4">Furniture</option>
          <option value="3">Electronic</option>
          <option value="1">Property</option>
        </select>
        <br/>

        <input onChange={handleChange} placeholder="price" type="number"className="input" name="price" />
        <textarea name="description" rows="8" cols="80"  placeholder="describe your product"></textarea>
        <h4>
          upload photo
        </h4>
        {
          images.map( (item,index)=>
            {
              return (<input key={index} id={index} onChange={handlefile} type="file" accept=".png,.jpg,mp4"className="input" name="file" length="10"  className="form-control"/>)
            })
        }
        <button type="button" name="button" onClick={handelClick} className="btn btn-lg btn-outline-primary">add More Photo</button>

        <button type="submit" name="button" className="btn btn-lg btn-outline-success">Next</button>
      </form>
    </section>

    </div>)
}
export default PlaceAd;
