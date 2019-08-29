//TODO: STEP 1 - Import the useState hook.
//TODO: done :)
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";
 
//TODO: add some team spirit colors
//TODO: done :)
// team colors
var bgColors = {    "Blue": "#002244",
                    "Silver": "#B0B7BC",
                    "Green": "#8CC152",
                    "Yellow": "#FFB612",
                    "Gray": "#A5ACAF",
};

function App() {
  {
    //TODO: STEP 2 - Establish your applictaion's state with some useState hooks. You'll need one for the home score and another for the away score.
    //TODO: done :)
  }
  const [homeScore, setHomeScore] = useState(50);
  const [awayScore, setAwayScore] = useState(22);

  return (
    <div className="container"  >
      <section className="scoreboard" style={{backgroundColor: bgColors.Green}}>
        <div className="topRow">
          <div className="home" style={{backgroundColor: bgColors.Blue}}>
            <h2 className="home__name" style={{color: bgColors.Silver}}>Patriots</h2>
            {
              // TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state.
              // TODO: done :)
            }
            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">15:05</div>
          <div className="away" style={{backgroundColor: bgColors.Gray}}>
            <h2 className="away__name" style={{color: bgColors.Yellow}}>Stealers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>

      <section className="buttons">
        <div className="homeButtons">
          {
            // TODO: STEP 4 - Now we need to attach our state setter functions to click listeners.
            //TODO: done
          }
          <button className="homeButtons__touchdown" onClick={() => setHomeScore(homeScore +7)}>
            Home Touchdown
          </button>
          <button className="homeButtons__fieldGoal" onClick={() => setHomeScore(homeScore + 3)}>
            Home Field Goal
          </button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => setAwayScore(awayScore + 7)}>
            Away Touchdown
          </button>
          <button className="awayButtons__fieldGoal" onClick={() => setAwayScore(awayScore + 3)}>
            Away Field Goal
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
