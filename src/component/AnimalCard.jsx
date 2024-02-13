import React from 'react'
import Card from './Card'

const AnimalCard = () => {
  const animalObjs = [
    {
      name: 'Dog',
      img: 'dog.png',
    },
    {
      name: 'cow',
      img: 'cow.png',
    },
  ]

  return (
    <>
      <button className="w-[100px] h-[30px] bg-black text-white">
        add animal
      </button>
      {animalObjs.map((animal, index) => (
        <Card key={index} name={animal.name} img={animal.img} />
      ))}
    </>
  )
}

export default AnimalCard
