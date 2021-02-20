import { useState } from 'react';
import useFetch from './useFetch';

const Pokedex = () => {
  const [query, setQuery] = useState('');
  const [url, setUrl] = useState(null);
  const { data: pokemon, isPending, error } = useFetch(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(query);
    setUrl('https://pokeapi.co/api/v2/pokemon/' + { query });
   
  };
  

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
      {pokemon && (
        <div>
          {pokemon.results.map((p) => (
            <div>{p.name}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Pokedex;
