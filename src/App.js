import './App.css';
//import Searchbar from './components/Searchbar';
import Results from './components/Results';
import { Routes, Route} from 'react-router-dom';
import Fight from './components/Fight.js';

function App() {

  return (
      <div className="container">
        <header className="d-flex justify-content-center my-4">
          <h1>PokeFight</h1>
        </header>
        <Routes>
          <Route path="/" element={<Results />} />
          <Route path="/:id" element={<Fight />} />
        </Routes>
      </div>
    );
  }

export default App;
