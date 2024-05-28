import * as React from 'react'
import Course from '../Course/Course'
import './Courses.scss'
import { CourseType, ICoursesProps } from '~types/types';

const Courses = React.memo(({courses}: ICoursesProps) => {
  const chunkArray = (array: CourseType[], chunkSize: number) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  };

  const courseRows = chunkArray(courses, 3);

  return (
    <section className="courses">
      {courseRows.map((courseRow, rowIndex) => (
        <div className="row" key={rowIndex}>
          {courseRow.map((course: CourseType) => (
            <Course key={course.id} {...course} />
          ))}
        </div>
      ))}
    </section>
  );
});

export default Courses;
