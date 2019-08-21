//TODO: STEP 1 - Import the useState hook.
//TODO: done :)
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  {
    //TODO: STEP 2 - Establish your applictaion's state with some useState hooks. You'll need one for the home score and another for the away score.
    //TODO: done :)
  }
  const [homeScore, setHomeScore] = useState(50);
  const [awayScore, setAwayScore] = useState(22);

  //TODO: home team call backs
  //TODO: done :)
  const homeTouchDown = e => {
    setHomeScore(homeScore + 7);
  };
  const homeFieldGoal = e => {
    setHomeScore(homeScore + 3);
  };

  //TODO: away team call backs
  //TODO: done :)
  const awayTouchDown = e => {
    setAwayScore(awayScore + 7);
  };
  const awayFieldGoal = e => {
    setAwayScore(awayScore + 3);
  };

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {
              // TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state.
              // TODO: done :)
            }
            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
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
          <button className="homeButtons__touchdown" onClick={homeTouchDown}>
            Home Touchdown
          </button>
          <button className="homeButtons__fieldGoal" onClick={homeFieldGoal}>
            Home Field Goal
          </button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={awayTouchDown}>
            Away Touchdown
          </button>
          <button className="awayButtons__fieldGoal" onClick={awayFieldGoal}>
            Away Field Goal
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
