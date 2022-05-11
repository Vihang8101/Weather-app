import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import fetchUserData from "../services/Apiservices";
import api from "../services/Api"



let url="F0d4fPzuAyGvt8AO7It04KYIRYp8YKue"

 const Home = () => 

{  
  let [responseData, setResponseData] = React.useState([])
  const [search, setSearch] = useState("");
//  call api and get data
  React.useEffect(() => {
   api.get("/locations/v1/countries/").then((response)=>setResponseData(response.data))
  },[]);

//search function
let data = responseData.filter((data)=>data.username.toLowerCase().includes(search.toLowerCase()))
  
  console.log(responseData,"mali gayaaa");
  console.log(data);

  //get input 
  const handleChange = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
    
  };

   



  // const getdata = async ()=>
  // {
    
  //   try {
  //      response = await api.get("/users", {});
     
  //  return console.log(response.data);
  //   } catch (error) {
  //     return false;
  //   }
  
  // } 



return (
    <>
  
<h1>helooo</h1>
<div className="row">

{/* <!--Grid column--> */}
<div className="col-md-6 mb-4">

  <form className="form-inline md-form mr-auto">
    <input className="form-control mr-sm-2" type="text" placeholder="Search"  onChange={handleChange} aria-label="Search"/>
    <button className="btn btn-unique btn-rounded btn-primary" type="submit"  >Search</button>
   
   
  </form>

</div>
</div>

{/* // display data */}
{data.map((e)=>

{
  return(
    <div className="container">
     <table>
       <tr>
         <td>{e.id}</td>
         <td>{e.name}</td>
         <td>{e.username}</td>
       </tr>
     </table>
    </div>
  )
}
)}
    </>
)
}
export default Home