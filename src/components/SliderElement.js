import React from 'react'

export default function SliderElement({project, placement}) {
  console.log(placement)
  return (
    <div className='silder-photo'>
      <a href={project.deployedurl} draggable='false'>
        <img className='element' src={project.image} alt='test' draggable='false' style={{transform:`translateX(${placement}px)`}}/>
      </a>
    </div>
  )
}
