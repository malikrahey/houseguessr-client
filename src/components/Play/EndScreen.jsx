import "./EndScreen.css"


export default function EndScreen({totalScore}) {


  const highScore = localStorage.getItem("highscore") || 0;
  if (totalScore > highScore) {
    localStorage.setItem("highscore", totalScore);
  }

  return (
    <div className="end-body">
      <div className="end-top">
        <div className="end-title">
          End
        </div>
        <div className="end-details">
          You scored {totalScore} points! <br />
          High Score: {highScore} points
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