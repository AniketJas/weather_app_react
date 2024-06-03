import { useState } from "react";
import ApiCall from "./apiCall";

import "../css/navbar.css";
import "../css/sidebaritem.css";

export default function HomePage(){

    var [x,setx] = useState();
    var [y,sety] = useState();

    function comCalls(e){
        var x =e.target.getAttribute('value');
        console.log(x);
        sety(<ApiCall city={x}/>);    
    }

    function comCalln(e){
        console.log(x);
        sety(<ApiCall city={x}/>);   
    }


    return <>
    <div className="navbar">
        <input type="text" placeholder="Search City" id='textbox' onChange={(e) => setx(e.target.value)}/>
        <button onClick={comCalln}>Search</button>
    </div>
    
    <div className="sidebar">
        <button className="home-btn" onClick={comCalls}><p value='mumbai'>Mumbai</p></button>
        <button className="home-btn" onClick={comCalls}><p value='delhi'>Delhi</p></button>
        <button className="home-btn" onClick={comCalls}><p value='kolkata'>Kolkata</p></button>
        <button className="home-btn" onClick={comCalls}><p value='bengaluru'>Bengaluru</p></button>
        <button className="home-btn" onClick={comCalls}><p value='hyderabad'>Hyderabad</p></button>
    </div>
    
    <div>{y}</div>
    </>;
}