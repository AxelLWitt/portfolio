import React from 'react'

export default function SliderElement({project}) {
  return (
    <div className='silder-photo'>
        <img className='element' src={project.image} alt='test' draggable='false'/>
    </div>
  )
}
