import axios from "axios";
import { useState } from 'react'; 

export default function fetchAllPokemon()   {
    const [pokemons, setPokemons] = useState('');
  
const getAllPokemon = () =>  {
axios
    .get('https://pokemonfightbackend.herokuapp.com/api/pokemons')
    .then((response) => setPokemons(response.data))
    .catch((error) => console.log(error))

}

