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
    <div className="w-[250px] h-[250px] relative bg-slate-700 text-center items-center flex flex-col justify-evenly">
      <img src={props.img} alt="" className="h-[150px] w-[150px]" />
      <p>{props.name}</p>
      <img
        className="h-[50px] w-[50px] absolute left-0 bottom-0"
        ref={addLikeRef}
        onClick={addLike}
        src={heart}
        alt=""
      />
    </div>
  )
}

export default Card
