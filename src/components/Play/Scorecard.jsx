import "./Scorecard.css";
import ProgressBar from "@ramonak/react-progress-bar";


export default function Scorecard({
  playerGuess,
  actualPrice,
  roundPoints,
  currentPoints,
  changeHouse,
  currentRound,
  className
}) {


  const moneyFormatter = Intl.NumberFormat('en', {
    currency: 'CAD',
    style: 'currency'
  });

  return (
    <div className={`scorecard ${className}`}>
      <div className="play-player-guess">
        Your Guess: {moneyFormatter.format(playerGuess)}
      </div>
        <div className="play-actual-price">
         Actual Price: {moneyFormatter.format(actualPrice)}
        </div>
        <div className="play-round-points">
          Round Points
        </div>
        <ProgressBar
          completed={String(roundPoints)}
          maxCompleted={5000}
          animateOnRender={true}
        />
        <div className="play-points">
          Current Points
        </div>
        <ProgressBar
          completed={String(currentPoints)}
          maxCompleted={5000 * currentRound}
          animateOnRender={true}
        />
        <div onClick={changeHouse} className="scorecard-continue">
          Next Round
        </div>
    </div>
  )
}