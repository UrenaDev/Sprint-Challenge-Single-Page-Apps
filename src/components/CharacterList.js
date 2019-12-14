import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard.js';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
const [character, setCharacter] = useState([]);
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
    .get(`https://rickandmortyapi.com/api/character/`)
    .then(response => {
      console.log(response.data.results);
      setCharacter(response.data.results);
    })
    .catch(error => {
      console.error('Server Error, error');
    });

  }, []);

  return (
    <section className="character-list">
      {character.map(character => {
        return <CharacterCard key={character.id} character = {character} />;
      })}
    </section>
  );
}
