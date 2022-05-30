import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import Pagination from "./Pagination";

const Results = () => {
  const [results, setResults] = useState(); //represents the articles we get as response
  const [articlesPerPage] = useState(15); //defining how many articles per page we want
  const [currentPage, setCurrentPage] = useState(1); //defining that we will start at page 1
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  //const mockUpJSON = "./hackernews.json";
  const url = `https://pokemonfightbackend.herokuapp.com/api/pokemons`;

  // für Mockup JSON
  // useEffect(() => {
  //     axios.get(mockUpJSON).then((response) => {
  //       setResults(response.data.hits);
  //       console.log(response.data.hits);
  //     });
  //   }, []);

  //für echte API
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setResults(response.data)
        console.log(response)
        if (response.data === 0) {
          alert(
            "There are no news matching your search. Please try another search term."
          );
        }
      })
      .catch((error) => alert(error));
  }, [url]);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <main className="d-flex justify-content-center pb-5">
    <div className="row">
      {results ? (
        results
          .slice(indexOfFirstArticle, indexOfLastArticle)
          .map((result) => (
            <div className={"pokemon-card " + result.type[0].toLowerCase()} id="card" key={result.id}>
                <p className="hp">
                    <span>HP</span>
                    <span>{result.base.HP}</span>
                </p>
            <img src={result.url} alt="pokemon"/>
            <h2 className="poke-name">{result.name.english}</h2>
            <div className="types">
            </div>
            <div className="stats">
            <div>
                <h3>{result.base.Attack}</h3>
                <p>Attack</p>
            </div>
            <div>
                <h3>{result.base.Defense}</h3>
                <p>Defense</p>
            </div>
            <div>
                <h3>{result.base.Speed}</h3>
                <p>Speed</p>
            </div>
            </div>
            <div className="pokemon-button">
              <Link to={`/${result.id}`} className={"btn " + result.type[0].toLowerCase() +"-button"}>Auswählen</Link>
            </div>
            </div>
          ))
      ) : (
        <ClipLoader color="purple" size={150} />
      )}
      {results && (
        <Pagination
          articlesPerPage={articlesPerPage}
          totalNumberOfArticles={results.length}
          paginate={paginate}
        />
      )}
    </div>
    </main>
  );
};

export default Results;