import React, { Fragment, useRef, useState } from 'react';
import {
  answer,
  inputAnswer,
  right,
  wrong,
  answerInExample,
} from './Answer.module.css';

function Answer(props) {
  const textField = useRef(null);
  // result is the result after check answer
  const [result, setResult] = useState('');
  // show is the variable controls show/hide button
  const [show, setShow] = useState(false);

  const checkAnswer = () => {
    let textFieldValue = textField.current.value.trim();
    let result = props.answer.includes(textFieldValue) ? '\u2713' : '\u2717';
    setResult(result);
  };

  const renderResult = (r) => {
    if (r === '\u2713') return <span className={right}>{result}</span>;
    if (r === '\u2717') return <span className={wrong}>{result}</span>;
  };

  const showAnswer = () => {
    setShow(true);
  };

  const hideAnswer = () => {
    setShow(false);
  };

  return (
    <Fragment>
      {props.isRevealed ? (
        <span className={answerInExample}>{props.answer.join('/')}</span>
      ) : (
        <input
          type='text'
          className={inputAnswer}
          ref={textField}
          size={props.textFieldSize === undefined ? 5 : props.textFieldSize}
        />
      )}
      {renderResult(result)}
      {!props.isRevealed ? (
        <div style={{ display: 'inline-block' }} className='my-1'>
          <button
            onClick={checkAnswer}
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-0.5 w-20'
          >
            Check
          </button>
          {!show ? (
            <button
              onClick={showAnswer}
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-0.5 w-20'
            >
              Show
            </button>
          ) : (
            <button
              onClick={hideAnswer}
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-0.5 w-20'
            >
              Hide
            </button>
          )}
        </div>
      ) : null}
      {show ? <span className={answer}>{props.answer.join('/')}</span> : null}
    </Fragment>
  );
}

export default Answer;
