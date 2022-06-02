import React, { useEffect } from "react";
import "../pokeBall.css";
import { useState } from "react";
import Progress from "./ProgressBarMb";
import Blackboard from "./Blackboard";
import { useNavigate } from "react-router-dom";

const PokeBallButton = (props) => {
  const [firstPlayerDamage, setFirstPlayerDamage] = useState();
  const [botPlayerDamage, setBotPlayerDamage] = useState();
  const [firstPlayerDefense, setFirstPlayerDefense] = useState();
  const [botPlayerDefense, setBotPlayerDefense] = useState();
  const [firstPlayerHealth, setFirstPlayerHealth] = useState();
  const [botPlayerHealth, setBotPlayerHealth] = useState();
  const [attack,setAttack] = useState();
  const [damage,setDamage] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    setBotPlayerDamage(
      Math.floor(
        (props.botPlayer.base.Attack +
          props.botPlayer.base["Sp. Attack"] +
          props.botPlayer.base.Speed) /
          3
      )
    );
    setBotPlayerDefense(
      Math.floor(
        (props.botPlayer.base.Defense +
          props.botPlayer.base["Sp. Defense"] +
          props.botPlayer.base.HP) /
          3
      )
    );

    setFirstPlayerDamage(
      Math.floor(
        (props.firstPlayer.base.Attack +
          props.firstPlayer.base["Sp. Attack"] +
          props.firstPlayer.base.Speed) /
          3
      )
    );
    setFirstPlayerDefense(
      Math.floor(
        (props.firstPlayer.base.Defense +
          props.firstPlayer.base["Sp. Defense"] +
          props.firstPlayer.base.HP) /
          3
      )
    );
    setFirstPlayerHealth(100);
    setBotPlayerHealth(100);
    setAttack(getFirstAttack());
    setDamage(botPlayerDamage - firstPlayerDefense);

  }, [props.botPlayer.base, props.firstPlayer.base]);

  const getFirstAttack = () => {
    return Math.floor(Math.random() * 2);
  };

  const fight = () => {
    setAttack(getFirstAttack());
    setDamage(botPlayerDamage - firstPlayerDefense);

    
    if (attack) {
      // let damage = botPlayerDamage - firstPlayerDefense;
      if (damage > 0) {
        if (damage >= firstPlayerHealth) {
          damage = firstPlayerHealth;
        }
        setFirstPlayerHealth(firstPlayerHealth - damage);
        console.log(
          `1: botPlayerDamage: ${botPlayerDamage} firstPlayerDEFENSE: ${firstPlayerDefense} firstHeath:${firstPlayerHealth} dmage: ${damage}`
        );
        console.log(
          `attacke: ${props.botPlayer.base.Attack} SP-Attacke: ${props.botPlayer.base["Sp. Attack"]}, Speed:${props.botPlayer.base.Speed}`
        );
      } else {
        if (damage >= firstPlayerHealth) {
          damage = firstPlayerHealth;
        }
        let randomDamage = Math.floor(Math.random() * 10 + 5);
        setFirstPlayerHealth(firstPlayerHealth - randomDamage);
        console.log(`randomDamage: ${randomDamage}`);
        console.log(
          `1: botPlayerDamage: ${botPlayerDamage} firstPlayerDEFENSE: ${firstPlayerDefense} firstHeath:${firstPlayerHealth} dmage: ${damage}`
        );
        console.log(
          `attacke: ${props.botPlayer.base.Attack} SP-Attacke: ${props.botPlayer.base["Sp. Attack"]}, Speed:${props.botPlayer.base.Speed}`
        );
      }
    } else {
      let damage = firstPlayerDamage - botPlayerDefense;
      if (damage > 0) {
        if (damage >= botPlayerHealth) {
          damage = botPlayerHealth;
        }
        setBotPlayerHealth(botPlayerHealth - damage);
        console.log(
          `0: firstPlayerDamage: ${firstPlayerDamage} botPlayerDEFENSE: ${botPlayerDefense} botHeath:${botPlayerHealth} dmage: ${damage}`
        );
        console.log(
          `attacke: ${props.firstPlayer.base.Attack} SP-Attacke: ${props.firstPlayer.base["Sp. Attack"]}, Speed:${props.firstPlayer.base.Speed}`
        );
      } else {
        if (damage >= botPlayerHealth) {
          damage = botPlayerHealth;
        }
        setBotPlayerHealth(
          botPlayerHealth - Math.floor(Math.random() * 10 + 5)
        );
        console.log(
          `0: firstPlayerDamage: ${firstPlayerDamage} botPlayerDEFENSE: ${botPlayerDefense} botHeath:${botPlayerHealth} dmage: ${damage}`
        );
        console.log(
          `attacke: ${props.firstPlayer.base.Attack} SP-Attacke: ${props.firstPlayer.base["Sp. Attack"]}, Speed:${props.firstPlayer.base.Speed}`
        );
      }
    }
    // if(firstPlayerHealth === 0){
    //   navigate("/Loose")
    // }
    // if(botPlayerHealth === 0){
    //   navigate("/Won")
    // }
  };
  return (
    <>
      <div className="row">
       {(attack!== null) && 
        <Blackboard
          firstPlayerHealth={firstPlayerHealth}
          botPlayerHealth={botPlayerHealth}
          botPlayerDamage={props.botPlayerDamage}
          firstPlayerDamage={firstPlayerDamage}
          playerName={props.firstPlayer.name.english}
          botName={props.botPlayer.name.english}
          attack={attack}
          damage={damage}
        />}

        <div className="col-sm-4 text-center pokemon-picture">
          <img
            src={props.firstPlayer.urlComic}
            className={"figure-img img-fluid  rounded pokImage"}
            alt="pokemon"
          />
          <h2 className="pokemon-name">{props.firstPlayer.name.english}</h2>
          <Progress done={firstPlayerHealth} />
        </div>
        <div className="col-sm-4 text-center">
          <img
            src="./vs.png"
            className={"figure-img img-fluid  rounded"}
            id="pokemon-vs"
            alt="pokemon"
          />
        </div>
        <div className="col-sm-4 text-center">
          <img
            src={props.botPlayer.urlComic}
            className={"figure-img img-fluid  rounded pokImage"}
            alt="pokemon"
          />
          <h2 className="pokemon-name">{props.botPlayer.name.english}</h2>
          <Progress done={botPlayerHealth} />
        </div>
      </div>
      <div className="center-on-page">
        <div className="pokeball" onClick={fight}>
          <div className="pokeball__button"></div>
        </div>
      </div>
    </>
  );
};

export default PokeBallButton;
