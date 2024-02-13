import { useRef } from 'react'
import heart from '../assets/heart.svg'
const Card = (props) => {
  const addLikeRef = useRef(null)

  let heartHight = 25
  const addLike = () => {
    if (addLikeRef.current) {
      if (heartHight < 200) {
        heartHight += 25
        addLikeRef.current.style.height = `${heartHight}px`
        addLikeRef.current.style.width = `${heartHight}px`
        console.log('addLike')
      } else {
        heartHight = 25
      }
    } else {
      console.log('not addLikeRef')
    }
  }
  return (
    <div>
      <img src={props.img} alt="" />
      <p>{props.name}</p>
      <img
        className="h-[50px] w-[50px]"
        ref={addLikeRef}
        onClick={addLike}
        src={heart}
        alt=""
      />
    </div>
  )
}

export default Card
