import './App.css';
//import Searchbar from './components/Searchbar';
import Results from './components/Results';
import { Routes, Route} from 'react-router-dom';
import Fight from './components/Fight.js';

function App() {

  return (
      <div className="container">
        <Routes>
          <Route path="/" element={<Results />} />
          <Route path="/:id" element={<Fight />} />
        </Routes>
      </div>
    );
  }

export default App;
