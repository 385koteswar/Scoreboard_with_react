//to create a scorebord
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import "./styles.css";

var PLAYERS = [
  {
    name: "jimmy",
    score: 85,
    id: 1
  },
  {
    name: "sam ",
    score: 55,
    id: 2
  },
  {
    name: "rocky",
    score: 45,
    id: 3
  }
];

function Header(props) {
  return (
    <div className="header">
      <h1>{props.title}</h1>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired
};

function Counter(props) {
  return (
    <div className="counter">
      <button className="counter-action decrement"> - </button>
      <div className="counter-score">{props.score}</div>
      <button className="counter-action increment"> + </button>
    </div>
  );
}
Counter.propTypes = {
  score: PropTypes.number.isRequired
};

function Player(props) {
  return (
    <div className="player">
      <div className="player-name">{props.name}</div>
      <div className="player-score">
        <Counter score={props.score} />
      </div>
    </div>
  );
}

Player.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired
};

function App(props) {
  return (
    <div className="scoreboard">
      <Header title={props.title} />
      <div className="players">
        {props.players.map(function(player) {
          return (
            <Player name={player.name} score={player.score} key={player.id} />
          );
        })}
      </div>
    </div>
  );
}
App.propTypes = {
  title: PropTypes.string.isRequired,
  players: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired
    })
  ).isRequired
};

App.defaultProps = {
  title: "Scoreboard"
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App players={PLAYERS} />, rootElement);
