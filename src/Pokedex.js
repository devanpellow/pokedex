import useFetch from './useFetch';
import { useEffect, useState } from 'react';

const Pokedex = ({ url }) => {
  const { data: pokemon, isPending, error } = useFetch(url);

  const [shiny, setShiny] = useState(false);

  useEffect(() => {
    setShiny(false);
  }, [url]);
  
  const toggleShiny = () => {
    setShiny((prevShiny) => !prevShiny);
  };

  return (
    <div className="flex flex-col justify-around">
      <div className="pokedex flex bg-gradient-to-r from-red-600 via-red-800 to-red-500 bg-red-600 mx-auto rounded-3xl shadow-inner border-l-8 border-b-4 border-red-900">
        <div className="left w-1/2 flex flex-col justify-between">
          <div className="bg-red-800 flex items-start py-4 border-b-4 border-red-900 pb-3 rounded-t-3xl">
            <div className="lg-light ml-4 mr-2 bg-gradient-to-r from-blue-200 to-blue-400 border-2 rounded-full"></div>
            <div className="sm-light mx-1 bg-gradient-to-r from-red-300  bg-red-600 border border-gray-400 rounded-full"></div>
            <div className="sm-light mx-1 bg-gradient-to-r from-yellow-300 to-yellow-600 border border-gray-400 rounded-full"></div>
            <div className="sm-light mx-1 bg-gradient-to-r from-green-300 to-green-600 border border-gray-400 rounded-full"></div>
          </div>
          <div className="flex flex-col w-3/4 bg-gray-300 mx-auto border border-gray-400 rounded-2xl pt-4 px-4">
            <div className="h-40">
              {pokemon && !shiny && (
                <img
                  className="border-2 border-black rounded-md bg-white"
                  src={pokemon.sprites.other.dream_world.front_default}
                  alt=""
                />
              )}
              {pokemon && shiny && (
                <img
                  className="border-2 border-black rounded-md bg-white"
                  src={pokemon.sprites.front_shiny}
                  alt=""
                />
              )}
              {!pokemon && (
                <div className="place-holder-ball bg-white bg-contain bg-no-repeat bg-center border-2 border-black rounded-md"></div>
              )}
            </div>
            <div className="flex justify-between items-center">
              <div
                onClick={toggleShiny}
                className="md-light cursor-pointer bg-gradient-to-r from-red-500 to-red-600 border-2 rounded-full"
              ></div>
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
            <div className="lg-light ml-4 mr-2 bg-gradient-to-r from-blue-700 to-blue-900 rounded-full border-2 border-gray-600"></div>
            <div className="flex">
              <div className="w-12 h-3 mx-2 rounded-full bg-gradient-to-r from-green-500 to-green-400 border border-gray-500"></div>
              <div className="w-12 h-3 mx-2 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-400 border border-gray-500"></div>
            </div>
          </div>
          <div className="flex items-center justify-evenly mb-4">
            <div className="h-12 w-20 bg-gradient-to-r from-green-500 to-green-400 rounded border-2 border-gray-400 flex justify-center items-center">
              {pokemon && (
                <div className="text-xl">{pokemon.base_experience}</div>
              )}
            </div>
            <div className="flex items-center">
              <div className="w-6 h-6 bg-black border-l border-t border-b border-gray-500 shadow-lg"></div>
              <div className="w-6 h-16 bg-black border-b border-t border-gray-500 shadow-lg"></div>
              <div className="w-6 h-6 bg-black border-r border-t  border-b border-gray-500 shadow-lg"></div>
            </div>
          </div>
        </div>
        <div className="w-8 flex flex-col justify-between border-l border-r border-red-900 shadow-2xl ">
          <div className="h-20 w-full bg-gradient-to-r from-red-500 to-red-900 border-b-4 border-red-900"></div>
          <div className="h-20 w-full bg-gradient-to-r from-red-500 to-red-900 border-b-2 border-red-900"></div>
          <div className="h-16 w-full bg-gradient-to-r from-red-500 to-red-900 border-b-2 border-red-900"></div>
        </div>
        <div className="right w-1/2 flex flex-col justify-around items-center">
          <div className="h-1/4 w-3/4 bg-gradient-to-r from-green-500 to-green-400 rounded border-2 border-gray-400 flex flex-col justify-center items-center">
            {pokemon && (
              <div className="text-xl capitalize">{pokemon.name}</div>
            )}
            {pokemon && (
              <div className="text-lg">{(pokemon.height / 10).toFixed(2)}m</div>
            )}
            {isPending && <div className="text-lg">Calculating...</div>}
          </div>
          <div>
            <div className="flex flex-row">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg border border-gray-700 shadow-lg"></div>
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg border border-gray-700 shadow-lg"></div>
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg border border-gray-700 shadow-lg"></div>
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg border border-gray-700 shadow-lg"></div>
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg border border-gray-700 shadow-lg"></div>
            </div>
            <div className="flex flex-row">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg border border-gray-700 shadow-lg"></div>
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg border border-gray-700 shadow-lg"></div>
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg border border-gray-700 shadow-lg"></div>
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg border border-gray-700 shadow-lg"></div>
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg border border-gray-700 shadow-lg"></div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="xs-light rounded-full bg-gradient-to-r from-green-800 to-green-900 border border-gray-500 mr-4"></div>
            <div className="xs-light rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 border border-gray-500 mr-10"></div>
            <div className="w-12 h-3 mx-2 rounded-full bg-gradient-to-r from-green-500 to-green-400 border border-gray-500"></div>
            <div className="w-12 h-3 mx-2 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-400 border border-gray-500"></div>
          </div>
          <div className="flex flex-row justify-between w-full px-8">
            <div className="flex flex-row">
              <div className="flex justify-center w-12 h-8 bg-gradient-to-r from-gray-400 to-gray-500 rounded-md border border-gray-700 shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#8b0000"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </div>
              <div className="flex justify-center w-12 h-8 bg-gradient-to-r from-gray-400 to-gray-500 rounded-md border border-gray-700 shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#8b0000"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>

            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-yellow-300 to-yellow-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#8b0000"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="h-8 w-20 mx-4 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded border border-red-600 shadow-lg flex justify-center items-center">
              {pokemon && (
                <div className="text-xl">{pokemon.base_experience}</div>
              )}
            </div>
            <div className="h-8 w-20 mx-4 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded border border-red-600 shadow-lg flex justify-center items-center">
              {pokemon && (
                <div className="text-xl">{pokemon.base_experience}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokedex;
