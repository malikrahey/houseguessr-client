import "./EndScreen.css"
import ProgressBar from "@ramonak/react-progress-bar";

export default function EndScreen({totalScore}) {


  const highScore = localStorage.getItem("highscoreNew") || 0;
  if (totalScore > highScore) {
    localStorage.setItem("highscoreNew", totalScore);
  }

  return (
    <div className="end-body">
      <div className="end-top">
        <div className="end-title">
          End
        </div>
        <div className="end-details">
          <div className="end-score">
            Your Score
            <ProgressBar
              completed={String(totalScore)}
              maxCompleted={25000}
              animateOnRender={true}
            />
          </div>
          <div className="end-highscore">
            Highscore
            <ProgressBar
              completed={String(highScore)}
              maxCompleted={25000}
              animateOnRender={true}
            />
          </div>
        </div>
      </div>

      <div className="end-bottom">
          
        <a href="/play">
          <div className="menu-button">
              Play Again
          </div>
        </a>
        <a href="/">
          <div className="menu-button">
            Go Home
          </div>
        </a>
      </div>

    </div>
  )
}