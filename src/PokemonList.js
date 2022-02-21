import React from "react";

export const PokemonList = ({ pokemon }) => {
    
    return (
        <div onClick={console.log('haha')}>
            {pokemon.map(p => (
                <div key={p}>{p}</div>
            ))}
        </div>
    );
};