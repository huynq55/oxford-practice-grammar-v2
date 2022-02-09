import React from 'react';
import { heading } from './Unit.module.css';

export default function Unit(props) {
  return (
    <div className='unit'>
      <h2 className={heading}>{props.name}</h2>
      {props.children}
    </div>
  );
}
