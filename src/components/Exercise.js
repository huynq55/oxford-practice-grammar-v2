import React from 'react';
import { exerciseLetter, exerciseIntroduction } from './Exercise.module.css';

const Exercise = (props) => {
  return (
    <div className='exercise'>
      <span className={exerciseLetter}>{props.letter}</span>
      <h3 className={exerciseIntroduction}>{props.introduction}</h3>
      <br />
      {props.children}
    </div>
  );
};

export default Exercise;
