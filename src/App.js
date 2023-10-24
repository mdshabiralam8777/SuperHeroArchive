import './App.css';
import SuperHero from './components/SuperHero.js';
import SuperHeroSearch from './components/superHeroSearch.js';

function App() {
  return (
    <div className='App'>
      <SuperHero/>
      <SuperHeroSearch/>
      <div>
      <i className="bi bi-search"></i>
      </div>
    </div>
  );
}

export default App;
