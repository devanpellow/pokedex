import './App.css';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <div className="pageWrapper h-screen bg-cover bg-no-repeat flex flex-col justify-center">
        <Home />
        <div><a href="https://github.com/devanpellow/pokedex" target="_blank">GITHUB REPO</a></div>
      </div>
    </div>
  );
}

export default App;
