import { COURSES_URL } from "~constants/constants";
import { CourseType } from "~types/types";

export const getUniqueTags = (courses: CourseType[]) => {
  const allTags = courses.flatMap((course: CourseType) => course.tags);

  return [...new Set<string>(allTags)];
}

export const fetchCourses = async () => {
  try {
    const response = await fetch(COURSES_URL);

    return await response.json();
  } catch (err) {
    console.log(err);
  }
}
