import { useState } from 'react'
import Card from './Card'
import dog from '../assets/dog.svg'
import cat from '../assets/cat.svg'
import bird from '../assets/bird.svg'
import cow from '../assets/cow.svg'
import horse from '../assets/horse.svg'
import gator from '../assets/gator.svg'

const AnimalCard = () => {
  const [animalsObj, setAnimalsObj] = useState([])

  let animalsArr = [
    {
      name: 'Dog',
      img: dog,
    },
    {
      name: 'Cat',
      img: cat,
    },
    {
      name: 'Bird',
      img: bird,
    },
    {
      name: 'Cow',
      img: cow,
    },
    {
      name: 'Horse',
      img: horse,
    },
    {
      name: 'Gator',
      img: gator,
    },
  ]

  const addNewAnimal = () => {
    const ranNum = Math.floor(Math.random() * animalsArr.length)
    const newAnimal = {
      name: animalsArr[ranNum].name,
      img: animalsArr[ranNum].img,
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
