import { useEffect, useState } from "react";
import "../css/weatherreport.css";
import Image from "../json/weatherImage.json";
import sunny from "../images/sunny.png";

export default function WeatherReport(prop){

    var [icon,setIcon] = useState(sunny);

    useEffect(()=> {
    if(typeof prop.val.main !== 'undefined'){
        Image && Image.map((e)=>{
            if(e.desc === prop.val.weather[0].main){
                    setIcon(require('../images/'+e.img));
            }
        }
        )
    }},[prop.val.main]);

    return <>
    {typeof prop.val.main !== 'undefined' ? (
    <>
    <div className="weatherreport">
        <div className="img">
            <img src={icon} alt="sunny"/>
        </div>
        
        <div className="tempbox">
            <p className="temp">{prop.val.main.temp}°C</p>
            <p className="temp-max">Max - {prop.val.main.temp_max}°C</p>
            <p className="temp-min">Min - {prop.val.main.temp_min}°C</p>
        </div>
        <div className="descbox">
            <p className="city">{prop.val.name}</p>
            <p className="weather">{prop.val.weather[0].main}</p>
            <p className="desc">{prop.val.weather[0].description}</p>
        </div>
    </div>

        <div className="extras">
        <div className="wind">
            <p>Humidity: {prop.val.main.humidity}</p>
            <p>Wind Speed - {prop.val.wind.speed} m/s</p>
            <p>Wind Degree - {prop.val.wind.deg}°</p>
        </div>
        <div className="wind">
            <p>Latitude - {prop.val.coord.lat}</p>
            <p>Longitude - {prop.val.coord.lon}</p>
        </div>
        </div>
    </>
    ) : ("")}
    </>
}