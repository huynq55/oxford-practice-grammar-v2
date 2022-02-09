import React from 'react';
import Layout from '../../components/layout';
import Unit from '../../components/Unit';
import { Fragment } from 'react';
import Sidebar from '../../components/Sidebar';
import { linkListBasic } from '../../utils/linkList';
import Exercise from '../../components/Exercise';
import Answer from '../../components/Answer';
import Example from '../../components/Example';

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
          My father <Answer answer={['is']} /> a teacher.
          <br />
          My mother <Answer answer={['is not']} /> (not) Brazilian.
          <br />
          She <Answer answer={['is']} /> from America.
          <br />
          I <Answer answer={['am']} /> twenty years old.
          <br />
          My little brother <Answer answer={['is']} /> two.
          <br />
          My older brothers <Answer answer={['are not']} /> (not) students.
          <br />
          They <Answer answer={['are']} /> in the army.
          <br />
          It <Answer answer={['is']} /> often very hot in Brazil.
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
          <Example />I <Answer answer={["'m not"]} isRevealed /> (not) a bank
          manager.
          <br />
          She <Answer answer={["isn't"]} /> (not) a teacher.
          <br />
          He <Answer answer={['is']} /> a student.
          <br />
          They <Answer answer={['are']} /> at home.
          <br />
          They <Answer answer={["aren't"]} /> (not) in the park.
          <br />
          It <Answer answer={["isn't"]} /> (not) cold today.
          <br />
          It <Answer answer={['is']} /> eight o&apos;clock.
          <br />
          We <Answer answer={['are']} /> from Paris.
          <br />
          We <Answer answer={["aren't"]} /> (not) from Bordeaux.
          <br />
          You <Answer answer={["aren't"]} /> (not) a twenty-one.
          <br />
          I <Answer answer={["'m"]} /> twenty-four.
        </Exercise>
      </Unit>
    </Layout>
  );
};

export default Unit1;
