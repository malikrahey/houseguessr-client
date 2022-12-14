import React from "react";
import Header from "./components/Header";
import {HomeModernIcon} from "@heroicons/react/24/solid/"
import "./Home.css";


export default function Home() {

  return (
    <div className="home">
      <Header />
      <div>

        <div className="home-body">
          <div className="home-title">
            <HomeModernIcon className="home-logo" />
            HouseGuessr
          </div>
          
          <div className="home-subtitle">
            Guess the price of house listings from around Canada
          </div>
          <div className="home-bottom"> 
            <a href="/play">
              <div className="play-button">
                Quick Play
              </div>
            </a>
          </div>
        </div>
      </div>   
    </div>
  );
}