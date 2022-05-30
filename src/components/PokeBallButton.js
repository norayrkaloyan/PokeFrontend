import React, { useEffect } from "react";
import "../pokeBall.css";
import { useState } from "react";



const PokeBallButton = () => {
  const [damage, setDamage] = useState(0);
  const [health, setHealth] = useState(100);
  const bar = document.querySelector(".progress-bar");

  useEffect( () =>{
    setDamage(10)
  }, []);

  const fight = () =>{
    bar.style.width = (health - damage) + "%";
    setHealth(health - damage);
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
