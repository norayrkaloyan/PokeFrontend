import axios from "axios";
import { useEffect, useState } from "react";
import PokeBallButton from "./PokeBallButton";
import ProgressBar from "./ProgressBar";

const Fight = () => {
  //{ pokemonID }
  const [firstPlayer, setFirstPlayer] = useState("");
  const [botPlayer, setBotPlayer] = useState("");
  //const { pokemonID } = useParams();
  
  const startFight = "Ready for the Fight!!";
  const pokemonID = 25;

  // let boterStyleClasses = ["figure-img", "img-fluid",  "rounded", "pokImage"]
  // let playerStyleClasses = ["figure-img", "img-fluid",  "rounded", "pokImage"]
  
  useEffect(() => {
    const randomPokemon = Math.floor(Math.random() * 90)

    const  firstPlayer =  axios.get(
      `https://pokemonfightbackend.herokuapp.com/api/pokemons/${pokemonID}`
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
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-6 ">
            <img
                src= "./banner.png"
                alt="banner"
              />
            </div>
            </div>
            <div className="row d-flex justify-content-center">
          <div className="col-4 text-center ">
            <h1 className="d py-5  "> {startFight} </h1>
          </div>
        </div>
      </div>
      
      {(firstPlayer && botPlayer) &&
      <div className="container main">
        <div className="row d-flex my-5 justify-content-between text-center">
          <div className="col-4 ">          
            <figure className="figure">
            <h3 className="pb-2">{firstPlayer.name.english}{firstPlayer.name.japanese}</h3>
              <img
                src={firstPlayer.url}
                className= {"figure-img img-fluid  rounded pokImage" + " " + firstPlayer.type[0].toLowerCase()}
                alt="pokemon"
              />
              <ProgressBar />
              <figcaption className="figure-caption text-start">             
              <hr/>
                <p><strong>HP</strong> : {firstPlayer.base.HP}</p><hr/>
                <p><strong>Attack</strong> : {firstPlayer.base.Attack}</p><hr/>
                <p><strong>Defense</strong> : {firstPlayer.base.Defense}</p><hr/>
                <p><strong>Sp. Attack</strong> : {firstPlayer.base["Sp. Attack"]}</p><hr/>
                <p><strong>Sp. Defense</strong> : {firstPlayer.base["Sp. Defense"]}</p><hr/>
                <p><strong>Speed</strong> : {firstPlayer.base.Speed}</p>
              </figcaption>
            </figure>
          </div>
          <div className="col-4">
            <figure className="figure">
              <h3 className="pb-2">{botPlayer.name.english}{botPlayer.name.japanese}</h3>
              <img
                src={botPlayer.url}
                className= {"figure-img img-fluid  rounded pokImage" + " " + botPlayer.type[0].toLowerCase()}
                alt="pokemon"
              />
              <ProgressBar />
              <figcaption className="figure-caption text-end">
              <hr/>
                <p>{botPlayer.base.HP} : <strong>HP</strong></p><hr/>
                <p>{botPlayer.base.Attack} : <strong>Attack</strong></p><hr/>
                <p> {botPlayer.base.Defense} : <strong>Defense</strong></p><hr/>
                <p> {botPlayer.base["Sp. Attack"]} : <strong>Sp. Attack</strong></p><hr/>
                <p>{botPlayer.base["Sp. Defense"]} : <strong>Sp. Defense</strong></p><hr/>
                <p> {botPlayer.base.Speed} : <strong>Speed</strong></p>
              </figcaption>
            </figure>
          </div>
        </div>
        <PokeBallButton />
      </div>
      } 
    </>
  );
};

export default Fight;
