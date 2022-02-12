import React from 'react';
import Layout from '../../components/layout';
import Unit from '../../components/Unit';
import { Fragment } from 'react';
import Sidebar from '../../components/Sidebar';
import { linkListBasic } from '../../utils/linkList';
import Exercise from '../../components/Exercise';
import BoxOfWord from '../../components/BoxOfWord';
import Example from '../../components/Example';
import { StaticImage } from 'gatsby-plugin-image';
import Answer from '../../components/Answer';

const Unit2 = (props) => {
  return (
    <Layout
      pageTitle='Be: Present Simple (2)'
      sidebar={<Sidebar linkList={linkListBasic} />}
    >
      <Unit
        name={
          <Fragment>
            <strong>Be</strong>: Present Simple (2)
          </Fragment>
        }
      >
        <Exercise
          letter='A'
          introduction={
            <Fragment>
              Make sentences about the pictures using the words in the box. Use{' '}
              <em>He/She/They</em> and the Present Simple of <em>be</em>.
            </Fragment>
          }
        >
          <BoxOfWord
            words={[
              'tired',
              'sad',
              'thirsty',
              'happy',
              'hungry',
              'bored',
              'afraid',
              'cold',
            ]}
            strikethrough={[2]}
          />
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            <div>
              <StaticImage
                src='../basic/images/unit2/2A1.PNG'
                className={StaticImage}
                alt=''
              />
              <br />
              <Example /> <Answer answer={["She's thirsty"]} isRevealed />
            </div>
            <div>
              <StaticImage
                src='../basic/images/unit2/2A2.PNG'
                className={StaticImage}
                alt=''
              />
              <br />
              1. He{' '}
              <Answer answer={["'s cold", 'is cold']} textFieldSize={10} />
            </div>
            <div>
              <StaticImage
                src='../basic/images/unit2/2A3.PNG'
                className={StaticImage}
                alt=''
              />
              <br />
              2. They{' '}
              <Answer answer={["'re happy", 'are happy']} textFieldSize={10} />
            </div>
            <div>
              <StaticImage
                src='../basic/images/unit2/2A4.PNG'
                className={StaticImage}
                alt=''
              />
              <br />
              3.{' '}
              <Answer
                answer={["He's afraid", 'He is afraid']}
                textFieldSize={10}
              />
            </div>
            <div>
              <StaticImage
                src='../basic/images/unit2/2A5.PNG'
                className={StaticImage}
                alt=''
              />
              <br />
              4.{' '}
              <Answer
                answer={["She's bored", 'She is bored']}
                textFieldSize={10}
              />
            </div>
            <div>
              <StaticImage
                src='../basic/images/unit2/2A6.PNG'
                className={StaticImage}
                alt=''
              />
              <br />
              5.{' '}
              <Answer
                answer={["He's hungry", 'He is hungry']}
                textFieldSize={10}
              />
            </div>
            <div>
              <StaticImage
                src='../basic/images/unit2/2A7.PNG'
                className={StaticImage}
                alt=''
              />
              <br />
              6.{' '}
              <Answer
                answer={["They're sad", 'They are sad']}
                textFieldSize={10}
              />
            </div>
            <div>
              <StaticImage
                src='../basic/images/unit2/2A8.PNG'
                className={StaticImage}
                alt=''
              />
              <br />
              7.{' '}
              <Answer
                answer={["They're tired", 'They are tired']}
                textFieldSize={10}
              />
            </div>
          </div>
        </Exercise>
        <Exercise
          letter='B'
          introduction={
            <Fragment>
              Use <em>there</em> + the correct form of <em>be</em> to say what
              we can add cannot find in the town of Smallwood.
            </Fragment>
          }
        >
          <Example /> (a cinema: {'\u2713'}){' '}
          <Answer answer={["There's"]} isRevealed /> a cinema.
          <br />
          <Example /> (<del>a river</del>){' '}
          <Answer answer={["There isn't"]} isRevealed /> a river.
          <br />
          <Example /> (restaurants: 10){' '}
          <Answer answer={['There are']} isRevealed /> ten restaurants.
          <br />
          1. (a castle: {'\u2713'}){' '}
          <Answer answer={["There's", 'There is']} textFieldSize={10} /> a
          castle.
          <br />
          2. (baker&apos;s shops: 2){' '}
          <Answer answer={['There are']} textFieldSize={10} /> two baker&apos;s
          shops.
          <br />
          3. (a zoo: {'\u2713'}){' '}
          <Answer answer={["There's", 'There is']} textFieldSize={10} /> a zoo.
          <br />
          4. (banks: 6) <Answer answer={['There are']} textFieldSize={10} /> six
          banks.
          <br />
          5. (a luxury hotel: {'\u2713'}){' '}
          <Answer answer={["There's", 'There is']} textFieldSize={10} /> a
          luxury hotel.
          <br />
          6. (<del>a theatre</del>){' '}
          <Answer answer={["There isn't", 'There is not']} textFieldSize={10} />{' '}
          a theatre.
          <br />
          7. (newsagents: 6){' '}
          <Answer answer={['There are']} textFieldSize={10} /> six newsagents.
          <br />
          8. (<del>many tourists</del>){' '}
          <Answer
            answer={["There aren't", 'There are not']}
            textFieldSize={10}
          />{' '}
          many tourists.
        </Exercise>
        <Exercise
          letter='C'
          introduction='Write questions by putting the words in brackets ( ) in the correct order.'
        >
          <Example /> (thirsty - you - are){' '}
          <Answer answer={['Are you thirsty?']} isRevealed />
          <br />
          1. (a teacher - you - are){' '}
          <Answer answer={['Are you a teacher?']} textFieldSize={20} />
          <br />
          2. (they - bored - are){' '}
          <Answer answer={['Are they bored?']} textFieldSize={20} />
          <br />
          3. (is - afraid - he){' '}
          <Answer answer={['Is he afraid?']} textFieldSize={20} />
          <br />
          4. (she - tired - is){' '}
          <Answer answer={['Is she tired?']} textFieldSize={20} />
          <br />
          5. (are - you - how){' '}
          <Answer answer={['How are you?']} textFieldSize={20} />
          <br />
          6. (cold today - it - is){' '}
          <Answer answer={['Is it cold today?']} textFieldSize={20} />
          <br />
          7. (she - Spanish - is){' '}
          <Answer answer={['Is she Spanish?']} textFieldSize={20} />
          <br />
          8. (they - from London - are){' '}
          <Answer answer={['Are they from London?']} textFieldSize={20} />
        </Exercise>
        <Exercise
          letter='D'
          introduction={
            <Fragment>
              Put forms of <em>be</em> in these conversations.
            </Fragment>
          }
        >
          Steve: This (<Example />) <Answer answer={['is']} isRevealed /> Joan,
          my sister.
          <br />
          Tom: Hello, Joan. (1) <Answer
            answer={['Are']}
            textFieldSize={5}
          />{' '}
          you a student?
          <br />
          Joan: No, I (2) <Answer answer={["'m", 'am']} textFieldSize={5} /> a
          dentist. I work in Brighton.
          <br />
          Mike: How are you, Sally?
          <br />
          Sally: I (3) <Answer answer={["'m", 'am']} textFieldSize={5} /> fine,
          thanks.
          <br />
          Mike: (4) <Answer answer={['Are']} textFieldSize={5} /> you hungry?
          <br />
          Sally: Yes. (5) <Answer answer={['Is']} textFieldSize={5} /> there are
          good restaurant near here?
          <br />
          Mike: Yes. There (6){' '}
          <Answer answer={["'s", 'is']} textFieldSize={5} /> a good, and cheap,
          restaurant in Wellington Street.
        </Exercise>
        <Exercise
          letter='E'
          introduction={
            <Fragment>
              Write questions using the words in brackets ( ) and a form of{' '}
              <em>be</em>.
            </Fragment>
          }
        >
          QUESTION
          <br />
          <Example /> (you/Spanish)?{' '}
          <Answer answer={['Are you Spanish?']} isRevealed />
          <br />
          ANSWER
          <br />
          No, I'm French.
          <hr />
          QUESTION
          <br />
          1. (you/hungry)?{' '}
          <Answer answer={['Are you hungry?']} textFieldSize={20} />
          <br />
          ANSWER
          <br />
          No, I'm thirsty.
          <hr />
          QUESTION
          <br />
          2. (she/your sister)?{' '}
          <Answer answer={['Is she your sister?']} textFieldSize={20} />
          <br />
          ANSWER
          <br />
          No, she's my mother.
          <hr />
          QUESTION
          <br />
          3. (I/late)? <Answer answer={['Am I late?']} textFieldSize={20} />
          <br />
          ANSWER
          <br />
          No, you're on time.
          <hr />
          QUESTION
          <br />
          4. (they/from America)?{' '}
          <Answer answer={['Are they from America?']} textFieldSize={20} />
          <br />
          ANSWER
          <br />
          No, they're from Canada.
          <hr />
          QUESTION
          <br />
          5. (he/a tennis player)?{' '}
          <Answer answer={['Is he a tennis player?']} textFieldSize={20} />
          <br />
          ANSWER
          <br />
          No, he's a footballer.
          <hr />
          QUESTION
          <br />
          6. (you/happy)?{' '}
          <Answer answer={['Are you happy?']} textFieldSize={20} />
          <br />
          ANSWER
          <br />
          No, I'm sad.
          <hr />
          QUESTION
          <br />
          7. (she/at home)?{' '}
          <Answer answer={['Is she at home?']} textFieldSize={20} />
          <br />
          ANSWER
          <br />
          No, she's at work.
          <hr />
          QUESTION
          <br />
          8. (he/twenty)?{' '}
          <Answer answer={['Is he twenty?']} textFieldSize={20} />
          <br />
          ANSWER
          <br />
          No, he's eighteen years old.
        </Exercise>
      </Unit>
    </Layout>
  );
};

export default Unit2;
