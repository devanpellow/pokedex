import { useState } from 'react';
import PokemonDetails from './PokemonDetails';
import useFetch from './useFetch';

const Pokedex = () => {
  const [query, setQuery] = useState('');
  const [url, setUrl] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    let param = query.toString();
    setUrl('https://pokeapi.co/api/v2/pokemon/' + param);
  };

  const { data: pokemon, isPending, error } = useFetch(url);

  return (
    <div className="pageWrapper flex flex-col justify-around h-screen bg-cover bg-no-repeat">
      <h2>Pokedex</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div className="pokedex flex bg-gradient-to-r from-red-600 via-red-800 to-red-500 bg-red-600 mx-auto rounded-3xl shadow-inner border-l-8 border-b-8 border-red-900">
        <div className="left w-1/2 flex flex-col justify-between">
          <div className="bg-red-800 flex items-start py-4 border-b-4 border-red-900 pb-3 rounded-t-3xl">
            <div className="lg-light ml-4 mr-2 bg-gradient-to-r from-blue-200 to-blue-400 border-2 rounded-full"></div>
            <div className="sm-light mx-1 bg-gradient-to-r from-red-300  bg-red-600 border border-gray-400 rounded-full"></div>
            <div className="sm-light mx-1 bg-gradient-to-r from-yellow-300 to-yellow-600 border border-gray-400 rounded-full"></div>
            <div className="sm-light mx-1 bg-gradient-to-r from-green-300 to-green-600 border border-gray-400 rounded-full"></div>
          </div>
          <div className="flex flex-col w-3/4 bg-gray-300 mx-auto rounded-2xl pt-4 px-4">
            <div className="h-40">
              {pokemon && (
                <img
                  className="border-2 border-black rounded-md bg-white"
                  src={pokemon.sprites.other.dream_world.front_default}
                  alt=""
                />
              )}
              {!pokemon && (
                <img
                  className="border-2 border-black rounded-md bg-gray-300"
                  src="/Users/devansmacbook/code/pokedex/src/assets/pokeball.png"
                  alt=""
                />
              )}
            </div>
            <div className="flex justify-between items-center">
              <div className="md-light bg-gradient-to-r from-red-500 to-red-600 border-2 rounded-full"></div>
              <div className="flex py-1">
                <div className="mr-2">
                  <div className="w-6 h-1 my-1 bg-gray-600"></div>
                  <div className="w-6 h-1 my-1 bg-gray-600"></div>
                  <div className="w-6 h-1 my-1 bg-gray-600"></div>
                </div>
                <div>
                  <div className="w-6 h-1 my-1 bg-gray-600"></div>
                  <div className="w-6 h-1 my-1 bg-gray-600"></div>
                  <div className="w-6 h-1 my-1 bg-gray-600"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-around">
            <div className="lg-light ml-4 mr-2 bg-gradient-to-r from-blue-700 to-blue-900 rounded-full"></div>
            <div className="flex">
              <div className="w-10 h-2 mx-2 rounded-full bg-gradient-to-r from-green-500 to-green-400"></div>
              <div className="w-10 h-2 mx-2 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-400"></div>
            </div>
          </div>
          <div className="flex items-center justify-evenly">
            <div className="h-12 w-20 bg-gradient-to-r from-green-500 to-green-400 rounded border-2 border-gray-400"></div>
          </div>
        </div>
        <div className="w-8 flex flex-col justify-between border-l border-r border-red-900 shadow-2xl ">
          <div className="h-20 w-full bg-gradient-to-r from-red-500 to-red-900 border-b-4 border-red-900"></div>
          <div className="h-20 w-full bg-gradient-to-r from-red-500 to-red-900 border-b-2 border-red-900"></div>
          <div className="h-16 w-full bg-gradient-to-r from-red-500 to-red-900 border-b-2 border-red-900"></div>
        </div>
        <div className="right w-1/2"></div>
      </div>
    </div>
  );
};

export default Pokedex;
