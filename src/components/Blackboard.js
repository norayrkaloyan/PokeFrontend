import PokeBallButton from "./PokeBallButton.js";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Blackboard = ({
  firstPlayerHealth,
  botPlayerHealth,
  damage,
  playerName,
  botName,
  attack,
}) => {
  const [newFirstPlayerHealth, setNewFirstPlayerHealth] = useState(100);
  const [newBotPlayerHealth, setNewBotPlayerHealth] = useState(100);
  const [playerDamage, setPlayerDamage] = useState();
  const [botDamage, setBotDamage] = useState();
  const [attacking, setAttacking] = useState();
  const [attacker, setAttacker] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setNewFirstPlayerHealth(firstPlayerHealth);
    setNewBotPlayerHealth(botPlayerHealth);
    setAttacking(attack);
    setPlayerDamage(damage);
  }, [firstPlayerHealth, botPlayerHealth, damage, attack, attacker]);

  console.log(attacking, attacker, botName, playerName);

  console.log(attacking, attacker, botName, playerName, damage);

  const newGame = () =>{
    navigate("/")
  }

  return (
    <>
      <div className="contenteditable">
        <div className="attacker">
          {attack === 1 ? (
            <h2>
              <b>{botName}</b> attacks{" "}
            </h2>
          ) : (
            <h2>
              <b>{playerName}</b> attacks
            </h2>
          )}
        </div>
        <div className="daten">
          <div className="player-daten">
            <h2>
              <b>Player1:</b>
              {playerName}
            </h2>
            {/* <h4>{newFirstPlayerHealth}</h4> */}
            {newFirstPlayerHealth < 0 ? (
              <h4>Health: 0</h4>
            ) : (
              <h4>Health: {newFirstPlayerHealth}</h4>
            )}
            {/* {attack === 1 ? <h2>{playerDamage}</h2> : <h2>{botDamage}</h2>} */}
          </div>

          <div className="bot-daten">
            <h2>
              <b>Player2:</b>
              {botName}
            </h2>
            {/* <h4>{newBotPlayerHealth}</h4> */}
            {newBotPlayerHealth < 0 ? (
              <h4>Health: 0</h4>
            ) : (
              <h4>Health:{newBotPlayerHealth}</h4>
            )}
            {/* <h2>{botDamage}</h2> */}
          </div>
        </div>
        <br />
        <div className="won-loose">
          <div>
            {newBotPlayerHealth === 0 ? (
              <h1 className="youwon">You have Won</h1>
            ) : (
              <h4></h4>
            )}
          </div>
          <div>
            {newBotPlayerHealth === 0 ? (
              <button className="newGame" onClick={newGame}>New Game</button>
            ) : (
              <h4></h4>
            )}
          </div>
          <div>
            {newFirstPlayerHealth === 0 ? (
              <h1>
                {botName} has Won!!!
              </h1>
            ) : (
              <h4></h4>
            )}
          </div>
          <div>
            {newFirstPlayerHealth === 0 ? (
              <button className="newGame" onClick={newGame}>New Game</button>
            ) : (
              <h4></h4>
            )}
          </div>
        </div>

        <br />
      </div>
    </>
  );
};

export default Blackboard;
