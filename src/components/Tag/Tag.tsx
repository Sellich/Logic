import * as React from 'react'
import './Tag.scss';
import { ITagProps } from '~types/types';

const Tag = ({ active, name, handleTagSelect }: ITagProps) => {
  return (
    <li className={`tag ${active ? 'active' : ''}`} onClick={() => handleTagSelect(name)}>
      <h1 className="text">
        {name}
      </h1>
    </li>
  )
}

export default Tag;
