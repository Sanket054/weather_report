import axios from "axios"



const data= async()=>{
     const api="https://dataservice.accuweather.com/locations/v1/cities/search?apikey=GjMv5mreFxBxLTFBVvWuy6vzNJvA5nrT&q=parbhani"

     const res=await axios.get(api)
     console.log(res.data);
     


}

data()