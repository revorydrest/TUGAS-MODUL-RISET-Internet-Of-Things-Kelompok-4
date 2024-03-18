// App.js
import React from 'react';
import './App.css';
import './Background.css';
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/NavBar";
import Body from "./components/Body/Body";
import Judul from "./components/Title/Judul";
import Prpil from "./components/Prfl/Prpil";
import Desc from "./components/Desc/Descc";
import RealtimeData from "./components/Firebase/RealtimeData";


function App() {
  return (
    <div>
      <Navbar />
      <div className="App">
        <div>
        </div>
        <div className="content-wrap">
          <Body />
          <Judul />
          <hr className="divider" />
          <Prpil />
          <hr className="divider" />
          <Desc />
          <hr className="divider" />
          <RealtimeData />
          <hr className="divider" />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
