import * as React from 'react';
import { IErrorProps } from '~types/types';

const Error = ({error}: IErrorProps) => {
  return (
    <div className="error-message">
      {error}
    </div>
  )
}

export default Error;
