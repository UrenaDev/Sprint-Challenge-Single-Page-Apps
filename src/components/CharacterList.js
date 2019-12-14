import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import axios from "axios";
import styles from "styled-components";
import { Link } from "react-router-dom";

const Buttons = styles.button`
  background-color: blue;
  color: white;
`;

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
const [character, setCharacter] = useState([]);
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
    .get("https://rickandmortyapi.com/api/character/")
    .then(response => {
      setCharacter(response.data.results);
      console.log(response);
    })
    .catch(error => {
      console.error("Server Error", error);
    });

  }, []);

  return (
    <section className="character-list">
      <Link to="/">
        <Buttons>Home</Buttons>
      </Link>
      <Link to="/Search">
        <Buttons>Search</Buttons>
      </Link>
      {character.map(ind => (
       <CharacterCard key={ind.id} name={ind.name} species={ind.species} status={ind.status} />
      ))}
    </section>
  );
}
