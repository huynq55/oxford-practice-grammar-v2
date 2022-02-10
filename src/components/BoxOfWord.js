import React from 'react';
import { boxOfWord, word } from './BoxOfWord.module.css';

const BoxOfWord = (props) => {
  const words = [];
  for (let i = 0; i < props.words.length; i++)
    words.push([props.words[i], props.strikethrough.includes(i)]);

  return (
    <div className={boxOfWord}>
      {words.map((w, index) =>
        w[1] ? (
          <div key={index} className={word}>
            <del>{w[0]}</del>
          </div>
        ) : (
          <div key={index} className={word}>
            {w[0]}
          </div>
        )
      )}
    </div>
  );
};

export default BoxOfWord;
