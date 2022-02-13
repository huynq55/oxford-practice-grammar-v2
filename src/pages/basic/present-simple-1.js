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
        <Exercise
          letter='D'
          introduction={
            <Fragment>
              Put in the verbs from the box, in the Present Simple. Use each
              verb once.
            </Fragment>
          }
        >
          <BoxOfWord
            words={[
              'leave',
              'start',
              'arrive',
              'get',
              'watch',
              'work',
              'brush',
              'eat',
              'have',
              'like',
              'drink',
              'go',
              'stop',
            ]}
            strikethrough={[3]}
          />
          Interviewer: How do you start the day, Jim?
          <br />
          Jim: Well, I (<Example />) <Answer answer={['get']} isRevealed /> up
          at six o'clock. I get washed and dressed, and I (1){' '}
          <Answer answer={['eat']} /> breakfast at seven o'clock. After
          breakfast, I (2) <Answer answer={['brush']} /> my teeth. I (3){' '}
          <Answer answer={['go']} /> to work at eight.
          <br />
          Interviewer: When do you get to work?
          <br />
          Jim: I usually (4) <Answer answer={['arrive']} /> at my office at
          about half past eight. First, I (5){' '}
          <Answer answer={['drink', 'have']} /> a cup of coffee, and then I (6){' '}
          <Answer answer={['start']} /> work at 8.45 a.m.
          <br />
          Interviewer: Where do you work?
          <br />
          Jim: I (7) <Answer answer={['work']} /> in a bank. I am a computer
          operator. I (8) <Answer answer={['like']} /> my job. It's very
          interesting.
          <br />
          Interviewer: When do you eat lunch?
          <br />
          Jim: I (9) <Answer answer={['finish']} /> work and I have lunch at one
          o'clock. I (10) <Answer answer={['drink', 'have']} /> a cup of tea at
          half past three.
          <br />
          Interviewer: When do you finish work?
          <br />
          Jim: I (11) <Answer answer={['leave']} /> the office at six o'clock. I
          eat dinner when I get home. Then I (12) <Answer answer={['watch']} />{' '}
          TV for an hour or two.
        </Exercise>
        <Exercise
          letter='E'
          introduction={
            <Fragment>
              Use the table to write facts about Joan. A tick ({'\u2713'}) means
              that something is true. A cross ({'\u2717'}) means that something
              is not true. Use the verbs in brackets ( ).
            </Fragment>
          }
        >
          <BoxOfWord
            words={[
              <Fragment>
                <Example /> from Scotland {'\u2713'} from England {'\u2717'}
              </Fragment>,
              <Fragment>
                1. in a bank {'\u2717'} in a shop {'\u2713'}
              </Fragment>,
              <Fragment>
                2. in a flat {'\u2713'} in a house {'\u2717'}
              </Fragment>,
              <Fragment>
                3. French {'\u2713'} Italian {'\u2717'}
              </Fragment>,
              <Fragment>
                4. new films {'\u2717'} old films {'\u2713'}
              </Fragment>,
            ]}
            strikethrough={[]}
          />
          <Example /> (come)
          <br />
          <Answer answer={['She comes from Scotland.']} isRevealed />
          <br />
          <Answer answer={["She doesn't come from England."]} isRevealed />
          <br />
          1 (work)
          <br />
          She{' '}
          <Answer
            answer={["doesn't work", 'does not work']}
            textFieldSize={10}
          />{' '}
          in a bank.
          <br />
          She <Answer answer={['works']} textFieldSize={10} /> in a shop.
          <br />2 (live)
          <br />
          She <Answer answer={['lives in a flat.']} textFieldSize={20} />
          <br />
          She{' '}
          <Answer
            answer={["doesn't live in a house.", 'does not live in a house.']}
            textFieldSize={20}
          />
          <br />3 (speak)
          <br />
          <Answer answer={['She speaks French.']} textFieldSize={20} />
          <br />
          <Answer
            answer={[
              "She doesn't speak Italian.",
              'She does not speak Italian.',
            ]}
            textFieldSize={20}
          />
          <br />
          4 (like)
          <br />
          <Answer
            answer={[
              "She doesn't like new films.",
              'She does not like new films.',
            ]}
            textFieldSize={20}
          />
          <br />
          <Answer answer={['She likes old films.']} textFieldSize={20} />
        </Exercise>
      </Unit>
    </Layout>
  );
};

export default Unit1;
