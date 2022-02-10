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
import { img } from './css/1D.module.css';
import { StaticImage } from 'gatsby-plugin-image';

const Unit1 = (props) => {
  return (
    <Layout
      pageTitle='Be: Present Simple (1)'
      sidebar={<Sidebar linkList={linkListBasic} />}
    >
      <Unit
        name={
          <Fragment>
            <strong>Be</strong>: Present Simple (1)
          </Fragment>
        }
      >
        <Exercise
          letter='A'
          introduction={
            <Fragment>
              Maria is from Brazil. She is writing about herself and her family.
              Put full forms of <em>be</em> in the gaps.
            </Fragment>
          }
        >
          <Example /> I <Answer answer={['am']} isRevealed /> a student from
          Brazil.
          <br />
          <Example /> My parents <Answer answer={['are not']} isRevealed />{' '}
          (not) rich.
          <br />
          1. My father <Answer answer={['is']} /> a teacher.
          <br />
          2. My mother <Answer answer={['is not']} /> (not) Brazilian.
          <br />
          3. She <Answer answer={['is']} /> from America.
          <br />
          4. I <Answer answer={['am']} /> twenty years old.
          <br />
          5. My little brother <Answer answer={['is']} /> two.
          <br />
          6. My older brothers <Answer answer={['are not']} /> (not) students.
          <br />
          7. They <Answer answer={['are']} /> in the army.
          <br />
          8. It <Answer answer={['is']} /> often very hot in Brazil.
        </Exercise>
        <Exercise
          letter='B'
          introduction={
            <Fragment>
              Now fill these gaps. This time, use short forms of <em>be</em>, as
              in the examples.
            </Fragment>
          }
        >
          <Example /> I <Answer answer={["'m"]} isRevealed /> a doctor.
          <br />
          <Example /> I <Answer answer={["'m not"]} isRevealed /> (not) a bank
          manager.
          <br />
          1. She <Answer answer={["isn't"]} /> (not) a teacher.
          <br />
          2. He <Answer answer={['is']} /> a student.
          <br />
          3. They <Answer answer={['are']} /> at home.
          <br />
          4. They <Answer answer={["aren't"]} /> (not) in the park.
          <br />
          5. It <Answer answer={["isn't"]} /> (not) cold today.
          <br />
          6. It <Answer answer={['is']} /> eight o&apos;clock.
          <br />
          7. We <Answer answer={['are']} /> from Paris.
          <br />
          8. We <Answer answer={["aren't"]} /> (not) from Bordeaux.
          <br />
          9. You <Answer answer={["aren't"]} /> (not) a twenty-one.
          <br />
          10. I <Answer answer={["'m"]} /> twenty-four.
        </Exercise>
        <Exercise
          letter='C'
          introduction={
            <Fragment>Choose words from the box to put in the gaps.</Fragment>
          }
        >
          <BoxOfWord
            numberOfColumns='8'
            words={[
              "He's",
              "She's",
              "They're",
              "It's (x2)",
              'are',
              'is',
              'We',
              "isn't",
            ]}
            strikethrough={[2]}
          />
          <Example /> My parents live in Scotland.
          <Answer answer={["They're"]} isRevealed /> teachers.
          <br />
          1. New York <Answer answer={["isn't"]} /> in England.
          <Answer answer={["It's"]} /> in America.
          <br />
          2. Paul <Answer answer={['is']} /> from Germany.
          <Answer answer={["He's"]} /> German.
          <br />
          3. My sister is a doctor. <Answer answer={["She's"]} /> thirty years
          old.
          <br />
          4. <Answer answer={["It's"]} /> six o&apos;clock!{' '}
          <Answer answer={['We']} /> are late.
          <br />
          5. Look at the time! Chris and Mary <Answer answer={['are']} /> late.
          <br />
        </Exercise>
        <Exercise
          letter='D'
          introduction={
            <Fragment>
              Look at these pictures. These people are saying who they are.
              Write sentences, choosing the correct jobs from the box, as in the
              example.
            </Fragment>
          }
        >
          <BoxOfWord
            words={[
              'a pop star',
              'a farmer',
              'a bank manager',
              'a footballer',
              'a dentist',
              'a doctor',
              'a policeman',
              'an artist',
              'a teacher',
              'a film star',
              'a scientist',
              'a photographer',
            ]}
            strikethrough={[3, 6]}
          />
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>
              <Example />
              <StaticImage
                src='./images/unit1/1D1.PNG'
                className={img}
                alt=''
              />
              <br />
              names:
              <br />
              <Answer
                answer={["I'm Paolo and this is Federico."]}
                textFieldSize={20}
                isRevealed
              />
              <br />
              nationality:
              <br />
              <Answer
                answer={["We're from Italy."]}
                textFieldSize={20}
                isRevealed
              />
              <br />
              jobs:
              <br />
              <Answer
                answer={["I'm a policeman and Federico is a footballer."]}
                textFieldSize={20}
                isRevealed
              />
            </div>
            <div>
              1.{' '}
              <StaticImage
                src='./images/unit1/1D2.PNG'
                className={img}
                alt=''
              />
              <br />
              names:
              <br />
              <Answer
                answer={["I'm Bjorn and this is Liv."]}
                textFieldSize={20}
              />
              <br />
              nationality:
              <br />
              <Answer answer={["We're from Sweden."]} textFieldSize={20} />
              <br />
              jobs:
              <br />
              <Answer
                answer={["I'm a doctor and Liv is a film star."]}
                textFieldSize={20}
              />
            </div>
            <div>
              2.{' '}
              <StaticImage
                src='./images/unit1/1D3.PNG'
                className={img}
                alt=''
              />
              <br />
              names:
              <br />
              <Answer
                answer={["I'm Maria and this is Pedro."]}
                textFieldSize={20}
              />
              <br />
              nationality:
              <br />
              <Answer answer={["We're from Mexico."]} textFieldSize={20} />
              <br />
              jobs:
              <br />
              <Answer
                answer={["I'm a teacher and Pedro is a pop star."]}
                textFieldSize={20}
              />
            </div>
            <div>
              3.{' '}
              <StaticImage
                src='./images/unit1/1D4.PNG'
                className={img}
                alt=''
              />
              <br />
              names:
              <br />
              <Answer
                answer={["I'm Jim and this is Mary."]}
                textFieldSize={20}
              />
              <br />
              nationality:
              <br />
              <Answer answer={["We're from Australia."]} textFieldSize={20} />
              <br />
              jobs:
              <br />
              <Answer
                answer={["I'm a bank manager and Mary is an artist."]}
                textFieldSize={20}
              />
            </div>
            <div>
              4.{' '}
              <StaticImage
                src='./images/unit1/1D5.PNG'
                className={img}
                alt=''
              />
              <br />
              names:
              <br />
              <Answer
                answer={["I'm Tomoko and this is Akira."]}
                textFieldSize={20}
              />
              <br />
              nationality:
              <br />
              <Answer answer={["We're from Japan."]} textFieldSize={20} />
              <br />
              jobs:
              <br />
              <Answer
                answer={["I'm a dentist and Akira is a photographer."]}
                textFieldSize={20}
              />
            </div>
            <div>
              5.{' '}
              <StaticImage
                src='./images/unit1/1D6.PNG'
                className={img}
                alt=''
              />
              <br />
              names:
              <br />
              <Answer
                answer={["I'm Rajiv and this is Vikram."]}
                textFieldSize={20}
              />
              <br />
              nationality:
              <br />
              <Answer answer={["We're from India."]} textFieldSize={20} />
              <br />
              jobs:
              <br />
              <Answer
                answer={["I'm a scientist and Vikram is a farmer."]}
                textFieldSize={20}
              />
            </div>
          </div>
        </Exercise>
      </Unit>
    </Layout>
  );
};

export default Unit1;
