import { useState, useEffect } from 'react'
import Card from './Card'

const AnimalCard = () => {
  const [animalsObj, setAnimalsObj] = useState([
    {
      name: 'Dog',
      img: 'dog.png',
    },
    {
      name: 'cow',
      img: 'cow.png',
    },
  ])

  const addNewAnimal = () => {
    const newAnimal = {
      name: 'car',
      img: 'car.png',
    }

    setAnimalsObj((animalsObj) => [...animalsObj, newAnimal])
    console.log(animalsObj)
  }

  return (
    <>
      <button
        onClick={addNewAnimal}
        className="w-[100px] h-[30px] bg-black text-white"
      >
        add animal
      </button>
      {animalsObj.map((animal, index) => (
        <Card key={index} name={animal.name} img={animal.img} />
      ))}
    </>
  )
}

export default AnimalCard
