import React from 'react';
import Layout from '../../components/layout';
import Unit from '../../components/Unit';
import { Fragment } from 'react';
import Sidebar from '../../components/Sidebar';
import { linkListBasic } from '../../utils/linkList';

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
      ></Unit>
    </Layout>
  );
};

export default Unit2;
