import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./search.css";
import { useState } from 'react';

export default function searchh(){
    let [city,setCity]=useState("");//state var ki access har function k paas hoti hai
    const url="https://api.openweathermap.org/data/2.5/weather";
    const apikey="0f7108b3228dc61522cd7a0f8e980958";

//no need to pass city as a parameter coz state var ki access har hun k pass hoti
let getWeatherInfo = async () => {

      let response = await fetch(`${url}?q=${city}&appid=${apikey}&units=metric`);
      
      
      
      let jsonResponse = await response.json();
      console.log(jsonResponse);
      let result={
        temp:jsonResponse.main.temp,
        tempmin:jsonResponse.main.temp_min,
        tempmax:jsonResponse.main.temp_max,
        humidity:jsonResponse.main.humidity,
        feelslike:jsonResponse.main.feelsLike,
        weather:jsonResponse.weather[0].description,

      };
      console.log(result);
   
  };
  
    
    let handlechange=(evt)=>{
        setCity(evt.target.value);
    };
    let onsubmit=(evt)=>{
        evt.preventDefault();
        console.log(city);
        setCity="";
        getWeatherInfo();
    };
    return(
    <div className='search'>

        <h2> search for weather:</h2>
         <br></br>
        <form onSubmit={onsubmit}>
        <TextField id="city" label="city name" variant="outlined" value={city} onChange={handlechange} required/>
        <br></br><br></br>
        <Button type="submit" variant="contained">Search</Button>

        </form>
       
    </div>)
}