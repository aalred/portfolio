import styles from '../styles/Content.module.css';

import { NextPage } from 'next';

import Fade from '@mui/material/Fade';

import Layout from '../components/Layout/layout';
import TechSkills from '../components/Skills/TechSkills';
import { skills } from '../Interfaces';

const Aboutme: NextPage = () => {

  return (
    <div>
      <Layout>
        <div className={styles.content}>
          <div className={styles['content__description']}>
            <br />
            <div className={styles['content__container']}>
              <p>Hello! I&apos;m a web developer and I have experience with teamwork, stack MERN, DB managment {'(relationals and no relationals)'}, API REST, SCRUM and a I like to learn new things.</p>
              <p>I studied +700 hrs in the bootcamp <a href='https://www.soyhenry.com/hiring-en' className={styles['content__link']} > Soy Henry </a> with theoretical and practical exercises.</p>

              <p>I am willing to face new challenges, have new experiences and continuously improve</p>
            </div>
            <div className={`${styles['content__container']}`}>
              <h2>Tech-Skills</h2>
              <TechSkills />
            </div>
            <div className={`${styles['content__container']}`}>
              <h2>Soft-Skills</h2>
              <div className={styles['content__box']}>
                {skills.map((e, i) => <b key={i} className={`${styles['content__box-item']}`}>{e.name}</b>)}
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </Layout>
    </div>
  );
};

export default Aboutme;