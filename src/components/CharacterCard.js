import React from "react";

export default function CharacterCard({ character }) {
  const { name, image, id } = character;
  return (
    <div className='characterCard' key={id}>
      <img src= {image} />
      <h2> {name} </h2>
    </div>
  );
}
