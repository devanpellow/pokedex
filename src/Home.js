import { useState } from 'react';
import Pokedex from './Pokedex';

const Home = () => {
  const [query, setQuery] = useState('');
  const [url, setUrl] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    let param = query.toString().toLocaleLowerCase();
    setUrl('https://pokeapi.co/api/v2/pokemon/' + param);
  };

  const handleRandom = () => {
    let param = (Math.floor(Math.random() * 932) + 1).toString();
    setUrl('');
    setUrl('https://pokeapi.co/api/v2/pokemon/' + param);
  };

  return (
    <>
      <div className="logo-header bg-center h-28 bg-contain bg-no-repeat"></div>
      <form className="my-4" onSubmit={handleSubmit}>
        <input
          placeholder="Name or #"
          className="w-28 h-8 bg-blue-300 border-2 border-gray-700 rounded-md shadow-lg text-center"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="text-gray-900 " type="submit"></button>
      </form>
      <span
        className="masterball cursor-pointer bg-center bg-contain bg-no-repeat outline-none"
        type="Random"
        onClick={() => handleRandom()}
      ></span>
      <Pokedex url={url} />
    </>
  );
};

export default Home;
