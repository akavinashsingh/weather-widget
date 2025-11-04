import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox() {
    let [city,setCity] = useState("");
const API_URL = process.env.URL;
const API_KEY = process.env.API;

let getWeatherInfo = async()=>{
 let response =  await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
let jsonResponse= await response.json();

let result = {
    temp: jsonResponse.main.temp,
    tempMin: jsonResponse.main.temp_min,
    tempMax: jsonResponse.main.temp_max,
    humidity: jsonResponse.main.humidity,
    feelsLike: jsonResponse.main.feels_like,
    weather: jsonResponse.weather[0].description,
};

};


    

let handleChange = (evt)=>{
   setCity(evt.target.value);
   
};

let handleSubmit = (evt) =>{
    evt.preventDefault();
    console.log(city);
    setCity("");
    getWeatherInfo();
};



  return (
    <div className="SearchBox">
      <h3>Search for the Weather</h3>
      <form onSubmit={handleSubmit}>
        <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
        <br /><br />
       <Button variant="contained" type="submit">
        Search
      </Button>
      </form>
    </div>
  );
}
