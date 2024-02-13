import { useRef } from 'react'
import heart from '../assets/heart.svg'
const Card = (props) => {
  const addLikeRef = useRef(null)
  const addLike = () => {
    console.log('addLike')
  }
  return (
    <div>
      <img src={props.img} alt="" />
      <p>{props.name}</p>
      <img ref={addLikeRef} onClick={addLike} src={heart} alt="" />
    </div>
  )
}

export default Card
