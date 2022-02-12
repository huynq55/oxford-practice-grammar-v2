import React from 'react';
import Layout from '../../components/layout';
import Unit from '../../components/Unit';
import { Fragment } from 'react';
import Sidebar from '../../components/Sidebar';
import { linkListBasic } from '../../utils/linkList';
import Exercise from '../../components/Exercise';
import Answer from '../../components/Answer';
import Example from '../../components/Example';
import BoxOfWord from '../../components/BoxOfWord';
import { StaticImage } from 'gatsby-plugin-image';

const Unit1 = (props) => {
  return (
    <Layout
      pageTitle='Be: Present Simple (1)'
      sidebar={<Sidebar linkList={linkListBasic} />}
    >
      <Unit name={<Fragment>Present Simple (1)</Fragment>}>
        <Exercise
          letter='A'
          introduction={
            <Fragment>
              Add <em>-s</em> or <em>-es</em> to the verbs in the sentences if
              it is necessary.
            </Fragment>
          }
        >
          <Example /> He (work) <Answer answer={['works']} isRevealed /> in a
          bank.
          <br />
          <Example /> They (live) <Answer answer={['live']} isRevealed /> in
          France.
          <br />
          1. I (watch) <Answer answer={['watch']} textFieldSize={5} /> TV every
          day.
          <br />
          2. She (go) <Answer answer={['goes']} textFieldSize={5} /> to work by
          car.
          <br />
          3. The film (finish){' '}
          <Answer answer={['finishes']} textFieldSize={5} /> at ten o'clock.
          <br />
          4. We (play) <Answer answer={['play']} textFieldSize={5} /> tennis
          every weekend.
          <br />
          5. They (go) <Answer answer={['go']} textFieldSize={5} /> on holiday
          in August.
          <br />
          6. He (speak) <Answer answer={['speaks']} textFieldSize={5} /> Italian
          and French.
          <br />
          7. She (do) <Answer answer={['does']} textFieldSize={5} /> her
          homework every night.
          <br />
          8. We (start) <Answer answer={['start']} textFieldSize={5} /> work at
          half past eight.
          <br />
        </Exercise>
        <Exercise
          letter='B'
          introduction={
            <Fragment>
              Now finish these sentences using a verb from the box. Use each
              verb once. Remember to add <em>-s</em> or <em>-es</em> if
              necessary.
            </Fragment>
          }
        >
          <BoxOfWord
            words={[
              'fly',
              'study',
              'finish',
              'eat',
              'sell',
              'smoke',
              'drink',
              'live',
            ]}
            strikethrough={[3]}
          />
          <Example /> He <Answer answer={['eats']} isRevealed /> toast for
          breakfast.
          <br />
          1. I <Answer answer={['drink']} /> coffee three times a day.
          <br />
          2. My father <Answer answer={['studies']} /> a new language every
          year.
          <br />
          3. She <Answer answer={['flies']} /> to New York once a month.
          <br />
          4. He <Answer answer={['smokes']} /> ten cigarettes a day.
          <br />
          5. They <Answer answer={['live']} /> in Ireland.
          <br />
          6. He <Answer answer={['finishes']} /> work at six o'clock.
          <br />
          7. I <Answer answer={['sell']} /> fruit in a shop.
        </Exercise>
        <Exercise
          letter='C'
          introduction={
            <Fragment>
              Write these sentences, using the negative form of the Present
              Simple.
            </Fragment>
          }
        >
          <Example /> (He/not/live/in Mexico){' '}
          <Answer
            answer={["He doesn't live in Mexico."]}
            isRevealed
            textFieldSize={20}
          />
          <br />
          1. (She/not/work/in a bank){' '}
          <Answer
            answer={[
              "She doesn't work in a bank.",
              'She does not work in a bank.',
            ]}
            textFieldSize={20}
          />
          <br />
          2. (I/not/play/golf){' '}
          <Answer
            answer={["I don't play golf.", 'I do not play golf.']}
            textFieldSize={20}
          />
          <br />
          3. (Paul/not/listen/to the radio){' '}
          <Answer
            answer={[
              "Paul doesn't listen to the radio.",
              'Paul does not listen to the radio',
            ]}
            textFieldSize={20}
          />
          <br />
          4. (We/not/speak/French){' '}
          <Answer
            answer={["We don't speak French.", 'We do not speak French.']}
            textFieldSize={20}
          />
          <br />
          5. (You/not/listen/to me!){' '}
          <Answer
            answer={["You don't listen to me!", 'You do not listen to me!']}
            textFieldSize={20}
          />
          <br />
          6. (My car/not/work){' '}
          <Answer
            answer={["My car doesn't work.", 'My car does not work.']}
            textFieldSize={20}
          />
          <br />
          7. (I/not/drink/tea){' '}
          <Answer
            answer={["I don't drink tea.", 'I do not drink tea.']}
            textFieldSize={20}
          />
          <br />
          8. (Sheila/not/eat/meat){' '}
          <Answer
            answer={["Sheila doesn't eat meat.", 'Sheila does not eat meat.']}
            textFieldSize={20}
          />
          <br />
          9. (I/not/understand/you){' '}
          <Answer
            answer={["I don't understand you.", 'I do not understand you.']}
            textFieldSize={20}
          />
          <br />
        </Exercise>
      </Unit>
    </Layout>
  );
};

export default Unit1;
