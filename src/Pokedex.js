import { useState } from 'react';
import PokemonDetails from './PokemonDetails';
import useFetch from './useFetch';

const Pokedex = () => {
  const [query, setQuery] = useState('');
  const [url, setUrl] = useState(null);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    let param = query.toString()
    setUrl('https://pokeapi.co/api/v2/pokemon/' + param);
  };
  
  const { data: pokemon, isPending, error } = useFetch(url);
  
  return (
    <div>
      <h2>Pokedex</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
     {pokemon && <PokemonDetails pokemon={pokemon}/>}
    </div>
  );
};

export default Pokedex;
