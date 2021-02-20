const PokemonDetails = ({ pokemon }) => {
  console.log(pokemon);
  return (
    <div>
      <div>{pokemon.name}</div>
      <img src={pokemon.sprites.other.dream_world.front_default} alt="" />
    </div>
  );
};

export default PokemonDetails;
