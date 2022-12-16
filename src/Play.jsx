import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import "./Play.css";
import GuessInput from "./components/Play/GuessInput";
import { useRef } from "react";
import { useHouses } from "./hooks/useHouses";
import Header from "./components/Header";
import EndScreen from "./components/Play/EndScreen";
import {Blocks} from "react-loader-spinner";
import Scorecard from "./components/Play/Scorecard";

export default function Play() {

  const [houseIndex, setHouseIndex] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);
  const [isShowingRoundScore, setIsShowingRoundScore] = useState(false);
  const [currentPoints, setCurrentPoints] = useState(0);
  const [roundPoints, setRoundPoints] = useState(0);

  const [playerGuess, setPlayerGuess] = useState(0);
  const inputRef = useRef(null);
  
  const moneyFormatter = Intl.NumberFormat('en', {
    currency: 'CAD',
    style: 'currency'
  });


  const [houses, loading] = useHouses();
  const currentHouse = houses[houseIndex];
  const currentPicture = currentHouse?.pictures !== undefined ? currentHouse.pictures[slideIndex].replace('"',"") : "";

  useEffect(() => {
    setPlayerGuess(0);
  }, [currentHouse])

  const changeSlide = (increment) => {
    const currentIndex = slideIndex;
    let nextIndex = currentIndex + increment;
    if (nextIndex < 0) nextIndex = currentHouse.pictures.length-1;
    nextIndex = nextIndex % currentHouse.pictures.length;
    setSlideIndex(nextIndex);
  }

  const makeGuess = (e) => {
    e.preventDefault();
    if(isShowingRoundScore) return;


    const guessAmount = Number.parseInt(inputRef.current.value.replace(/,/g, ''));
    setPlayerGuess(guessAmount);
    const points = calculatePoints(guessAmount);
    setRoundPoints(points);
    setCurrentPoints(currentPoints + points);
    setIsShowingRoundScore(true);
    inputRef.current.value = 0;
    
  }

  const changeHouse = () => {
    setSlideIndex(0);
    setHouseIndex(houseIndex+1);
    setIsShowingRoundScore(false);
  }

  const calculatePoints = (guess) => {
    const difference = Math.abs(guess - houses[houseIndex]?.price);
    let points = (1-(difference / houses[houseIndex]?.price)) * 5000;
    points = Math.min(points, 5000);
    points = Math.max(0, points);
    points = Math.trunc(points);
    return points;
  }

  document.addEventListener('keydown', (event) => {
    const key = event.key;
    if (key === 'ArrowRight') {
      changeSlide(1);
    } else if (key === 'ArrowLeft') {
      changeSlide(-1);
    }
  })


  return (
    <div className="play">
      <Header />
      {loading ? 
      <div className="loading">
        <Blocks
          height={40}
          width={40}
        />
      </div> : 
      houseIndex < 5 ? (
        <div className="play-container">
          <div className="play-house-info" >      
            Current House {houseIndex + 1}
            <div>Location: {currentHouse?.location} </div>
            <div className="play-house-stats">
              <span className="play-house-beds">Bedrooms: {currentHouse?.bedrooms <= 6 ? currentHouse?.bedrooms : '6+'}</span>
              <span className="play-house-baths">Bathrooms: {currentHouse?.bathrooms <= 6 ? currentHouse?.bathrooms : '6+'} </span>
            </div>
          </div>
          <div className="play-picture-slideshow">
            <div className="prev slideshow-button" onClick={() => changeSlide(-1)}> ⬅ </div>
            <img className="play-pictures" src={currentPicture}></img>
          
            <div className="next slideshow-button" onClick={() => changeSlide(1)}>➡ </div>
          </div>
          <GuessInput inputRef={inputRef} onSubmit={makeGuess}/>
          <Scorecard
            className={isShowingRoundScore ? '' : ' hide'}
            playerGuess={playerGuess}
            actualPrice={currentHouse?.price}
            roundPoints={roundPoints}
            currentPoints={currentPoints}
            changeHouse={changeHouse}
            currentRound={houseIndex + 1}
          />
      </div>
      ) :
      <>
      <EndScreen totalScore={currentPoints} />
      </>
      
    }
    </div>
  );

}