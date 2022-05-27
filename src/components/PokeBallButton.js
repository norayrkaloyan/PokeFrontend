import React from "react";
import "../pokeBall.css";

const PokeBallButton = () => {
  const fight = () =>{
    console.log("you have clicked the button")
  }
  return (
    <>
      <div class="center-on-page">
        <div class="pokeball" onClick={fight}>
          <div class="pokeball__button"></div>
        </div>
      </div>
    </>
  );
};

export default PokeBallButton;
