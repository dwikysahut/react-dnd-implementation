import React from 'react'
import { useDrag } from 'react-dnd'

function BoxCard({ id, name }) {

  const [{ isDragging }, dragRef] = useDrag({
    type: 'pet',
    item: { id, name },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  })
  return (
    <div  ref={dragRef} className='rounded-md cursor-pointer w-[200px] h-[100px] bg-yellow-500 flex justify-center items-center' ><h1 className='text-white'>{name}</h1></div>
  )
}

export default BoxCard