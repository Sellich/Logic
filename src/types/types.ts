export type CourseType = {
  bgColor: string;
  id: string;
  image: string;
  name: string;
  tags: TagsType;
}

export type CourseProps = Omit<CourseType, "tags" | "id">

export interface ICoursesProps {
  courses: CourseType[];
}

export interface ITagsProps {
  tags: TagsType;
  selectedTag: string;
  handleTagSelect: handleTagSelectType;
}

export interface ITagProps { 
  active: boolean;
  name: string; 
  handleTagSelect: handleTagSelectType;
}

export interface IErrorProps {
  error: string;
}

type handleTagSelectType = (tag: TagType) => void;
type TagsType = TagType[];
type TagType = string;