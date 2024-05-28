import * as React from 'react';
import './Course.scss';
import { CourseProps } from '~types/types';

const Course = ({ name, image, bgColor }: CourseProps) => {
  return (
    <article className="course">
      <figure className="image-wrapper" style={{ background: bgColor }}>
        <img src={image} className="image" alt={name}/>
      </figure>
      <header className="title">
        <h2 className="text">{name}</h2>
      </header>
    </article>
  )
}

export default Course;
