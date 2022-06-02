import axios from "axios";
import { useEffect, useState } from "react";
import PokeBallButton from "./PokeBallButton";
import { useParams } from "react-router-dom";

const Fight = () => {
  //{ pokemonID }
  const [firstPlayer, setFirstPlayer] = useState("");
  const [botPlayer, setBotPlayer] = useState("");
  //const { pokemonID } = useParams();
  
  const startFight = "Ready for the Fight!!";
  const { id } = useParams();

  // let boterStyleClasses = ["figure-img", "img-fluid",  "rounded", "pokImage"]
  // let playerStyleClasses = ["figure-img", "img-fluid",  "rounded", "pokImage"]
  
  useEffect(() => {
    const randomPokemon = Math.floor(Math.random() * 90)
   
    const  firstPlayer  =  axios.get(
      `https://pokemonfightbackend.herokuapp.com/api/pokemons/${id}`
    );
    const botPlayer = axios.get(
      `https://pokemonfightbackend.herokuapp.com/api/pokemons/${randomPokemon}`
    );
    
    axios.all([firstPlayer, botPlayer]).then(
      axios.spread( (res1, res2) => {
        setFirstPlayer(res1.data);
        setBotPlayer(res2.data);
      })
    )//.catch(res => res.status(404).then(err => err.send("This pokemon iost not availabe, please choose another pokemon!")))
  }, []);

  // /*Change the Background Image for Cards*/
  // if(firstPlayer && botPlayer){
  //   const firstPlayerType = firstPlayer.type[0]
  //   switch(firstPlayerType){
  //     case "Electric": playerStyleClasses.push("electric")
  //     break;
  //     case "Water": playerStyleClasses.push("water")
  //     break;
  //     case "Steel": playerStyleClasses.push("steel")
  //     break;
  //     case "Rock": playerStyleClasses.push("rock")
  //     break;
  //     case "Poison": playerStyleClasses.push("poison")
  //     break;
  //     case "Ice": playerStyleClasses.push("ice")
  //     break;
  //     case "Ground": playerStyleClasses.push("ground")
  //     break;
  //     case "Grass": playerStyleClasses.push("grass")
  //     break;
  //     case "Flying": playerStyleClasses.push("flying")
  //     break;
  //     case "Fire": playerStyleClasses.push("fire")
  //     break;
  //     case "Fairy": playerStyleClasses.push("fairy")
  //     break;
  //     default: playerStyleClasses.push("")
  //   }

  //   const botPlayerType = botPlayer.type[0]
  //   switch(botPlayerType){
  //     case "Electric": boterStyleClasses.push("electric")
  //     break;
  //     case "Water": boterStyleClasses.push("water")
  //     break;
  //     case "Steel": boterStyleClasses.push("steel")
  //     break;
  //     case "Rock": boterStyleClasses.push("rock")
  //     break;
  //     case "Poison": boterStyleClasses.push("poison")
  //     break;
  //     case "Ice": boterStyleClasses.push("ice")
  //     break;
  //     case "Ground": boterStyleClasses.push("ground")
  //     break;
  //     case "Grass": boterStyleClasses.push("grass")
  //     break;
  //     case "Flying": boterStyleClasses.push("flying")
  //     break;
  //     case "Fire": boterStyleClasses.push("fire")
  //     break;
  //     case "Fairy": boterStyleClasses.push("fairy")
  //     break;
  //     default: boterStyleClasses.push("")
  //   }
  // }
  
 
  
  return (
    <>
    <header>
    <img src="./banner.png" id="header-img" alt="banner"/>
    </header>
      {(firstPlayer && botPlayer) &&
      <div className="container main">
        <div className="row d-flex my-5 justify-content-between text-center">
        </div>
        <PokeBallButton firstPlayer={firstPlayer} botPlayer={botPlayer}/>
      </div>
      } 
    </>
  );
};

export default Fight;
