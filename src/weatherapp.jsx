
import Searchh from "./search";
import Infobox from "./infobox";
import { useState } from "react";
export default function weatherapp(){
    const[weather,setWeather]=useState({
       
            city:"pune",
                    feelslike:24.84,
                    temp:25.05,
                    tempmin:25.05,
                    tempmax:25.05,
                    humidity:45,
                    weather:"haze",
                
    });
    let updateinfo=(result)=>{
        setWeather(result);
    }
    return (
        <>
        
        <h2 style={{textAlign:"center"}}> weather app by delta</h2>
        <Searchh update={updateinfo}/>
        <Infobox info={weather} />
        
        </>
    );
}