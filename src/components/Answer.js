import React, { Fragment, useRef, useState } from 'react';
import { answer, inputAnswer, right, wrong } from './Answer.module.css';

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
        <span className={answer}>{props.answer.join('/')}</span>
      ) : (
        <input type='text' className={inputAnswer} ref={textField} />
      )}
      {renderResult(result)}
      {show ? <span className={answer}> {props.answer.join('/')}</span> : null}
      {!props.isRevealed ? (
        <div style={{ display: 'inline' }}>
          <button onClick={checkAnswer}>Check</button>
          {!show ? (
            <button onClick={showAnswer}>Show</button>
          ) : (
            <button onClick={hideAnswer}>Hide</button>
          )}
        </div>
      ) : null}
    </Fragment>
  );
}

export default Answer;
