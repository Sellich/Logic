import * as React from 'react';
import './Tags.scss';
import Tag from '~components/Tag/Tag';
import { ITagsProps } from '~types/types';
import { ALL_TAGS } from '~constants/constants';

const Tags = React.memo(({ tags, selectedTag, handleTagSelect }: ITagsProps) => {
  const defaultTagProps = {
    name: ALL_TAGS,
    handleTagSelect,
    active: ALL_TAGS === selectedTag,
  }

  return (
    <aside>
      <ul className="tags-list">
        <Tag key={ALL_TAGS} {...defaultTagProps} />
        {tags.map(tag => <Tag key={tag} handleTagSelect={handleTagSelect} active={tag === selectedTag} name={tag} />)}
      </ul>
    </aside>
  )
})

export default Tags;
