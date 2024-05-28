import * as React from "react";
import Courses from "~components/Courses/Courses";
import Tags from "~components/Tags/Tags";
import './App.scss';
import { CourseType } from "~types/types";
import { ALL_TAGS } from "~constants/constants";
import { fetchCourses, getUniqueTags } from "~helpers/helpers";
import Error from "~components/Error/Error";
import Loader from "~components/Loader/Loader";

const App = () => {
  const [courses, setCourses] = React.useState<CourseType[]>([]);
  const [tags, setTags] = React.useState<string[]>([]);
  const [selectedTag, setSelectedTag] = React.useState<string>(ALL_TAGS);
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    fetchCourses().then(courses => {
      setCourses(courses);
      setTags(getUniqueTags(courses));
      setError(null);
    })
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, []);

  const handleTagSelect = React.useCallback((tag: string) => {
    setSelectedTag(tag);
  }, [setSelectedTag]);

  const filteredCourses = React.useMemo(() => {
    return selectedTag === ALL_TAGS ? courses :
      courses.filter(course => course.tags.includes(selectedTag));
  }, [courses, selectedTag]);

  if (loading) { return <Loader /> };
  if (error) { return <Error error={error} /> };

  return (
    <div className="app">
      <main className="container">
        <Tags tags={tags} handleTagSelect={handleTagSelect} selectedTag={selectedTag} />
        <Courses courses={filteredCourses} />
      </main>
    </div>
  )
};

export default App;
