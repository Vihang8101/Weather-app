import instance from "./Api";
import axios from "axios";
import Home from "../components/Home"
let data
// Fetching data from API
export default async function fetchUserData(parameters) {


  try {
    const response = await instance.get("/users", {});
 return data = response.data;
{/* <Home data={data}/> */}
  } catch (error) {
    return false;
  }
//   return axios.get("/users")
  // return axios.get(`/users/${parameters}`);
  return(
      <>
          <button onClick={()=>{console.log("helloo")}}>click</button>
      </>
  )
}
