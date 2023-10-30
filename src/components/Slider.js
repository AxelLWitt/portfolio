import React, { useRef, useEffect, useState } from 'react';
import SliderElement from './SliderElement';
import { projects } from '../data/projects';

export default function Slider() {
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentTranslateX, setCurrentTranslateX] = useState(0);

  useEffect(() => {
    const handleMouseDown = e => {
      setIsDragging(true);
      setStartX(e.clientX);
    };

    const handleMouseMove = e => {
      if (!isDragging) return;

      const moveX = e.clientX - startX;
      const newTranslateX = currentTranslateX + moveX;
      const restrictTrack = Math.max(Math.min(newTranslateX, 0), -100)
      setStartX(e.clientX);
      setCurrentTranslateX(restrictTrack);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    // Clean up the event listeners when the component unmounts.
    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, startX, currentTranslateX]);

  return (
    <div 
      className='image-slider' 
      ref={sliderRef} 
      style={{ transform: `translateX(${currentTranslateX}px)` }}
    >
      {projects.map((project, index) => (
        <SliderElement key={index} project={project}/>
      ))}
    </div>
  );
}

