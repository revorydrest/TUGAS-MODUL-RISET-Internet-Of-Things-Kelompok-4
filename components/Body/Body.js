import React from "react";
import "./Body.css";
import img5 from '../FotoAnggota/LOGO.png';

const Body = () => {
    return (
        <div id="home" className="App-body">
            <div>APPA</div>
            <img src={img5} className="logo" alt="APPA"/>
        </div>
    );
};

export default Body;
