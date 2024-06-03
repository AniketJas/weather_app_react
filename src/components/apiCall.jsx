import WeatherReport from "./WeatherReport";
import { useEffect, useState } from "react";

export default function ApiCall(prop){

    var api = {
        base: 'https://api.openweathermap.org/data/2.5/',
        key: 'e147d09ab2f778756ac3be4b285e76e9',
    };

    var [weather,setWeather] = useState({});

    useEffect(()=>{
    fetch(`${api.base}weather?q=${prop.city}&units=metric&&APPID=${api.key}`)
        .then(result => result.json())
        .then(json => {
            console.log(json);
            setWeather(json);
            }); 
        },[prop.city]);
    
        return <>
        <WeatherReport val={weather}/>
    </>
}