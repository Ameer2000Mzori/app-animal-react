import React, { useRef } from 'react'

export const Card = () => {
  const addLikeRef = useRef(null)
  const addLike = () => {
    console.log('addLike')
  }
  return (
    <div>
      <img src="" alt="" />
      <img ref={addLikeRef} onClick={addLike} src="" alt="" />
    </div>
  )
}
