import styles from '../styles/Home.module.css';

import { NextPage } from 'next';
import React from 'react';

import Layout from '../components/Layout/layout';
import Projects from '../components/Projects/Projects';
import Button from '@mui/material/Button'

const Home: NextPage = () => {

 function handleClick() {
   const element = window?.document.getElementById('component');
   element?.scrollIntoView();
  };

  return (
    <div className={styles.container}>
      <div className={styles['container__shadow']}>
        <Layout>
          <div className={styles['container__text']}>
            <h2> Hello I&apos;m {"< Josue Rojas />"} <br /> Full Stack Web Developer </h2>
          </div>
          <div className={styles['container__items']} id='component' >
            <Button className={styles['container__items-btn']} onClick={() => handleClick()} variant="text" color="inherit">
              See my projects
            </Button>
            <div className={styles['container__items-component']}>
              <Projects />
            </div>
            <br />
            <br />
          </div>
        </Layout >
      </div>
    </div>
  );
}

export default Home;