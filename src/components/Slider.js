import React from 'react'
import SliderElement from './SliderElement'
import { projects } from '../data/projects'

export default function slider() {
  // window.SliderElement

  return (
    <div className='image-slider'>
      <h3>test test</h3>
        {projects.map((project) => {
          {console.log(project)}
            <SliderElement data={project}/>
        })}
    </div>
  )
}
